<?php

namespace Vtlabs\Doctor\Providers;

use Vtlabs\Core\Events\LoggedIn;
use Vtlabs\Core\Events\RoleAssigned;
use Vtlabs\Doctor\Events\NewAppointment;
use Vtlabs\Doctor\Events\UpdateAppointment;
use Vtlabs\Doctor\Listeners\LoggedInListener;
use Vtlabs\Doctor\Listeners\RoleAssignedListener;
use Vtlabs\Doctor\Listeners\NewAppointmentListener;
use Vtlabs\Doctor\Listeners\UpdateAppointmentListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        LoggedIn::class => [LoggedInListener::class],
        RoleAssigned::class => [RoleAssignedListener::class],
        NewAppointment::class => [NewAppointmentListener::class],
        UpdateAppointment::class => [UpdateAppointmentListener::class]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
