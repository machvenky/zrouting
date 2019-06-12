sap.ui.define([
	"sap/ui5/zrouting/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sapui5.demo.mvcapp.controller.Detail", {
		onInit:function(){
			this.getRouter().getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
				},
		_onObjectMatched: function(oEvent) {
			var oArgs = oEvent.getParameter("arguments");
			var oView = this.getView();
			oView.bindElement({
				path: "/ProductSet('" + oArgs.ProductID + "')"
		});
		},
		onNavPress:function(){
			this.myNavBack("master");
		},
		onDetailPress:function(){
			var odata={a:"apple"};
			var oEventBus = sap.ui.getCore().getEventBus();
			oEventBus.publish("DetailView", "showMsg",odata);
		}
		
	});
});