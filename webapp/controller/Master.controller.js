sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui5/zrouting/controller/BaseController",
	"sap/ui5/zrouting/model/formatter"
], function (Controller,BaseController,formatter) {
	"use strict";

	return BaseController.extend("sap.ui5.zrouting.controller.Master", {
			formatter:formatter,
		onInit: function () {
		var oEventBus =sap.ui.getCore().getEventBus();
		oEventBus.subscribe("DetailView", "showMsg", this.onMasterPress, this);
		},
		onListPress:function(oEvent){
		this.getRouter().navTo("detail", {
				ProductID: oEvent.getSource().getBindingContext().getProperty("ProductID")
			});	
		},
		onMasterPress:function(schaanel,oeventid,odata){
		sap.m.MessageToast.show("Event from Master page");	
		},
		onOpenDialog:function(){
					if (!this.sampleDialog) {
				this.sampleDialog = sap.ui.xmlfragment("sap.ui5.zrouting.view.HelloDialog", this);
				this.getView().addDependent(this.sampleDialog);
		
			}
			
			
			this.sampleDialog.open();
		},
			onCloseDialog: function() {
					this.sampleDialog.close();
				}
	});
});