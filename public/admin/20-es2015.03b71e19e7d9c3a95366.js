(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{RMDf:function(e,t,n){"use strict";n.r(t);var r=n("vTDv"),a=n("tyNb"),o=n("fXoL");let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["transactions"]],decls:1,vars:0,template:function(e,t){1&e&&o["\u0275\u0275element"](0,"router-outlet")},directives:[a.h],encapsulation:2}),e})();var s=n("YPVp"),c=n("CdOr"),d=n("Jy/P"),l=n("GJmQ"),h=n("l84p"),m=n("tKl0"),g=n("aceb"),p=n("sPyq"),b=n("AQSd");const u=["ordersChart"];let C=(()=>{class e{constructor(e,t,n){this.dashboardClient=e,this.coreService=t,this.themeService=n,this.alive=!0,this.period="week",this.chartLegend=[],this.themeService.getJsTheme().pipe(Object(l.a)(()=>this.alive)).subscribe(e=>{this.setLegendItems(e.variables.orderProfitLegend)})}ngOnInit(){this.getChartData(this.period)}setLegendItems(e){this.chartLegend=[{iconColor:e.firstItem,title:"Transactions"}]}setPeriodAndGetChartData(e){this.period!==e&&(this.period=e),this.getChartData(e)}getChartData(e){this.dashboardClient.transactionAnalytics(e).subscribe(e=>{this.chartPanelSummary=e.summary,this.ordersChartData=e.chart})}ngOnDestroy(){this.alive=!1}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](h.a),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](g.ib))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-transaction-analytics-charts"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275staticViewQuery"](u,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.ordersChart=n.first)},decls:8,vars:4,consts:[["fullWidth",""],["tabTitle","Transactions"],[1,"chart-container"],[3,"summary"],[3,"type","chartLegend","periodChange"],[3,"ordersChartData"],["ordersChart",""]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card"),o["\u0275\u0275elementStart"](1,"nb-tabset",0),o["\u0275\u0275elementStart"](2,"nb-tab",1),o["\u0275\u0275elementStart"](3,"div",2),o["\u0275\u0275element"](4,"ngx-chart-panel-summary",3),o["\u0275\u0275elementStart"](5,"ngx-chart-panel-header",4),o["\u0275\u0275listener"]("periodChange",(function(e){return t.setPeriodAndGetChartData(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](6,"ngx-orders-chart",5,6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("summary",t.chartPanelSummary),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("type",t.period)("chartLegend",t.chartLegend),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ordersChartData",t.ordersChartData))},directives:[g.o,g.fb,g.eb,p.a,b.a,m.a],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.nb-theme-default   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]     ul{border-color:transparent;padding-bottom:1px}.nb-theme-default   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]     ul .tab-link{padding:1.25rem 2rem}.nb-theme-default   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{flex:1;padding:0 0 1.25rem}.nb-theme-default   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{flex:1;height:100%;display:flex;flex-direction:column;overflow:hidden}.nb-theme-default   [_nghost-%COMP%]   ngx-orders-chart[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-profit-chart[_ngcontent-%COMP%]{padding:0 1.25rem}.nb-theme-dark   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.nb-theme-dark   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]     ul{border-color:transparent;padding-bottom:1px}.nb-theme-dark   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]     ul .tab-link{padding:1.25rem 2rem}.nb-theme-dark   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{flex:1;padding:0 0 1.25rem}.nb-theme-dark   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{flex:1;height:100%;display:flex;flex-direction:column;overflow:hidden}.nb-theme-dark   [_nghost-%COMP%]   ngx-orders-chart[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-profit-chart[_ngcontent-%COMP%]{padding:0 1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.nb-theme-cosmic   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]     ul{border-color:transparent;padding-bottom:1px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]     ul .tab-link{padding:1.25rem 2rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{flex:1;padding:0 0 1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{flex:1;height:100%;display:flex;flex-direction:column;overflow:hidden}.nb-theme-cosmic   [_nghost-%COMP%]   ngx-orders-chart[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-profit-chart[_ngcontent-%COMP%]{padding:0 1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.nb-theme-corporate   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]     ul{border-color:transparent;padding-bottom:1px}.nb-theme-corporate   [_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%]     ul .tab-link{padding:1.25rem 2rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{flex:1;padding:0 0 1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{flex:1;height:100%;display:flex;flex-direction:column;overflow:hidden}.nb-theme-corporate   [_nghost-%COMP%]   ngx-orders-chart[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-profit-chart[_ngcontent-%COMP%]{padding:0 1.25rem}"]}),e})();var f=n("RS3s"),O=n("sYmb");const P=[{path:"",component:i,children:[{path:"list",component:(()=>{class e extends s.a{constructor(e,t,n){super(t),this.client=e,this.coreService=t,this.route=n,this.columns=[{key:"user",translation_key:"TRANSACTION.FIELDS.USER.LABEL",column:{title:"",type:"string",filter:!1,valuePrepareFunction:e=>e.email}},{key:"type",translation_key:"TRANSACTION.FIELDS.TYPE.LABEL",column:{filter:!1,title:"",type:"string"}},{key:"meta",translation_key:"TRANSACTION.FIELDS.META.LABEL",column:{filter:!1,title:"",type:"string",valuePrepareFunction:e=>{var t;return null===(t=e)||void 0===t?void 0:t.description}}},{key:"amount",translation_key:"TRANSACTION.FIELDS.AMOUNT.LABEL",column:{filter:!1,title:"",type:"string"}}],this.editPageUrl="pages/transactions/edit",this.actionSettings={actions:{columnTitle:"Action",position:"right",add:!1,edit:!1,delete:!1}}}ngOnInit(){super.ngOnInit(this.client.getBaseEndpoint()+"/transactions")}delete(e){super.delete(e)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["list"]],features:[o["\u0275\u0275InheritDefinitionFeature"]],decls:9,vars:6,consts:[[1,"row"],[1,"col-xxl-12"],["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"settings","source","delete","edit"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275element"](2,"ngx-transaction-analytics-charts"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"nb-card"),o["\u0275\u0275elementStart"](4,"nb-card-header"),o["\u0275\u0275text"](5),o["\u0275\u0275pipe"](6,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"nb-card-body",2),o["\u0275\u0275elementStart"](8,"ng2-smart-table",3),o["\u0275\u0275listener"]("delete",(function(e){return t.onDeleteConfirm(e)}))("edit",(function(e){return t.edit(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](6,4,"TRANSACTION.LABELS.LIST")," "),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("nbSpinner",t.loading),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[C,g.o,g.q,g.n,g.bb,f.b],pipes:[O.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}"]}),e})()}]}];let M=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.g.forChild(P)],a.g]}),e})();n.d(t,"TransactionsModule",(function(){return _}));let _=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.a,M]]}),e})()}}]);