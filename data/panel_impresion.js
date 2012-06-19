function activar_confirmacion_impresion(){
	self.port.emit("activar_confirmacion_impresion");
}
function desactivar_confirmacion_impresion(){
	self.port.emit("desactivar_confirmacion_impresion");
}

var link_activar = document.getElementById("activar");
link_activar.onclick = activar_confirmacion_impresion;

var link_desactivar = document.getElementById("desactivar");
link_desactivar.onclick = desactivar_confirmacion_impresion;
