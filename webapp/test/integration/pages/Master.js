sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5,Press,PropertyStrictEquals) {
	"use strict";
	var sViewName = "Master";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
			iPressTheSayHelloWithDialogButton: function () {
					return this.waitFor({
						id: "helloDialogButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Did not find the 'Click to open dialog' button on the HelloPanel view"
					});
				}
			},

			assertions: {

			/*	iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The Master view is displayed");
						},
						errorMessage: "Did not find the Master view"
					});
				},*/
				iShouldSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				},
					iShouldSeeTheHelloDialogText:function () {
					return this.waitFor({
						controlType: "sap.m.Button",
						matchers: new PropertyStrictEquals({name: "text", value: "Close"}),
						
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog text is identified");
						},
						errorMessage: "Did not find the dialog Close text"
					});
				},
				iShouldSeeTheDialogTitleText:function(){
						return this.waitFor({
						controlType: "sap.m.Dialog",
						matchers: new PropertyStrictEquals({name: "title", value: "Hello"}),
						
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog Title text is identified");
						},
						errorMessage: "Did not find the dialog title text"
					});
				}
			}
		}
	});

});