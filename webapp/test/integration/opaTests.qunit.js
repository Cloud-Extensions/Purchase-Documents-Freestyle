/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fiori/create/purchase/documents/PurchaseDocumentsFreestyle/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});