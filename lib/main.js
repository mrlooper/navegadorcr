var data = require('self').data;
const widgets = require("widget");
const tabs = require("tabs");

var panelConfImpresion = null;

function activar_confirmacion_impresion(){
	console.log("Activando confirmacion impresion");
	panelConfImpresion.hide();
	
	var name = "print.always_print_silent";
	require("preferences-service").set(name, false);
}
function desactivar_confirmacion_impresion(){
	console.log("Desactivando confirmacion impresion");
	panelConfImpresion.hide();

	var name = "print.always_print_silent";
	require("preferences-service").set(name, true);
}

function init(){
	/* Se crea widget control logins */  
	panelConfImpresion = require("panel").Panel({
	  width:400,
	  height:130,
	  contentURL: data.url("panel_impresion.html"),
	  contentScriptFile: [data.url('panel_impresion.js')]
	});
	
	widgets.Widget({
	  id: "cityrecargas-icon",
	  label: "Configuracion impresion",
	  contentURL: data.url("icono_widget.gif"),
	  panel: panelConfImpresion,
	});
	
	panelConfImpresion.port.on("activar_confirmacion_impresion", activar_confirmacion_impresion)
	panelConfImpresion.port.on("desactivar_confirmacion_impresion", desactivar_confirmacion_impresion)
}


init();
