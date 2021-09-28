sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("OData.FlightPlan.controller.TableReport", {

		onFieldChange: function(event) {
			var model = this.getOwnerComponent().getModel();
			model.submitChanges({
				success: function(output){
						var statusCode = parseInt(output["__batchResponses"][0].response.statusCode, 10);
						if (statusCode === 400) {
							var message = JSON.parse(output["__batchResponses"][0].response.body).error.message.value;
							MessageBox.error(message);
						}
					},
					error: function(){ }
			});
		}
	});

});