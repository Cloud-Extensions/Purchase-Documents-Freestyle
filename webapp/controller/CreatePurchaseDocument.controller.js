sap.ui.define([
//	"sap/ui/core/mvc/Controller"
	"fiori/create/purchase/documents/PurchaseDocumentsFreestyle/controller/BaseController"
//], function (Controller) {
], function (BaseController) {	
	"use strict";

//	return Controller.extend("fiori.create.purchase.documents.PurchaseDocumentsFreestyle.controller.CreatePurchaseDocument", {
	return BaseController.extend("fiori.create.purchase.documents.PurchaseDocumentsFreestyle.controller.CreatePurchaseDocument", {		
		onInit: function () {
//			this.getOwnerComponent().getRouter().getRoute("CreatePurchaseDocument").attachMatched(this._createPurchaseDocument, this);
//			this.getRoute("CreatePurchaseDocument").attachedMatched(this._createPurchaseDocument, this);
//			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//			oRouter.getRoute("CreatePurchaseDocument").attachMatched(this._createPurchaseDocument, this);
			this.getRouter().getRoute("CreatePurchaseDocument").attachMatched(this._createPurchaseDocument, this);
		},
		_createPurchaseDocument: function(){
			this.getModel().metadataLoaded()
				.then(function() {
					if (!this.getModel().hasPendingChanges()){
						var oPurchaseDocumentBindingContext = this.getModel().createEntry("/PurchaseDocument");
						this.getView().bindElement(oPurchaseDocumentBindingContext.getPath());
					}
				}.bind(this));
		},
		
		onSave: function(){
//			checks Smart Fields in the Smart Form for client errors
			var oSmartForm = this.getView().byId("createPurchaseDocumentSmartForm");
			var aSmartFieldsWithErrors = oSmartForm.check();
			if (aSmartFieldsWithErrors.length !== 0) return;
			
			this.getModel("app").setProperty("/isBusy", true);
			
			this.getModel().submitChanges({
				sucess: function(){
					this.getView().unbindElement();
					this._navToList();
					this.getModel("app").setProperty("/isBusy", false);
				}.bind(this),
				error: function(){
					this.getModel("app").setProperty("/isBusy", false);
				}.bind(this)
			});
		},
		
		onNavToList: function(){
			this._navToList();
		},
		
		_navToList: function(){
			this.getRouter().navTo("DisplayPurchaseDocuments");
		}
		
	});
});