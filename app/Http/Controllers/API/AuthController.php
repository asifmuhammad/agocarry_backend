<?php

namespace App\Http\Controllers\API;

use Vtlabs\Core\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Auth\Authenticatable;
use Carbon\Carbon;

use Vtlabs\Core\Models\User\User;
use Validator;

use Illuminate\Support\Facades\DB;


class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $rules = [
            'name' => 'required',
            'mobile_number' => 'required',
            'password' => 'required',
            'email' => 'required|string|email',
        ];

        // validate the fields of request
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'message'=> $validator->messages()->first()
            ], 401);
        }

        // check user already exist or not
        $user = User::where('mobile_number', $request->mobile_number)->first();
        if($user){
            return response()->json(['message' => 'This mobile number is already exists please try with another number!']);
        }

        // create new user code here
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->mobile_number = $request->mobile_number;
        $user->password = bcrypt($request->password);
        $user->save();
        
        // assign role to the user
        $data=array('role_id'=>'2',"model_type"=>'Vtlabs\Core\Models\User\User',"model_id"=>$user->id);
        DB::table('model_has_roles')->insert($data);

        // send otp to mobile number
        $otp = DB::table('otp')->insert([
            'mobile_number' => $request->mobile_number,
            'otp' => rand(1000, 9999),
        ]);

        // insert data into the media table
        // $media = '';
        if ($request->hasfile('image_url')) {
            $file = $request->file('image_url');
            $extension = $file->getClientOriginalExtension(); //getting image extension
            $filename = time(). '.' .$extension;
            $file->move('assets/images/user',$filename);
            $fileSize = $request->file('image_url')->getMaxFilesize();
            $image_url = '';
            $data = [
                'model_type' => "Vtlabs\Core\Models\User\User",
                'model_id' => $user->id,
                'name' => 200,
                'file_name' => '/assets/images/user/'.$filename,
                'size' => $fileSize,
                'mime_type' => 'image/'.$extension,
                'collection_name' => "image",
                'disk' => "public",
                'manipulations' => "N/A",
                'custom_properties' => "N/A",
                'responsive_images' => "N/A",
            ];

            $media = DB::table('media')->insert($data);
        } 

        // generate token against the user
        $token =  $user->createToken('MyApp')->accessToken;

        // if otp sent successfully then return response to the user
        if($otp){
            return response()->json(
                [   'message' => 'OTP Sent Successfully To Your Mobile Number',
                    'user'=>$user,
                    'mediaurls'=>url($data['file_name'] ?? ''),
                    'image_url'=>url($data['file_name'] ?? ''),
                    'token'=> $token,
                ], 201);
        }else {
            // response to the user if user registration and otp failed.
            return response()->json(['message' => 'Something went wrong please try again']);
        }

    }

    public function login(Request $request)
    {
        $rules = [
            'mobile_number' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['message'=> $validator->messages()->first()], 401);
        }

        $user = DB::table('users')->where('mobile_number', $request->mobile_number)->first();

        if($user){
           $user = Auth::loginUsingId($user->id);

           $token =  $user->createToken('MyApp')->accessToken;

           $otp = DB::table('otp')->insert([
                'mobile_number' => $request->mobile_number,
                'otp' => rand(1000, 9999),
            ]);

            if($otp){
                return response()->json(['message' => 'OTP Sent Successfully To Your Mobile Number Please Verify First','token' => $token], 201);
            }else{
                return response()->json(['message' => 'Something went wrong please try again']);
            }
        }
        else{
            return response()->json(['message' => 'Invalid Credentials'], 401);
        }

    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function verifyOtp(Request $request)
    {
        $otp = DB::table('otp')->where([
            ['mobile_number', $request->mobile_number],
            ['otp', $request->otp],
        ])->first();
        if($otp){
            DB::table('otp')->where('id', $otp->id)->delete();
            
            return response()->json(['message' => 'OTP Matched Successfuly!']);
        }else{
            return response()->json(['message' => 'Please Try Again And Enter Valid OTP!']);
        }
    }
}
