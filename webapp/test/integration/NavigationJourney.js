	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/Master"
	], function (opaTest) {
		"use strict";

	/*	QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			// Assertions
			Then.onTheAppPage.iShouldSeeTheApp();

			//Cleanup
			Then.iTeardownMyApp();
		});*/
			QUnit.module("Checking the Dialog Journey");
		opaTest("Should open the Hello dialog", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyAppInAFrame(sap.ui.require.toUrl("sap/ui5/zrouting/test/mockServer") + ".html");

		//Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog();
		Then.onTheAppPage.iShouldSeeTheHelloDialogText();
		Then.onTheAppPage.iShouldSeeTheDialogTitleText();

		// Cleanup
		Then.iTeardownMyAppFrame();
	});
			
	});