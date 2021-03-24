/*global QUnit*/

sap.ui.define([
	"fiori/create/purchase/documents/PurchaseDocumentsFreestyle/controller/CreatePurchaseDocument.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CreatePurchaseDocument Controller");

	QUnit.test("I should test the CreatePurchaseDocument controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});