/*global QUnit*/

sap.ui.define([
	"sap/ui5/zrouting/model/formatter",
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function (formatter) {
	"use strict";
     QUnit.module("Formatting Category to Uppercase -Correct result");

		QUnit.test("Should return the Uppercase of Name", function (assert) {
			assert.strictEqual(formatter.formatUpperCase("NoteBooks"), "NOTEBOOKS");
		});
		
		QUnit.module("Formatting Category to Uppercase-Incorrect");

		QUnit.test("Should return the Uppercase of Category", function (assert) {
			assert.strictEqual(formatter.formatUpperCase("Apple"), "AppLE");
		});
/*	QUnit.module("Formatting functions", {
		beforeEach: function () {
			this._oResourceModel = new ResourceModel({
				bundleUrl: sap.ui.require.toUrl("com/ui5/test") + "/i18n/i18n.properties"
			});
		},
		afterEach: function () {
			this._oResourceModel.destroy();
		}
	});


	QUnit.test("Should return the translated texts", function (assert) {

		// Arrange
		var oViewStub = {
			getModel: this.stub().withArgs("i18n").returns(this._oResourceModel)
		};
		var oControllerStub = {
			getView: this.stub().returns(oViewStub)
		};

		// System under test
		var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

		// Assert
		assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");

		assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for status B is correct");

		assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");

		assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
	});*/

});
