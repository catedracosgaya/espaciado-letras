/* Info -------------------------------------------------------------------- */
var infoNombre = "Cátedra Cosgaya - Aplicación Letras";
var infoVersion = "4.2.0";
var infoFecha = "2018";




/* Texto TP ---------------------------------------------------------------- */
var texto = "<h1>Espaciado</h1> Los espacios entre letras funcionan prácticamente como los silencios en la música: sin ellos, no hay ritmo, belleza ni sentido. <b>Anónimo (2008)</b>";




/* Texto Simple y con Tags ------------------------------------------------- */
var textoSimple = texto.replace(/(<([^>]+)>)/ig,"");

function funcionTextoHTML(valor){
	if (valor == "titulo"){
		var textoHTML = texto.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
	} else {
		var textoHTML = texto.match(/<b[^>]*>([\s\S]*?)<\/b>/gi);
	}
	var textoHTMLArrayPaso1 = [];
	$.each(textoHTML, function (index,value) {
		textoHTMLArrayPaso1.push(value.toString().replace(/"/g, "").replace(/(<([^>]+)>)/ig,"").replace(/\s/g,"").toUpperCase());
	});
	var textoHTMLArrayPaso2 = textoHTMLArrayPaso1.join("");
	return textoHTMLArrayPaso2.split('').sort();
}




/* Array de Glifos --------------------------------------------------------- */
var glifosArrayLetras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var glifosArrayAcentuadas = ["Á","É","Í","Ó","Ú","Ç","Ã","Õ","Ñ"];
var glifosArrayNumeros = ["0","1","2","3","4","5","6","7","8","9"];
var glifosArrayPuntuacion = ["\\.",",",";","…","-","–","—","¿","\\?","¡","!","‘","’","“","”",":","\\(","\\)"];

var glifosArray = [];
glifosArray.push.apply(glifosArray, glifosArrayLetras);
glifosArray.push.apply(glifosArray, glifosArrayAcentuadas);
glifosArray.push.apply(glifosArray, glifosArrayNumeros);
glifosArray.push.apply(glifosArray, glifosArrayPuntuacion);

var glifosArrayKeyAP = [];
glifosArrayKeyAP.push.apply(glifosArrayKeyAP, glifosArrayAcentuadas);
glifosArrayKeyAP.push.apply(glifosArrayKeyAP, glifosArrayPuntuacion);





/* localStorage borrar anteriores ------------------------------------------ */
localStorage.removeItem('cc_ap_letras_v200');
localStorage.removeItem('cc_ap_letras_v210');
localStorage.removeItem('cc_ap_letras_v300');
localStorage.removeItem('cc_ap_letras_v321');
localStorage.removeItem('cc_ap_letras_v400');
localStorage.removeItem('cc_ap_letras_v401');


/* localStorage Nuevo Nombre ----------------------------------------------- */
var localStorage_Nombre = "cc_ap_letras_v420";



/* localStorage detector --------------------------------------------------- */
if (JSON.parse(localStorage.getItem(localStorage_Nombre)) === null || JSON.parse(localStorage.getItem(localStorage_Nombre)) === "" || JSON.parse(localStorage.getItem(localStorage_Nombre)) === "null" || JSON.parse(localStorage.getItem(localStorage_Nombre)) === undefined){
	/* No localStorage */
	var localStorageEstado = "no";
} else {
	var localStorageEstado = "si";
}



/* Redondeo Opciones ------------------------------------------------------- */
var redondeoOpciones = "si";



/* Movimiento Opciones ----------------------------------------------------- */
var movimientoOpciones = 1;




/* Detector de Internet Explorer ------------------------------------------- */
var Detector_IE = !!navigator.userAgent.match(/Trident/);
if (Detector_IE) {
	$("html").addClass("navegador_IE");
}

/* Detector de Sistema Operativo ------------------------------------------- */
if (navigator.appVersion.indexOf("Mac")!=-1){
	$("html").addClass("SO_Mac");
}

if (!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)){
	$("html").addClass("SO_iOS");
}






/* Atados de teclado ------------------------------------------------------- */
var ctrlKey = false;
var shiftKey = false;

var spaceKey = false;

var deleteKey = false;

var puntoKey = false;
var puntopKey = false;

var arrowUpKey = false;
var arrowRightKey = false;
var arrowDownKey = false;
var arrowLeftKey = false;

var aKey = false;
var bKey = false;
var cKey = false;
var dKey = false;
var eKey = false;
var fKey = false;
var gKey = false;
var hKey = false;
var iKey = false;
var jKey = false;
var kKey = false;
var lKey = false;
var mKey = false;
var nKey = false;
var oKey = false;
var pKey = false;
var qKey = false;
var rKey = false;
var sKey = false;
var tKey = false;
var uKey = false;
var vKey = false;
var wKey = false;
var xKey = false;
var yKey = false;
var zKey = false;

var n0Key = false;
var n1Key = false;
var n2Key = false;
var n3Key = false;
var n4Key = false;
var n5Key = false;
var n6Key = false;
var n7Key = false;
var n8Key = false;
var n9Key = false;

var n0pKey = false;
var n1pKey = false;
var n2pKey = false;
var n3pKey = false;
var n4pKey = false;
var n5pKey = false;
var n6pKey = false;
var n7pKey = false;
var n8pKey = false;
var n9pKey = false;

var masKey = false;
var menosKey = false;
var maspKey = false;
var menospKey = false;
var masMBPKey = false;
var menosMBPKey = false;


$(document).on('keydown keyup',function(e) {	
	if (e.which === 17) {
		ctrlKey = e.type=='keydown';
	}
	if (e.which === 16) {
		shiftKey = e.type=='keydown';
	}

	if (e.which === 32) {
		e.preventDefault();
		spaceKey = e.type=='keydown';
	}

	if (e.which === 190) {
		e.preventDefault();
		puntoKey = e.type=='keydown';
	}
	if (e.which === 110) {
		e.preventDefault();
		puntopKey = e.type=='keydown';
	}

	if (e.which === 46) {
		e.preventDefault();
		deleteKey = e.type=='keydown';
	}

	if (e.which === 38) {
		e.preventDefault();
		arrowUpKey = e.type=='keydown';
	}
	if (e.which === 39) {
		e.preventDefault();
		arrowRightKey = e.type=='keydown';
	}
	if (e.which === 40) {
		e.preventDefault();
		arrowDownKey = e.type=='keydown';
	}
	if (e.which === 37) {
		e.preventDefault();
		arrowLeftKey = e.type=='keydown';
	}

	if (e.which === 65) {
		aKey = e.type=='keydown';
	}
	if (e.which === 66) {
		bKey = e.type=='keydown';
	}
	if (e.which === 67) {
		cKey = e.type=='keydown';
	}
	if (e.which === 68) {
		dKey = e.type=='keydown';
	}
	if (e.which === 69) {
		eKey = e.type=='keydown';
	}
	if (e.which === 70) {
		fKey = e.type=='keydown';
	}
	if (e.which === 71) {
		gKey = e.type=='keydown';
	}
	if (e.which === 72) {
		hKey = e.type=='keydown';
	}
	if (e.which === 73) {
		iKey = e.type=='keydown';
	}
	if (e.which === 74) {
		jKey = e.type=='keydown';
	}
	if (e.which === 75) {
		kKey = e.type=='keydown';
	}
	if (e.which === 76) {
		lKey = e.type=='keydown';
	}
	if (e.which === 77) {
		mKey = e.type=='keydown';
	}
	if (e.which === 78) {
		nKey = e.type=='keydown';
	}
	if (e.which === 79) {
		oKey = e.type=='keydown';
	}
	if (e.which === 80) {
		pKey = e.type=='keydown';
	}
	if (e.which === 81) {
		qKey = e.type=='keydown';
	}
	if (e.which === 82) {
		rKey = e.type=='keydown';
	}
	if (e.which === 83) {
		sKey = e.type=='keydown';
	}
	if (e.which === 84) {
		tKey = e.type=='keydown';
	}
	if (e.which === 85) {
		uKey = e.type=='keydown';
	}
	if (e.which === 86) {
		vKey = e.type=='keydown';
	}
	if (e.which === 87) {
		wKey = e.type=='keydown';
	}
	if (e.which === 88) {
		xKey = e.type=='keydown';
	}
	if (e.which === 89) {
		yKey = e.type=='keydown';
	}
	if (e.which === 90) {
		zKey = e.type=='keydown';
	}

	if (e.which === 48) {
		n0Key = e.type=='keydown';
	}
	if (e.which === 49) {
		n1Key = e.type=='keydown';
	}
	if (e.which === 50) {
		n2Key = e.type=='keydown';
	}
	if (e.which === 51) {
		n3Key = e.type=='keydown';
	}
	if (e.which === 52) {
		n4Key = e.type=='keydown';
	}
	if (e.which === 53) {
		n5Key = e.type=='keydown';
	}
	if (e.which === 54) {
		n6Key = e.type=='keydown';
	}
	if (e.which === 55) {
		n7Key = e.type=='keydown';
	}
	if (e.which === 56) {
		n8Key = e.type=='keydown';
	}
	if (e.which === 57) {
		n9Key = e.type=='keydown';
	}

	if (e.which === 96) {
		n0pKey = e.type=='keydown';
	}
	if (e.which === 97) {
		n1pKey = e.type=='keydown';
	}
	if (e.which === 98) {
		n2pKey = e.type=='keydown';
	}
	if (e.which === 99) {
		n3pKey = e.type=='keydown';
	}
	if (e.which === 100) {
		n4pKey = e.type=='keydown';
	}
	if (e.which === 101) {
		n5pKey = e.type=='keydown';
	}
	if (e.which === 102) {
		n6pKey = e.type=='keydown';
	}
	if (e.which === 103) {
		n7pKey = e.type=='keydown';
	}
	if (e.which === 104) {
		n8pKey = e.type=='keydown';
	}
	if (e.which === 105) {
		n9pKey = e.type=='keydown';
	}

	if (e.which === 187) {
		masKey = e.type=='keydown';
	}
	if (e.which === 189) {
		menosKey = e.type=='keydown';
	}
	if (e.which === 107) {
		maspKey = e.type=='keydown';
	}
	if (e.which === 109) {
		menospKey = e.type=='keydown';
	}
	if (e.which === 59) {
		masMBPKey = e.type=='keydown';
	}
	if (e.which === 60) {
		menosMBPKey = e.type=='keydown';
	}
});






$(document).ready(function(){

	/* Ajuste Pantalla ----------------------------------------------------- */
	var coeficiente_normal = 1;
	var Pantalla_Ancho = window.innerWidth;
	var Pantalla_Alto = window.innerHeight;
	var CSS_hoja_Ancho = 1000;
	var CSS_hoja_Alto = 708;
	if ( (CSS_hoja_Ancho * Pantalla_Alto / CSS_hoja_Alto) > Pantalla_Ancho ){
		var JS_hoja_Ancho = Pantalla_Ancho;
		var JS_hoja_Alto = CSS_hoja_Alto * Pantalla_Ancho / CSS_hoja_Ancho;
	} else {
		var JS_hoja_Ancho = CSS_hoja_Ancho * Pantalla_Alto / CSS_hoja_Alto;
		var JS_hoja_Alto = Pantalla_Alto;
	}




	/* Signos Atributos unidad px ------------------------------------------ */
	function attr_quitar_px(valor){
		var extension = valor.indexOf("px");
		if (valor == "auto"){
			return valor;
		} else {
			return valor.substring(0, extension);
		}
	}
	function attr_agregar_px(valor){
		if (valor == "auto"){
			return valor;
		} else {
			return valor+"px";
		}
	}




	/* Redondeo Opciones --------------------------------------------------- */
	function redondeo (valor){
		if (redondeoOpciones == "si"){
			return Math.round(valor);
		} else {
			return valor;
		}
	}

	


	/* Posicion Redondeo --------------------------------------------------- */
	function posicionRedondeoBordes (objeto){
		var objetoPosicion = objeto.position();
		if (objetoPosicion.left < 1) {
			$( objeto ).css({
				"left": 0
			});
		}
		if (objetoPosicion.top < 1) {
			$( objeto ).css({
				"top": 0
			});
		}
	}




	/* Signos Posicion ----------------------------------------------------- */
	function signosPosicionAleatoria(objeto){
		$(objeto).each(function(){
			if ( $(this).hasClass("guion") === true ){
				$(this).css({
					"left":0,
					"top":0
				});
			} else {
				var minLeft = CSS_hoja_Ancho / 3;
				var maxLeft = CSS_hoja_Ancho;
				var minTop = CSS_hoja_Alto / 3;
				var maxTop = CSS_hoja_Alto;

				var leftNum = Math.floor( Math.random() * (maxLeft - minLeft) + minLeft - 60 );
				var topNum = Math.floor( Math.random() * (maxTop - minTop) + minTop - 80 );

				$(this).css({
					"left":leftNum,
					"top":topNum
				});
			}
		});
	}


	/* Rotulo Posicion ----------------------------------------------------- */
	function rotuloPosicion(){
		var rotuloAncho = $(".rotulo").width();
		var rotuloAlto = $(".rotulo").height();
		var rotuloMargen = 20;
		var hojaAlto = $("#hoja").height();

		$(".rotulo").css({
			"left": rotuloMargen,
			"top": hojaAlto - rotuloAlto - rotuloMargen
		});
	}






	/* Seleccion Crear ----------------------------------------------------- */
	function seleccionCrear(objetoArray){

		var objetoArray_length = objetoArray.length;

		for (var i = 0; i < objetoArray_length; i++) {
		
			var seleccionTop = parseFloat( $( ".seleccion" ).css("top") );
			var seleccionLeft = parseFloat( $( ".seleccion" ).css("left") );
			var objetoTop = parseFloat( $( "#"+objetoArray[i] ).css("top") );
			var objetoLeft = parseFloat( $( "#"+objetoArray[i] ).css("left") );

			if (seleccionTop < 0){
				var objetoSeleccionadoTop = Math.abs(seleccionTop) + objetoTop;
			} else {
				var objetoSeleccionadoTop = -Math.abs(seleccionTop) + objetoTop;
			}
			if (seleccionLeft < 0){
				var objetoSeleccionadoLeft = Math.abs(seleccionLeft) + objetoLeft;
			} else {
				var objetoSeleccionadoLeft = -Math.abs(seleccionLeft) + objetoLeft;
			}

			$( "#"+objetoArray[i] ).draggable( "disable" );
			$( "#"+objetoArray[i] ).addClass( "elemento" ).css({
				"top": objetoSeleccionadoTop,
				"left": objetoSeleccionadoLeft
			}).appendTo( ".seleccion .conjunto" );

			$( ".seleccion" ).draggable( "enable" );
			$( ".seleccion" ).addClass("seleccionado");
			detectorGuiasCercanas();
		}
	}


	/* Seleccion Borrar ---------------------------------------------------- */
	function seleccionBorrar(){

		$(".seleccion .elemento").each(function(){

			var objeto = "#"+$(this).attr("id");

			var objetoLeft = parseFloat( $(objeto).css("left") );
			var objetoTop = parseFloat( $(objeto).css("top") );
			var objetoAncho = parseFloat( $(objeto).css("width") );
			var objetoAlto = parseFloat( $(objeto).css("height") );
			var seleccionLeft = parseFloat( $(".seleccion").css("left") );
			var seleccionTop = parseFloat( $(".seleccion").css("top") );
			var hojaAncho = parseFloat( $("#hoja").css("width") );
			var hojaAlto = parseFloat( $("#hoja").css("height") );

			var objetoLibreLeft = objetoLeft + seleccionLeft;
			var objetoLibreTop = objetoTop + seleccionTop;
			var objetoLibreLeft_calculo = hojaAncho - objetoAncho;
			var objetoLibreTop_calculo = hojaAlto - objetoAlto;
			
			if (objetoLibreTop < 0){
				objetoLibreTop = 0;
			} else if (objetoLibreTop > objetoLibreTop_calculo){
				objetoLibreTop = hojaAlto - objetoAlto;
			}
			if (objetoLibreLeft < 0){
				objetoLibreLeft = 0;
			} else if (objetoLibreLeft > objetoLibreLeft_calculo){
				objetoLibreLeft = hojaAncho - objetoAncho;
			}

			$(objeto).css({
				"top": objetoLibreTop,
				"left": objetoLibreLeft
			});
			$(objeto).appendTo("#hoja").removeClass("elemento");

			$( objeto ).draggable( "enable" );
			$( ".seleccion" ).removeClass("seleccionado");
		});
		
		$( ".conjunto" ).hide();
		$( ".seleccion" ).css({top:"0", left: "0"}).hide();
	}






	/* Grupo Crear --------------------------------------------------------- */
	function grupoCrear(origen){

		if( $(".seleccion .conjunto .grupo").length > 0 ){

			alert("No se puede agrupar grupos");

		} else {

			if( $(".seleccion .conjunto .elemento").length ){

				if ( $(".grupo").length ) {
					var grupoIDArray = [];
					$(".grupo").each(function(){
						var grupoIDactual = $(this).attr("id");
						var grupoIDactualLargo = grupoIDactual.length;
						var grupoIDnombre = "grupo_";
						var grupoIDnumeroSolo = grupoIDactual.substring(grupoIDnombre.length, grupoIDactualLargo);
						grupoIDArray.push( parseInt( grupoIDnumeroSolo ) );
					});
					var grupoIDnumero = Math.max.apply( Math, grupoIDArray ) + 1;
				} else {
					var grupoIDnumero = 1;
				}
				var grupoIDfinal = "grupo_" + grupoIDnumero;


				$("#hoja").append('<div class="grupo" id="'+grupoIDfinal+'"><div class="subgrupo"></div></div>');			


				$(".seleccion .conjunto .elemento").each(function(){
					$(this).appendTo("#"+grupoIDfinal+" .subgrupo").removeClass("elemento").addClass("agrupado");
				});

				var seleccionLeft = $(".seleccion").css("left");
				var seleccionTop = $(".seleccion").css("top");
				var seleccionAncho = $(".seleccion").css("width");
				var seleccionAlto = $(".seleccion").css("height");

				$( ".seleccion" ).removeClass("seleccionado");
				$( ".conjunto" ).hide();
				$( ".seleccion" ).css({top:"0", left: "0"}).hide();
				seleccionBorrar();
				deseleccionador();
				guionBorradoDeseleccion();

				$("#"+grupoIDfinal).css({
					"left" : seleccionLeft,
					"top" : seleccionTop,
					"width" : seleccionAncho,
					"height" : seleccionAlto
				}).addClass("seleccionado").show();

				arrastreGrupo( grupoIDfinal );
				grupoClick( grupoIDfinal );
				tecladoMover("grupo",grupoIDfinal);

				if (!origen){
					localStorageCrear();
					estadisticas('Menu', 'Grupo crear'); /* Analytics */
				}
			}
		}
	}


	/* Grupo Borrar -------------------------------------------------------- */
	function grupoBorrar( grupoBorrarID ){

		if ( $(".grupo").length > 0 ) {

			var cadenaAgrupados = [];

			if (grupoBorrarID){
				var objetoID = "#"+grupoBorrarID+" .agrupado";
				$(objetoID).each(function(){
					var objeto = "#"+$(this).attr("id");
					var posiciones = posicionObjetos(objeto, "#"+grupoBorrarID);
					$( objeto ).css({
						"left": posiciones[0],
						"top": posiciones[1]
					});
					$( objeto ).appendTo("#hoja").removeClass("agrupado");
					$( objeto ).draggable( "enable" );
				});
				$("#"+grupoBorrarID).remove();

			} else {

				$(".seleccionado.grupo .agrupado").each(function(){

					var objeto = "#"+$(this).attr("id");
					var grupo = "#"+$(".seleccionado.grupo").attr("id");

					var posiciones = posicionObjetos(objeto, grupo);

					$( objeto ).css({
						"left": posiciones[0],
						"top": posiciones[1]
					});

					$( objeto ).appendTo("#hoja").removeClass("agrupado");
					$( objeto ).draggable( "enable" );

					cadenaAgrupados.push( $(this).attr("id") );
				});
				
				$(".seleccionado.grupo").remove();
				selectElements( cadenaAgrupados, "agregar" );

				localStorageCrear();
				estadisticas('Menu', 'Grupo borrar'); /* Analytics */
			}
		}
	}




	/* Posicion Objetos en Grupo o Seleccion ------------------------------- */
	function posicionObjetos(objeto, grupo){

		var objetoLeft = parseFloat( $(objeto).css("left") );
		var objetoTop = parseFloat( $(objeto).css("top") );
		var objetoAncho = parseFloat( $(objeto).css("width") );
		var objetoAlto = parseFloat( $(objeto).css("height") );
		var seleccionLeft = parseFloat( $(grupo).css("left") );
		var seleccionTop = parseFloat( $(grupo).css("top") );
		var hojaAncho = parseFloat( $("#hoja").css("width") );
		var hojaAlto = parseFloat( $("#hoja").css("height") );

		var objetoLibreLeft = objetoLeft + seleccionLeft;
		var objetoLibreTop = objetoTop + seleccionTop;
		var objetoLibreLeft_calculo = hojaAncho - objetoAncho;
		var objetoLibreTop_calculo = hojaAlto - objetoAlto;
		
		if (objetoLibreLeft < 0){
			objetoLibreLeft = 0;
		} else if (objetoLibreLeft > objetoLibreLeft_calculo){
			objetoLibreLeft = hojaAncho - objetoAncho;
		}
		if (objetoLibreTop < 0){
			objetoLibreTop = 0;
		} else if (objetoLibreTop > objetoLibreTop_calculo){
			objetoLibreTop = hojaAlto - objetoAlto;
		}

		return [objetoLibreLeft, objetoLibreTop];
	}








	/* Selector Funciones -------------------------------------------------- */
	$("body").mousedown(function (e) {

		if (!spaceKey){

			if ( $(e.target).attr("id") == "tablero" ){
				menuCerrar(); /* Menu */
				seleccionBorrar();
				deseleccionador();
				guionBorradoDeseleccion();
			}

			if ( $(e.target).attr("id") == "hoja" || $(e.target).prop("tagName") == "BODY" ){
				
				menuCerrar(); /* Menu */
				seleccionBorrar();
				deseleccionador();
				guionBorradoDeseleccion();

				$(".selector_marco").addClass("selector_activo");
				$(".selector_marco").css({
					'left': e.pageX,
					'top': e.pageY
				});

				initialW = e.pageX;
				initialH = e.pageY;

				$(document).bind("mouseup", selectElements);
				$(document).bind("mousemove", openSelector);
			}
			
		}

	});


	function selectElements(cadena, tipo) {
		if (!tipo){
			var cadena = [];
			$(".signo").each(function () {
				if ( $(this).hasClass("agrupado") === false ){
					cadena.push( $(this).attr("id") );
				}
			});
			$(".guion").each(function () {
				if ( $(this).hasClass("agrupado") === false ){
					cadena.push( $(this).attr("id") );
				}
			});
			$(".grupo").each(function () {
				cadena.push( $(this).attr("id") );
			});
			if ( $("#rotulo").hasClass("agrupado") === false ){
				cadena.push( "rotulo" );
			}

		} else if (tipo == "agregar"){
			if ( $(".seleccion .elemento").length > 0 ){
				$(".seleccion .elemento").each(function(){
					if ( cadena.indexOf( $(this).attr("id") ) == -1 ){
						cadena.push( $(this).attr("id") );
					}
				});

			} else {
				if ( $(".signo.seleccionado").length > 0 || $(".guion.seleccionado").length > 0  || $(".rotulo.seleccionado").length > 0 || $(".grupo.seleccionado").length > 0 ) {

					$(".signo").each(function () {
						if ( $(this).hasClass("seleccionado") ){
							cadena.push( $(this).attr("id") );
						}
					});
					$(".guion").each(function () {
						if ( $(this).hasClass("seleccionado") ){
							cadena.push( $(this).attr("id") );
						}
					});
					$(".grupo").each(function () {
						if ( $(this).hasClass("seleccionado") ){
							cadena.push( $(this).attr("id") );
						}
					});
					if ( $(".rotulo").hasClass("seleccionado") ){
						cadena.push( "rotulo" );
					}
				}

			}
			seleccionBorrar();
			deseleccionador();
			guionBorradoDeseleccion();
			
		} else if (tipo == "deseleccionar"){
			var cadenaActual = [];
			if ( $(".seleccion .elemento").length > 0 ){
				$(".seleccion .elemento").each(function(){
					cadenaActual.push( $(this).attr("id") );
				});
				seleccionBorrar();
				deseleccionador();
				guionBorradoDeseleccion();

				var cadenaString = cadena.join();
				var elementoQuitar = cadenaActual.indexOf(cadenaString);
				if(elementoQuitar != -1) {
					cadenaActual.splice( elementoQuitar, 1 );
					$("#"+elementoQuitar).appendTo("#hoja").removeClass("elemento");
				}
			}

			cadena = cadenaActual;

			if( cadena.length == 1 ){
				seleccionBorrar();
				deseleccionador();
				guionBorradoDeseleccion();
				return;
			}
		}

		$(document).unbind("mousemove", openSelector);
		$(document).unbind("mouseup", selectElements);
		var maxX = 0;
		var minX = 5000;
		var maxY = 0;
		var minY = 5000;
		var totalElements = 0;
		var elementArr = new Array();

		var cadenaSeleccion = [];

		var cadena_length = cadena.length;

		for (var i = 0; i < cadena_length; i++) {

			var objetoID = cadena[i];
			var objetoIDnombre = "#"+objetoID;

			var aElem = $(".selector_marco");
			var bElem = $( objetoIDnombre );

			if (tipo == "agregar" || tipo == "deseleccionar"){
				var result = true;
			} else {
				var result = doObjectsCollide(aElem, bElem);
			}

			if (result == true) {

				cadenaSeleccion.push( cadena[i] );

				var aElemPos = bElem.offset();
				var bElemPos = bElem.offset();
				var aW = bElem.width();
				var aH = bElem.height();
				var bW = bElem.width();
				var bH = bElem.height();
				var coords = checkMaxMinPos(aElemPos, bElemPos, aW, aH, bW, bH, maxX, minX, maxY, minY);
				maxX = coords.maxX;
				minX = coords.minX;
				maxY = coords.maxY;
				minY = coords.minY;
				var parent = bElem.parent();

				if (bElem.css("left") === "auto" && bElem.css("top") === "auto") {
					bElem.css({
						'left': parent.css('left'),
						'top': parent.css('top')
					});
				}

				$(".conjunto").css({
					'top': 0,
					'left': 0
				}).show();

				$(".seleccion").css({					
					'width': maxX - minX, /* 'width': Math.floor(maxX - minX), */
					'height': maxY - minY, /* 'height': Math.floor(maxY - minY), */
					'top': minY - $("#hoja").offset().top, /* 'top': Math.floor(minY) - $("#hoja").offset().top, */
					'left': minX - $("#hoja").offset().left /* 'left': Math.floor(minX) - $("#hoja").offset().left */
				}).show();
			}
		}

		arrastreSeleccion();
		seleccionCrear( cadenaSeleccion );

		$(".selector_marco").removeClass("selector_activo");
		$(".selector_marco").width(0).height(0);
	}


	function openSelector(e) {
		var w = Math.abs(initialW - e.pageX);
		var h = Math.abs(initialH - e.pageY);
		$(".selector_marco").css({
			'width': w,
			'height': h
		});
		if (e.pageX <= initialW && e.pageY >= initialH) {
			$(".selector_marco").css({
				'left': e.pageX
			});
		} else if (e.pageY <= initialH && e.pageX >= initialW) {
			$(".selector_marco").css({
				'top': e.pageY
			});
		} else if (e.pageY < initialH && e.pageX < initialW) {
			$(".selector_marco").css({
				'left': e.pageX,
				"top": e.pageY
			});
		}
	}

	function doObjectsCollide(a, b) {
		var aTop = a.offset().top;
		var aLeft = a.offset().left;
		var bTop = b.offset().top;
		var bLeft = b.offset().left;
		return !(
			((aTop + a.height()) < (bTop)) ||
			(aTop > (bTop + b.height())) ||
			((aLeft + a.width()) < bLeft) ||
			(aLeft > (bLeft + b.width()))
		);
	}  

	function checkMaxMinPos(a, b, aW, aH, bW, bH, maxX, minX, maxY, minY) {
		'use strict';
		if (a.left < b.left) {
			if (a.left < minX) {
				minX = a.left;
			}
		} else {
			if (b.left < minX) {
				minX = b.left;
			}
		}
		if (a.left + aW > b.left + bW) {
			if (a.left > maxX) {
				maxX = a.left + aW;
			}
		} else {
			if (b.left + bW > maxX) {
				maxX = b.left + bW;
			}
		}

		if (a.top < b.top) {
			if (a.top < minY) {
				minY = a.top;
			}
		} else {
			if (b.top < minY) {
				minY = b.top;
			}
		}
		if (a.top + aH > b.top + bH) {
			if (a.top > maxY) {
				maxY = a.top + aH;
			}
		} else {
			if (b.top + bH > maxY) {
				maxY = b.top + bH;
			}
		}
		return {
			'maxX': maxX,
			'minX': minX,
			'maxY': maxY,
			'minY': minY
		};
	}
	/* Selector Funciones -------------------------------------------------- */






	/* Detector alineacion bordes ------------------------------------------ */
	function detectorAlineacionBordes(objeto){

		var zoom = zoomActual();
		var min = 10 * zoom;
		var max = 50 * zoom;
		var randomNum = Math.round( Math.random() * (max - min + 1) ) + min;
		var ajuste = 10 * zoom;

		var obj_width = parseFloat( $(objeto).css("width") );
		var obj_height = parseFloat( $(objeto).css("height") );

		var obj_top = parseFloat( $(objeto).css("top") );
		var obj_left = parseFloat( $(objeto).css("left") );
		var obj_right = parseFloat( $(objeto).css("left") ) + parseFloat( $(objeto).css("width") ) + ajuste;
		var obj_bottom = parseFloat( $(objeto).css("top") ) + parseFloat( $(objeto).css("height") ) + ajuste;

		var hoja_width = parseFloat( $("#hoja").css("width") );
		var hoja_height = parseFloat( $("#hoja").css("height") );

		if (obj_top <= 0 && obj_left <= 0){
			$(objeto).animate({
				"top": randomNum,
				"left": randomNum
			}, "fast", function() {
				localStorageCrear();
			});
		}
		if (obj_top <= 0 && obj_right >= hoja_width){
			$(objeto).animate({
				"top": randomNum,
				"left": obj_left - randomNum
			}, "fast", function() {
				localStorageCrear();
			});
		}
		if (obj_bottom >= hoja_height && obj_right >= hoja_width){
			$(objeto).animate({
				"top": obj_top - randomNum,
				"left": obj_left - randomNum
			}, "fast", function() {
				localStorageCrear();
			});
		}
		if (obj_bottom >= hoja_height && obj_left <= 0){
			$(objeto).animate({
				"top": obj_top - randomNum,
				"left": randomNum
			}, "fast", function() {
				localStorageCrear();
			});
		}
		if (obj_top <= 0 && obj_left !== 0 && obj_bottom !== hoja_height && obj_right !== hoja_width){
			$(objeto).animate({
				"top": randomNum
			}, "fast", function() {
				localStorageCrear();
			});
		}
		if (obj_top !== 0 && obj_left <= 0 && obj_bottom !== hoja_height && obj_right !== hoja_width){
			$(objeto).animate({
				"left": randomNum
			}, "fast", function() {
				localStorageCrear();
			});
		}
		if (obj_top !== 0 && obj_left !== 0 && obj_bottom >= hoja_height && obj_right !== hoja_width){
			$(objeto).animate({
				"top": obj_top - randomNum
			}, "fast", function() {
				localStorageCrear();
			});
		}
		if (obj_top !== 0 && obj_left !== 0 && obj_bottom !== hoja_height && obj_right >= hoja_width){
			$(objeto).animate({
				"left": obj_left - randomNum
			}, "fast", function() {
				localStorageCrear();
			});
		}
	}




	/* Deseleccionador de Signos ------------------------------------------- */
	function deseleccionador(){
		$(".signo").each(function(){
			$(this).removeClass("seleccionado");
			$(this).removeClass("guia_cercana");
		});
		$(".guion").each(function(){
			$(this).removeClass("seleccionado");
			$(this).removeClass("guia_cercana");
		});
		$(".grupo").each(function(){
			$(this).removeClass("seleccionado");
			$(this).removeClass("guia_cercana");
		});
		$(".rotulo").removeClass("seleccionado");
		$(".rotulo").removeClass("guia_cercana");
	}




	/* Detector de guias cercanas ------------------------------------------- */
	function detectorGuiasCercanas(variable){

		var zoom = zoomActual();

		var signoSeleccionadoTop = parseFloat( $(".seleccionado").css("top") );
		var signoSeleccionadoLeft = parseFloat( $(".seleccionado").css("left") );

		if ( $(".seleccionado").hasClass("seleccion") ){
			var objeto = ".seleccionado .conjunto";
		} else if ( $(".seleccionado").hasClass("grupo") ){
			var objeto = ".seleccionado .subgrupo";
		} else {
			var objeto = ".seleccionado span";
		}

		var signoSeleccionadoAltura = $(objeto).height();
		var signoSeleccionadoAncho = $(objeto).width();

		var guiaHorPosDetecArray = [];
		var guiaVerPosDetecArray = [];

		$(".guia_horizontal").each(function(){
			guiaHorPosDetecArray.push( parseFloat( $(this).css("top") ) );
		});
		$(".guia_vertical").each(function(){
			guiaVerPosDetecArray.push( parseFloat( $(this).css("left") ) );
		});

		$(".seleccionado").removeClass("guia_cercana");

		var valorAlturaA = signoSeleccionadoAltura + ( 16 * zoom);
		var valorAlturaB = ( 20 * zoom);
		var valorAnchoA = signoSeleccionadoAncho + ( 12 * zoom);
		var valorAnchoB = ( 20 * zoom);

		$.each(guiaHorPosDetecArray, function(index,value) {
			if ( signoSeleccionadoTop > ( value-valorAlturaA ) && signoSeleccionadoTop < ( value+valorAlturaB ) ){
				$(".seleccionado").addClass("guia_cercana");
			}
		});

		$.each(guiaVerPosDetecArray, function(index,value) {
			if ( signoSeleccionadoLeft > ( value-valorAnchoA ) && signoSeleccionadoLeft < ( value+valorAnchoB ) ){
				$(".seleccionado").addClass("guia_cercana");
			}
		});
	}








	/* Arrastre ------------------------------------------------------------ */
	function arrastreSignos(){
		$( ".signo" ).draggable({
			containment: "#hoja",
			handle: ".objeto",
			scroll: false,
			drag: function (event, ui) {
				deseleccionador();
				seleccionBorrar();
				guionBorradoDeseleccion();
				$(this).addClass("seleccionado");
				detectorGuiasCercanas();
			},
			stop: function() {
				$(this).removeClass("seleccionado");
				posicionRedondeoBordes ($(this));
				detectorAlineacionBordes($(this));
				localStorageCrear();
			}
		});
	}

	function arrastreGuiones(objeto){
		$( "#"+objeto ).draggable({
			containment: "#hoja",
			handle: ".objeto",
			scroll: false,
			drag: function (event, ui) {
				deseleccionador();
				seleccionBorrar();
				guionBorradoDeseleccion();
				$(this).addClass("seleccionado");
				detectorGuiasCercanas();
			},
			stop: function() {
				$(this).removeClass("seleccionado");
				posicionRedondeoBordes ($(this));
				detectorAlineacionBordes($(this));
				localStorageCrear();
			}
		});
	}

	function arrastreRotulo(){
		$( ".rotulo" ).draggable({
			containment: "#hoja",
			handle: "span",
			scroll: false,
			drag: function (event, ui) {
				deseleccionador();
				seleccionBorrar();
				guionBorradoDeseleccion();
				$(this).addClass("seleccionado");
				detectorGuiasCercanas();
			},
			stop: function() {
				$(this).removeClass("seleccionado");
				posicionRedondeoBordes ($(this));
				detectorAlineacionBordes($(this));
				localStorageCrear();
				estadisticas('Arrastre', 'Rotulo'); /* Analytics */
			}
		});
	}

	function arrastreSeleccion(){
		$( ".seleccion" ).draggable({
			containment: "#hoja",
			handle: ".conjunto",
			drag: function (event, ui) {
				deseleccionador();
				detectorGuiasCercanas();
			},
			stop: function() {
				posicionRedondeoBordes ($(this));
				detectorAlineacionBordes($(this));
				localStorageCrear();
			}
		});
	}

	function arrastreGrupo(objeto){
		$( "#"+objeto ).draggable({
			containment: "#hoja",
			handle: ".agrupado",
			scroll: false,
			drag: function (event, ui) {
				deseleccionador();
				seleccionBorrar();
				guionBorradoDeseleccion();
				$(this).addClass("seleccionado");
				detectorGuiasCercanas();
			},
			stop: function() {
				$(this).removeClass("seleccionado");
				posicionRedondeoBordes ($(this));
				detectorAlineacionBordes($(this));
				localStorageCrear();
			}
		});
	}

	function arrastreTexto(){
		$( "#texto" ).draggable({
			containment: "body",
			scroll: false
		});
	}






	/* Signos Click -------------------------------------------------------- */
	function signoClick(){
		$(".signo").click(function (e) {
			if ( $(this).hasClass("agrupado") === false && $(this).hasClass("seleccionado") === false ){
				if (shiftKey && $(this).hasClass("elemento") === false ){
					selectElements( [$(this).attr("id")], "agregar" );

				} else if (shiftKey && $(this).hasClass("elemento") === true ) {
					selectElements( [$(this).attr("id")], "deseleccionar" );

				} else {
					if( $(this).hasClass("seleccionado") === false && $(this).hasClass("seleccion_borrar") === false && $(this).hasClass("elemento") === false ){
						deseleccionador();
						$(this).addClass("seleccionado");
						detectorGuiasCercanas();
						guionBorradoDeseleccion();
						seleccionBorrar();
					}
				}
			}
		});
	}


	/* Guion Click --------------------------------------------------------- */
	function guionClick(objeto){
		$( "#"+objeto ).click(function (e) {
			if ( $(this).hasClass("agrupado") === false && $(this).hasClass("seleccionado") === false ){
				if (shiftKey && $(this).hasClass("elemento") === false ){
					selectElements( [objeto], "agregar" );

				} else if (shiftKey && $(this).hasClass("elemento") === true ) {
					selectElements( [objeto], "deseleccionar" );

				} else {
					if( $(this).hasClass("seleccionado") === false && $(this).hasClass("seleccion_borrar") === false && $(this).hasClass("elemento") === false ){
						deseleccionador();
						$(this).addClass("seleccionado");
						detectorGuiasCercanas();
						guionBorradoDeseleccion();
						seleccionBorrar();
					}
					if ( e.target.nodeName == "B" ){
						guionBorrar($(this),'Mouse');
						// guionBorradoDeseleccion();
					}
				}
			}
		});
	}


	/* Rotulo Click -------------------------------------------------------- */
	function rotuloClick(){
		$(".rotulo").click(function (e) {
			if ( $(this).hasClass("agrupado") === false && $(this).hasClass("seleccionado") === false ){
				if (shiftKey && $(this).hasClass("elemento") === false ){
					selectElements( [$(this).attr("id")], "agregar" );

				} else if (shiftKey && $(this).hasClass("elemento") === true ) {
					selectElements( [$(this).attr("id")], "deseleccionar" );

				} else {

					if( $(this).hasClass("seleccionado") === false && $(this).hasClass("elemento") === false ){
						deseleccionador();
						$(this).addClass("seleccionado");
						detectorGuiasCercanas();
						seleccionBorrar();
					}
					guionBorradoDeseleccion();
				}
			}
		});
	}


	/* Grupo Click --------------------------------------------------------- */
	function grupoClick(objeto){
		$( "#"+objeto ).click(function (e) {
			if ( $(this).hasClass("agrupado") === false && $(this).hasClass("seleccionado") === false ){
				if (shiftKey && $(this).hasClass("elemento") === false ){
					selectElements( [objeto], "agregar" );

				} else if (shiftKey && $(this).hasClass("elemento") === true ) {
					selectElements( [objeto], "deseleccionar" );

				} else {

					if( $(this).hasClass("seleccionado") === false && $(this).hasClass("elemento") === false ){
						deseleccionador();
						$(this).addClass("seleccionado");
						detectorGuiasCercanas();
						guionBorradoDeseleccion();
						seleccionBorrar();
					}
				}
			}
		});
	}








	/* Mover Signos, Rotulo y Seleccion con las flechas del teclado -------- */
	function tecladoMover(tipo,objeto){

		if ( tipo != "guion" && tipo != "grupo" ){
			signoClick();
			rotuloClick();
		}


		$(document).keydown(function (e){

			var zoomFactor = zoomActual();
			// var movimiento = redondeo( movimientoOpciones * zoomFactor );
			var movimiento = redondeo( movimientoOpciones );

			if ( tipo == "guion"){

				if($("#"+objeto).hasClass("seleccionado") === true){
					if (deleteKey){
						guionBorrar( "#" + $(".guion.seleccionado").attr("id"), 'Teclado' );

						localStorageCrear();
					}
					if (arrowUpKey){
						$(".seleccionado").css({ "top": "-="+movimiento });
					} else if (arrowRightKey){
						$(".seleccionado").css({ "left": "+="+movimiento });
					} else if (arrowDownKey){
						$(".seleccionado").css({ "top": "+="+movimiento });
					} else if (arrowLeftKey){
						$(".seleccionado").css({ "left": "-="+movimiento });
					}
					detectorGuiasCercanas();
					detectorAlineacionBordes(".seleccionado");

					if (arrowUpKey || arrowRightKey || arrowDownKey || arrowLeftKey){
						localStorageCrear();
						estadisticas('Teclado', 'Flechas Mover Guion'); /* Analytics */
					}
				}

			} else if ( tipo == "grupo"){

				if($("#"+objeto).hasClass("seleccionado") === true){
					if (arrowUpKey){
						$(".seleccionado").css({ "top": "-="+movimiento });
					} else if (arrowRightKey){
						$(".seleccionado").css({ "left": "+="+movimiento });
					} else if (arrowDownKey){
						$(".seleccionado").css({ "top": "+="+movimiento });
					} else if (arrowLeftKey){
						$(".seleccionado").css({ "left": "-="+movimiento });
					}
					detectorGuiasCercanas();
					detectorAlineacionBordes(".seleccionado");

					if (arrowUpKey || arrowRightKey || arrowDownKey || arrowLeftKey){
						localStorageCrear();
						estadisticas('Teclado', 'Flechas Mover Grupo'); /* Analytics */
					}
				}

			} else {

				if ( tipo !== "reinicio"){

					if($(".signo").hasClass("seleccionado") === true){
						if (arrowUpKey){
							$(".seleccionado").css({ "top": "-="+movimiento });
						} else if (arrowRightKey){
							$(".seleccionado").css({ "left": "+="+movimiento });
						} else if (arrowDownKey){
							$(".seleccionado").css({ "top": "+="+movimiento });
						} else if (arrowLeftKey){
							$(".seleccionado").css({ "left": "-="+movimiento });
						}
						detectorGuiasCercanas();
						detectorAlineacionBordes(".seleccionado");

						if (arrowUpKey || arrowRightKey || arrowDownKey || arrowLeftKey){
							localStorageCrear();
							estadisticas('Teclado', 'Flechas Mover Signo'); /* Analytics */
						}
					}

					if($(".rotulo").hasClass("seleccionado") === true){
						if (arrowUpKey){
							$(".seleccionado").css({ "top": "-="+movimiento });
						} else if (arrowRightKey){
							$(".seleccionado").css({ "left": "+="+movimiento });
						} else if (arrowDownKey){
							$(".seleccionado").css({ "top": "+="+movimiento });
						} else if (arrowLeftKey){
							$(".seleccionado").css({ "left": "-="+movimiento });
						}
						detectorGuiasCercanas();
						detectorAlineacionBordes(".seleccionado");

						if (arrowUpKey || arrowRightKey || arrowDownKey || arrowLeftKey){
							localStorageCrear();
							estadisticas('Teclado', 'Flechas Mover Rotulo'); /* Analytics */
						}
					}

					if ( $(".seleccion .conjunto div").length > 0 ){
						if (arrowUpKey){
							$(".seleccion").css({ "top": "-="+movimiento });
						} else if (arrowRightKey){
							$(".seleccion").css({ "left": "+="+movimiento });
						} else if (arrowDownKey){
							$(".seleccion").css({ "top": "+="+movimiento });
						} else if (arrowLeftKey){
							$(".seleccion").css({ "left": "-="+movimiento });
						}
						detectorGuiasCercanas();
						detectorAlineacionBordes(".seleccionado");

						if (arrowUpKey || arrowRightKey || arrowDownKey || arrowLeftKey){
							localStorageCrear();
							estadisticas('Teclado', 'Flechas Mover Seleccion'); /* Analytics */
						}
					}


					/* Zoom Teclado Directo 100, 200 y 300% -------------------- */
					if(shiftKey && n1Key){
						zoom(1,'Teclado');
						localStorageCrear();
						estadisticas('Teclado', 'Zoom 100%'); /* Analytics */
					} else if(shiftKey && n2Key){
						zoom(2,'Teclado');
						localStorageCrear();
						estadisticas('Teclado', 'Zoom 200%'); /* Analytics */
					} else if(shiftKey && n3Key){
						zoom(3,'Teclado');
						localStorageCrear();
						estadisticas('Teclado', 'Zoom 300%'); /* Analytics */
					}


					/* Zoom Teclado Mas y Menos --------------------------------*/
					if( (maspKey) || (masKey) || (masMBPKey) ){
						zoomMas('Teclado');
					} else if( (menospKey) || (menosKey) || (menosMBPKey) ){
						zoomMenos('Teclado');
					}

				}

			}
		});
	}







	/* Signo Original oculto ----------------------------------------------- */
	$(".original").css({"top":"0","left":"0"}).hide();


	/* Suma y duplicacion de glifos ---------------------------------------- */
	var glifosTextoCompleto = [];
	function glifosContador(str,value){
		var regExp = new RegExp(value,"gi");
		glifosTextoCompleto.push((str.match(regExp) || []).length);
	}


	/* Reemplazo y Restitucion de Glifos que pueden traer conflicto - Sincronizar con PHP ------ */
	function glifosReemplazos(original){
		if (original == "Á"){
			return "atilde";
		} else if (original == "É"){
			return "etilde";
		} else if (original == "Í"){
			return "itilde";
		} else if (original == "Ó"){
			return "otilde";
		} else if (original == "Ú"){
			return "utilde";
		} else if (original == "Ç"){
			return "cedilla";
		} else if (original == "Ã"){
			return "avirgulilla";
		} else if (original == "Õ"){
			return "ovirgulilla";
		} else if (original == "Ñ"){
			return "nvirgulilla";
		} else if (original == "\."){
			return "punto";
		} else if (original == ","){
			return "coma";
		} else if (original == ";"){
			return "puntoycoma";
		} else if (original == "…"){
			return "puntossuspensivos";
		} else if (original == "–"){
			return "guionmediano";
		} else if (original == "—"){
			return "guionlargo";
		} else if (original == "¿"){
			return "inta";
		} else if (original == "\?"){
			return "intc";
		} else if (original == "¡"){
			return "exca";
		} else if (original == "!"){
			return "excc";
		} else if (original == "‘"){
			return "comillasimplea";
		} else if (original == "’"){
			return "comillasimplec";
		} else if (original == "“"){
			return "comilladoblea";
		} else if (original == "”"){
			return "comilladoblec";
		} else if (original == ":"){
			return "dospuntos";
		} else if (original == "\("){
			return "parentesisa";
		} else if (original == "\)"){
			return "parentesisc";
		} else {
			return original;
		}
	}

	function glifosRestitucion(original){
		if (original == "atilde"){
			return "Á";
		} else if (original == "etilde"){
			return "É";
		} else if (original == "itilde"){
			return "Í";
		} else if (original == "otilde"){
			return "Ó";
		} else if (original == "utilde"){
			return "Ú";
		} else if (original == "cedilla"){
			return "Ç";
		} else if (original == "avirgulilla"){
			return "Ã";
		} else if (original == "ovirgulilla"){
			return "Õ";
		} else if (original == "nvirgulilla"){
			return "Ñ";
		} else if (original == "punto"){
			return "\.";
		} else if (original == "coma"){
			return ",";
		} else if (original == "puntoycoma"){
			return ";";
		} else if (original == "puntossuspensivos"){
			return "…";
		} else if (original == "guionmediano"){
			return "–";
		} else if (original == "guionlargo"){
			return "—";
		} else if (original == "inta"){
			return "¿";
		} else if (original == "intc"){
			return "\?";
		} else if (original == "exca"){
			return "¡";
		} else if (original == "excc"){
			return "!";
		} else if (original == "comillasimplea"){
			return "‘";
		} else if (original == "comillasimplec"){
			return "’";
		} else if (original == "comilladoblea"){
			return "“";
		} else if (original == "comilladoblec"){
			return "”";
		} else if (original == "dospuntos"){
			return ":";
		} else if (original == "parentesisa"){
			return "\(";
		} else if (original == "parentesisc"){
			return "\)";
		} else {
			return original;
		}
	}




	/* Creador de Signos --------------------------------------------------- */
	function signosCreador(){
		$.each(glifosArray, function (index,value) {
			glifosContador(textoSimple,value);
		});

		/* LLamado Funcion Variables y Titulo Signos */
		var textoVariableArray = funcionTextoHTML("variable");
		var textoTituloArray = funcionTextoHTML("titulo");

		/* Signos Duplicacion */
		var glifosArray_length = glifosArray.length;

		for ( var i=0; i<glifosArray_length; i++ ){
			if (glifosTextoCompleto[i] !== 0){
				for ( var j=0; j<glifosTextoCompleto[i]; j++ ){

					/* Variables Signos */
					if (typeof textoVariableArray !== 'undefined' && textoVariableArray.length > 0) {
						var signoVariableVerificador = glifosArray[i];
						signoVariableVerificador = signoVariableVerificador.replace(/\\/g,"");
						var SignoVariableBuscar = textoVariableArray.indexOf(signoVariableVerificador);

						if (SignoVariableBuscar > -1) {
							textoVariableArray.splice(SignoVariableBuscar, 1);
							var SignoVariableData = "bold";
						} else {
							var SignoVariableData = "regular";
						}
					} else {
						var SignoVariableData = "regular";
					}

					/* Titulo Signos */
					if ( SignoVariableData !== "bold" ){
						if (typeof textoTituloArray !== 'undefined' && textoTituloArray.length > 0) {
							var signoTituloVerificador = glifosArray[i];
							signoTituloVerificador = signoTituloVerificador.replace(/\\/g,"");
							var SignoTituloBuscar = textoTituloArray.indexOf(signoTituloVerificador);

							if (SignoTituloBuscar > -1) {
								textoTituloArray.splice(SignoTituloBuscar, 1);
								var SignoTituloData = "titulo";
							} else {
								var SignoTituloData = "";
							}
						} else {
							var SignoTituloData = "";
						}
					} else {
						var SignoTituloData = "";
					}
					

					$(".original").clone().removeClass("original").addClass("signo").attr("data-letra",glifosReemplazos(glifosArray[i].replace(/\\/g,''))).attr("data-variable",SignoVariableData).attr("data-titulo",SignoTituloData).append('<span class="objeto">'+glifosArray[i].replace(/\\/g,'')+'</span>').appendTo("#hoja").show();
				}
			}
		}
		/* Signos ID */
		var count = 1;
		$(".signo").each(function(){
			if (!$(this).hasClass("original")){
				$(this).attr('id', 'sig_'+count);
				count++;
			}
		});
	}




	/* Creador de Guiones -------------------------------------------------- */
	function guionCrear(){

		seleccionBorrar();
		deseleccionador();
		guionBorradoDeseleccion();

		if( $(".guion").length ){
			var guionIDArray = [];
			$(".guion").each(function(){
				var guionIDactual = $(this).attr("id");
				var guionIDactualLargo = guionIDactual.length;
				var guionIDnombre = "guion_";
				var guionIDnumeroSolo = guionIDactual.substring(guionIDnombre.length, guionIDactualLargo);
				guionIDArray.push( parseInt( guionIDnumeroSolo ) );
			});
			var guionIDnumero = Math.max.apply( Math, guionIDArray ) + 1;
		} else {
			var guionIDnumero = 1;
		}

		var guionIDfinal = "guion_" + guionIDnumero;
		$(".original").clone().removeClass("original").addClass("guion").attr("data-letra","-").attr("data-variable","regular").attr("data-titulo","").attr("id",guionIDfinal).append('<span class="objeto">-</span>').appendTo("#hoja").show();
		
		var zoom = zoomActual();

		$("#"+guionIDfinal).css({
			"font-size": parseFloat( $( '.signo[data-titulo=""]' ).css("font-size") ) + "px",
			"left": 56 * zoom + "px",
			"line-height": parseFloat( $( '.signo[data-titulo=""]' ).css("font-size") ) + "px",
			"top": 86 * zoom + "px",
			"opacity": "0"
		});


		GuionAnimacion("#"+guionIDfinal);

		arrastreGuiones( guionIDfinal );
		guionClick( guionIDfinal );
		tecladoMover("guion",guionIDfinal);

		localStorageCrear();
		estadisticas('Menu', 'Guion crear'); /* Analytics */
	}

	function guionBorradoSeleccion(){
		deseleccionador();
		seleccionBorrar();
		$(".guion").each(function(){
			if ( $(this).hasClass("agrupado") === false ){
				$(this).addClass("seleccion_borrar").append( "<b></b>" );
			}
		});
	}

	function guionBorradoDeseleccion(){
		$(".guion").each(function(){
			$(this).removeClass("seleccion_borrar").find("b").remove();
		});
	}

	function guionBorrar(objeto,origen){
		$(objeto).remove();
		if (origen != 'Mouse'){
			guionBorradoDeseleccion();
		}

		localStorageCrear();
		estadisticas(origen, 'Guion borrar'); /* Analytics */
	}




	function GuionAnimacion(objeto){

		zoom(1);

		var GuionAnimacionArray = ["ovni", "camion", "bicicleta", "ovni"]; 
		var GuionEfecto = GuionAnimacionArray[Math.floor(Math.random() * GuionAnimacionArray.length)];

		$( "#guion_camion" ).remove();
		$( "#guion_bicicleta" ).remove();
		$( "#guion_ovni" ).remove();
		$( "#guion_ovni_rayo" ).remove();

		if (GuionEfecto == "camion"){
			$("#hoja").append('<div id="guion_camion" class="guion_animacion"><img src="img/animacion_camion.svg" alt="" width="38" height="30"></div>');
			$( "#guion_camion" ).css({"top":"80px", "left":"-40px"}).delay( 100 ).animate({ "left": "40px" }, "slow" ).delay( 800 ).animate({ "left": "-60px" }, "slow", function(){$(this).remove();});
			$(objeto).delay( 800 ).animate({ "opacity": "1" }, "slow");

		} else if (GuionEfecto == "bicicleta"){
			$("#hoja").append('<div id="guion_bicicleta" class="guion_animacion"><img src="img/animacion_bicicleta.svg" alt="" width="30" height="30"></div>');
			$( "#guion_bicicleta" ).animate({ "top":"76px" }, {
				step: function(now,fx) {
				  $(this).css('transform','rotate(90deg)');  
				},
				duration:'slow'
			},'linear').animate({ "left": "44px" }, {
				step: function(now,fx) {
				  $(this).css('transform','rotate(0deg)');
				},
				duration:'500'
			},'linear').delay( 600 ).animate({ "left": "800px", "opacity": "0" }, {
				step: function(now,fx) {
				  $(this).css('transform','rotate(-30deg)');  
				}, duration:'slow',
				complete: function(){$(this).remove();}
			});
			$(objeto).delay( 1200 ).animate({ "opacity": "1" }, "fast");

		} else if (GuionEfecto == "ovni"){
			$("#hoja").append('<div id="guion_ovni" class="guion_animacion"><img src="img/animacion_ovni.svg" alt="" width="52" height="14"></div>');
			$("#hoja").append('<div id="guion_ovni_rayo" class="guion_animacion"><img src="img/animacion_ovni_rayo.svg" alt="" width="52" height="44"></div>');
			$( "#guion_ovni" ).css({"top":"-20px", "left":"35px"}).delay( 100 ).animate({ "top": "48px" }, "slow" ).delay( 1000 ).animate({ "top": "-20px" }, "slow", function(){$(this).remove();});
			$( "#guion_ovni_rayo" ).css({"top":"64px", "left":"35px", "opacity":"0"}).delay( 700 ).animate({ "opacity": "1" }, "slow").delay( 100 ).animate({ "opacity": "0" }, "fast", function(){$(this).remove();});
			$(objeto).delay( 1000 ).animate({ "opacity": "1" }, "slow");
		}

	}






	/* Resaltador de letras ------------------------------------------------ */
	$(document).keydown(function (e){

		guionBorradoDeseleccion();

		var glifosArrayLetras_length = glifosArrayLetras.length;
		for ( var i=0; i<glifosArrayLetras_length; i++ ){
			var letra_seleccion = glifosArrayLetras[i].replace(/\\/g,'');
			if(!ctrlKey && !shiftKey){
				if (eval(letra_seleccion.toLowerCase()+"Key")){
					$(".signo").each(function(){
						if ($(this).attr("data-letra") == letra_seleccion){
							$(this).addClass("resaltador");
							estadisticas('Teclado', 'Resaltador: '+letra_seleccion); /* Analytics */
						}
					});
				}
			}
		}

		var glifosArrayNumeros_length = glifosArrayNumeros.length;
		for ( var i=0; i<glifosArrayNumeros_length; i++ ){
			var numero_seleccion = glifosArrayNumeros[i];
			if(!ctrlKey && !shiftKey){
				if (eval("n"+numero_seleccion+"Key") || eval("n"+numero_seleccion+"pKey")){
					$(".signo").each(function(){
						if ($(this).attr("data-letra") == numero_seleccion){
							$(this).addClass("resaltador");
							estadisticas('Teclado', 'Resaltador: '+numero_seleccion); /* Analytics */
						}
					});
				}
			}
		}
		if ( (puntoKey && !ctrlKey && !shiftKey) || (puntopKey && !ctrlKey && !shiftKey) ){
			var glifosArrayKeyAP_length = glifosArrayKeyAP.length;
			for ( var i=0; i<glifosArrayKeyAP_length; i++ ){
				var ap_seleccion = glifosReemplazos(glifosArrayKeyAP[i].replace(/\\/g,''));
				$(".signo").each(function(){
					if ($(this).attr("data-letra") == ap_seleccion){
						$(this).addClass("resaltador");
						estadisticas('Teclado', 'Resaltador: otros signos'); /* Analytics */
					}
				});
				$(".guion").each(function(){
					$(this).addClass("resaltador");
					estadisticas('Teclado', 'Resaltador: otros signos'); /* Analytics */
				});
			}
		}
	});
	$(document).keyup(function (e){
		$(".signo").each(function(){
			$(this).removeClass("resaltador");
		});
		$(".guion").each(function(){
			$(this).removeClass("resaltador");
		});
	});








	/* Guias --------------------------------------------------------------- */
	function guiasMensura (objeto) {
		if ( $("#hoja").attr("data-giro") == "horizontal" ){
			var hoja_ancho_cm = 42;
		} else if ( $("#hoja").attr("data-giro") == "vertical" ){
			var hoja_ancho_cm = 29.7;
		}
		if ( $(objeto).hasClass("guia_horizontal") ){
			var calculo = ( (parseFloat($( objeto ).css("top")) * hoja_ancho_cm) / parseFloat($("#hoja").css("width")) );
		} else if ( $(objeto).hasClass("guia_vertical") ){
			var calculo = ( (parseFloat($( objeto ).css("left")) * hoja_ancho_cm) / parseFloat($("#hoja").css("width")) );
		}
		return +(Math.round(calculo + "e+2") + "e-2");
	}


	function guiasDuplicadasBorrar(origen){
		guiasBloqueo("desbloqueadas");
		$(".guia_duplicada").remove();
		if (!origen){
			localStorageCrear();
		}
	}


	function guiasGirarHoja(){
		$(".guia_horizontal_duplicada").each(function(){
			if ( parseFloat($(this).css("top")) >= parseFloat($("#hoja").css("width")) ){
				$(this).remove();
			}
		});
		$(".guia_vertical_duplicada").each(function(){
			if ( parseFloat($(this).css("left")) >= parseFloat($("#hoja").css("height")) ){
				$(this).remove();
			}
		});
	}


	function guiasCalculoPosicion(dato,objeto){
		var hoja_posicion_offset = $( "#hoja" ).offset();
		var guia_posicion_offset = objeto.offset();
		if ( dato == "top" ){
			if ( hoja_posicion_offset.top == guia_posicion_offset.top ){
				return true;
			}
		} else if ( dato == "left" ){
			if ( hoja_posicion_offset.left == guia_posicion_offset.left ){
				return true;
			}
		}
	}


	function guia_horizontal_arrastre(){
		$( ".guia_horizontal_duplicada" ).draggable({
			containment: "#hoja",
			scroll: false,
			axis: "y",
			drag: function (event, ui) {
				deseleccionador();
				guionBorradoDeseleccion();
				$(this).find("span").show().text( guiasMensura($(this)) + " cm" );
				if (guiasCalculoPosicion("top",$(this))){
					$(this).addClass("guia_borrar");
				} else {
					$(this).removeClass("guia_borrar");
				}
			},
			stop: function (event, ui) {
				if (guiasCalculoPosicion("top",$(this))){
					$(this).remove();
					estadisticas('Mouse', 'Guia Borrar'); /* Analytics */
				}
				$(this).find("span").hide();

				localStorageCrear();
			}
		});
	}

	function guia_vertical_arrastre(){
		$( ".guia_vertical_duplicada" ).draggable({
			containment: "#hoja",
			scroll: false,
			axis: "x",
			drag: function (event, ui) {
				deseleccionador();
				guionBorradoDeseleccion();
				$(this).find("span").show().text( guiasMensura($(this)) + " cm" );
				if (guiasCalculoPosicion("left",$(this))){
					$(this).addClass("guia_borrar");
				} else {
					$(this).removeClass("guia_borrar");
				}
			},
			stop: function (event, ui) {
				if (guiasCalculoPosicion("left",$(this))){
					$(this).remove();
					estadisticas('Mouse', 'Guia Borrar'); /* Analytics */
				}
				$(this).find("span").hide();

				localStorageCrear();
			}
		});
	}

	$(".guia_horizontal_original").draggable({ 
		containment: "#tablero",
		scroll: false,
		axis: "y",
		helper: "clone",
		start: function (event, ui) {
			menuCerrar(); /* Menu */
			guiasVisibilidad("visibles");
			guiasBloqueo("desbloqueadas");
			deseleccionador();
			guionBorradoDeseleccion();
		},
		stop: function (event, ui) {
			var hoja_posicion_offset = $("#hoja").offset();
			var hoja_borde_abajo = $("#hoja").height();
			var guia_posicion_offset = $(ui.helper).offset();
			if (hoja_posicion_offset.top > 0){
				var calculoAjuste = guia_posicion_offset.top - Math.abs( hoja_posicion_offset.top );
			} else {
				var calculoAjuste = Math.abs( hoja_posicion_offset.top ) + guia_posicion_offset.top;
			}

			if ( guia_posicion_offset.top > hoja_posicion_offset.top && guia_posicion_offset.top < (hoja_borde_abajo + hoja_posicion_offset.top) ){
				$(ui.helper).clone().removeClass("guia_original guia_horizontal_original ui-draggable ui-draggable-handle").addClass("guia_duplicada guia_horizontal_duplicada guia_nueva").appendTo("#hoja");
				$(".guia_nueva").css({
					"top": calculoAjuste + "px"
				}).removeClass("guia_nueva");
				guia_horizontal_arrastre();

				localStorageCrear();
				estadisticas('Mouse', 'Guia horizontal duplicacion'); /* Analytics */
			}
		}
	});
	
	$(".guia_vertical_original").draggable({ 
		containment: "#tablero",
		scroll: false,
		axis: "x",
		helper: "clone",
		start: function (event, ui)  {
			menuCerrar(); /* Menu */
			guiasVisibilidad("visibles");
			guiasBloqueo("desbloqueadas");
			deseleccionador();
			guionBorradoDeseleccion();
		},
		stop: function (event, ui) {
			var hoja_posicion_offset = $("#hoja").offset();
			var hoja_borde_derecho = $("#hoja").width() + hoja_posicion_offset.left;
			var guia_posicion_offset = $(ui.helper).offset();
			var calculoAjuste = hoja_posicion_offset.left;

			if ( guia_posicion_offset.left > hoja_posicion_offset.left && guia_posicion_offset.left < hoja_borde_derecho ){
				$(ui.helper).clone().removeClass("guia_original guia_vertical_original ui-draggable ui-draggable-handle").addClass("guia_duplicada guia_vertical_duplicada guia_nueva").appendTo("#hoja");
				$(".guia_nueva").css({
					"left": parseFloat( $(".guia_nueva").css("left") ) - calculoAjuste + "px"
				}).removeClass("guia_nueva");
				guia_vertical_arrastre();

				localStorageCrear();
				estadisticas('Mouse', 'Guia vertical duplicacion'); /* Analytics */
			}
		}
	});




	/* Guias Visibilidad --------------------------------------------------- */
	function guiasVisibilidad (estado){
		if (estado == "visibles"){
			$("#hoja").attr("data-guias","visibles");
			$(".guia_duplicada").show();
			guiasVisibilidadTexto();
		} else if (estado == "ocultas"){
			$("#hoja").attr("data-guias","ocultas");
			$(".guia_duplicada").hide();
			guiasVisibilidadTexto();
		} else {
			if ( $("#hoja").attr("data-guias") == "visibles" ){
				$("#hoja").attr("data-guias","ocultas");
				$(".guia_duplicada").hide();
			} else if ( $("#hoja").attr("data-guias") == "ocultas" ){
				$("#hoja").attr("data-guias","visibles");
				$(".guia_duplicada").show();
			}
			localStorageCrear();
			estadisticas('Menu', 'Guias visibilidad'); /* Analytics */
		}
	}

	function guiasVisibilidadTexto (estado){
		if ( $("#hoja").attr("data-guias") == "visibles" ){
			$("#menu_guias_visibilidad span").text("Ocultar líneas guías"); /* Menu */
		} else if ( $("#hoja").attr("data-guias") == "ocultas" ){
			$("#menu_guias_visibilidad span").text("Mostrar líneas guías"); /* Menu */
		}
	}




	/* Guias Bloqueo ------------------------------------------------------- */
	function guiasBloqueo (estado){
		if (estado == "desbloqueadas"){
			$("#hoja").attr("data-guiasbloqueo","desbloqueadas");
			$(".guia_duplicada").removeClass("guia_bloqueada");
			$(".guia_duplicada").draggable( "enable" );
		} else if (estado == "bloqueadas"){
			$("#hoja").attr("data-guiasbloqueo","bloqueadas");
			$(".guia_duplicada").addClass("guia_bloqueada");
			$(".guia_duplicada").draggable( "disable" );
		} else {
			if ( $("#hoja").attr("data-guiasbloqueo") == "desbloqueadas" ){
				$("#hoja").attr("data-guiasbloqueo","bloqueadas");
				$(".guia_duplicada").addClass("guia_bloqueada");
				$(".guia_duplicada").draggable( "disable" );
			} else if ( $("#hoja").attr("data-guiasbloqueo") == "bloqueadas" ){
				$("#hoja").attr("data-guiasbloqueo","desbloqueadas");
				$(".guia_duplicada").removeClass("guia_bloqueada");
				$(".guia_duplicada").draggable( "enable" );
			}
			localStorageCrear();
			estadisticas('Menu', 'Guias '+$("#hoja").attr("data-guiasbloqueo") ); /* Analytics */
		}
	}








	/* Girar Hoja ---------------------------------------------------------- */
	function girarHoja () {

		zoom( 1 );
		guiasGirarHoja();
		seleccionBorrar();

		var HojaAncho = $("#hoja").width();
		var HojaAlto = $("#hoja").height();

		if (HojaAncho > HojaAlto){
			$("#hoja").attr("data-giro","vertical");
		} else {
			$("#hoja").attr("data-giro","horizontal");
		}

		$("#hoja").removeClass("hoja_no_efecto").toggleClass("hoja_girar_efecto").animate({
			"height": HojaAncho,
			"width": HojaAlto
			},50
		);

		localStorageCrear();
	}








	/* Scroll Mano Teclado ------------------------------------------------- */
	$(document).keydown(function (e){
		if (spaceKey){
			if( !$("#hoja_tapa_scroll").length ){
				$("#hoja").prepend( '<div id="hoja_tapa_scroll"></div>' );
			}
		}
	});
	$(document).keyup(function (e){
		if($("#hoja_tapa_scroll").length){
			$("#hoja_tapa_scroll").remove();
		}
	});

	function scrollManoTeclado () {
		var cursorDown = false;
		var hojaYPos = 0;
		var hojaXPos = 0;
		var cursorYPos = 0;
		var cursorXPos = 0;

		$("#hoja").mousemove(function (m){
			if (spaceKey){
				if(cursorDown === true){
					$("#tablero").scrollTop( hojaYPos + (cursorYPos - m.pageY) ); 
					$("#tablero").scrollLeft( hojaXPos + (cursorXPos - m.pageX) );
				}
			}
		});

		$("#hoja").mousedown(function (m){
			if (spaceKey){
				cursorDown = true;
				hojaYPos = $("#tablero").scrollTop();
				hojaXPos = $("#tablero").scrollLeft();
				cursorYPos = m.pageY;
				cursorXPos = m.pageX;
				estadisticas('Teclado', 'Scroll Mano'); /* Analytics */
			}
		});

		$(window).mouseup(function(){
			if (spaceKey){
				cursorDown = false;
			}
		});
	}
	scrollManoTeclado();








	/* Zoom actual --------------------------------------------------------- */
	function zoomActual () {
		var zoom = parseFloat( $( "#hoja" ).attr("data-zoom") / 100);
		return zoom;
	}


	/* Zoom todos los elementos de la Hoja ---------------------------------- */
	function zoom ( factorZoom, origenZoom ) {

		var zoom_Actual = parseFloat( $( "#hoja" ).attr("data-zoom") );
		var zoom_Nuevo = parseFloat( factorZoom * 100 );

		if ( zoom_Actual == zoom_Nuevo ){
			return;
		} else {
			var factor = zoom_Nuevo / zoom_Actual;
		}

		$( "#hoja" ).attr("data-zoom", zoom_Nuevo );

		$("#menu_zoom_cifra span").text(zoom_Nuevo+"%"); /* Menu */

		seleccionBorrar();
		deseleccionador();
		guionBorradoDeseleccion();

		var hojaAlto = parseFloat( $( "#hoja" ).css("height") );
		var hojaAncho = parseFloat( $( "#hoja" ).css("width") );

		var hojaTop = parseFloat( $("#hoja").offset().top );
		var hojaLeft = parseFloat( $("#hoja").offset().left );

		var tableroTop = parseFloat( $("#tablero").offset().top );
		var tableroLeft = parseFloat( $("#tablero").offset().left );

		var signoSize = parseFloat( $( '.signo[data-titulo=""]' ).css("font-size") );
		var tituloSize = parseFloat( $( '.signo[data-titulo="titulo"]' ).css("font-size") );
		var rotuloSize = parseFloat( $( ".rotulo" ).css("font-size") );

		$( "#hoja" ).addClass("hoja_no_efecto").css({
			"height": hojaAlto * factor + "px",
			"width": hojaAncho * factor + "px"
		});

		$('.signo[data-titulo=""]').each(function () {
			$( this ).css({
				"left": parseFloat( $( this ).css("left") ) * factor + "px",
				"font-size": signoSize * factor + "px",
				"line-height": signoSize * factor + "px",
				"top": parseFloat( $( this ).css("top") ) * factor + "px"
			});
		});

		$('.signo[data-titulo="titulo"]').each(function () {
			$( this ).css({
				"left": parseFloat( $( this ).css("left") ) * factor + "px",
				"font-size": tituloSize * factor + "px",
				"line-height": tituloSize * factor + "px",
				"top": parseFloat( $( this ).css("top") ) * factor + "px"
			});
		});

		$(".guion").each(function () {
			$( this ).css({
				"left": parseFloat( $( this ).css("left") ) * factor + "px",
				"font-size": signoSize * factor + "px",
				"line-height": signoSize * factor + "px",
				"top": parseFloat( $( this ).css("top") ) * factor + "px"
			});
		});
		
		$(".rotulo").css({
			"left": parseFloat( $( ".rotulo" ).css("left") ) * factor + "px",
			"font-size": rotuloSize * factor + "px",
			"line-height": rotuloSize * factor + "px",
			"top": parseFloat( $( ".rotulo" ).css("top") ) * factor + "px"
		});

		$(".grupo").each(function () {
			$( this ).css({
				"height": parseFloat( $( this ).css("height") ) * factor + "px",
				"left": parseFloat( $( this ).css("left") ) * factor + "px",
				"top": parseFloat( $( this ).css("top") ) * factor + "px",
				"width": parseFloat( $( this ).css("width") ) * factor + "px"
			});
		});

		$(".guia_horizontal_duplicada").each(function () {
			$( this ).css({
				"top": parseFloat( $( this ).css("top") ) * factor +"px"
			});
		});
		$(".guia_vertical_duplicada").each(function () {
			$( this ).css({
				"left": parseFloat( $( this ).css("left") ) * factor +"px"
			});
		});

		/* Ajustes CSS en HTML */
		$("style").remove();
		var estiloSeleccion = hojaAncho * 0.005;
		var estilosHTML = $("<style>").appendTo("head");

		var estiloSeleccionPos = ( estiloSeleccion * factor );
		var estiloSeleccionPadd = ( estiloSeleccion * factor ) - 1;
		var leftVal = "-"+ estiloSeleccionPos +"px !important";
		var paddingVal = estiloSeleccionPadd +"px !important";
		var topVal = "-"+ estiloSeleccionPos +"px !important";
		var cssSeleccion = "\.signo.seleccionado span:after, .guion.seleccionado span:after, .rotulo.seleccionado span:after, .guion.seleccion_borrar span:after, .seleccion .conjunto:after, .grupo .subgrupo:after {left: "+leftVal+"; padding: "+paddingVal+"; top: "+topVal+";}";
		
		var estiloTextShadow = hojaAncho * 0.001;
		if (zoom_Nuevo > 950){
			var factorTextShadow = 4;
		} else if (zoom_Nuevo > 200){
			var factorTextShadow = 2;
		} else {
			var factorTextShadow = 1;
		}
		var cssTextShadow = ".signo:hover span, .guion:hover span, .rotulo:hover, .seleccion .signo span, .seleccion .guion span, .seleccion .rotulo span, .seleccion:hover .elemento, .grupo:hover .agrupado{text-shadow: -"+factorTextShadow+"px 0 #99CC33, 0 "+factorTextShadow+"px #99CC33, "+factorTextShadow+"px 0 #99CC33, 0 -"+factorTextShadow+"px #99CC33 !important; } .signo.guia_cercana span, .guion.guia_cercana span, .rotulo.guia_cercana span, .seleccion.guia_cercana .conjunto .elemento span, .grupo.guia_cercana .subgrupo .agrupado span{text-shadow: -"+factorTextShadow+"px 0 rgba(74,255,255,1), 0 "+factorTextShadow+"px rgba(74,255,255,1), "+factorTextShadow+"px 0 rgba(74,255,255,1), 0 -"+factorTextShadow+"px rgba(74,255,255,1) !important; }";
		estilosHTML.html(cssSeleccion+cssTextShadow);




		if (origenZoom == "recarga"){
			var hojaPosTop_final = Math.abs( parseFloat( $("#hoja").attr("data-hojay") ) ) + tableroTop;
			var hojaPosleft_final = Math.abs( parseFloat( $("#hoja").attr("data-hojax") ) ) + tableroLeft;
		} else {
			
			/* Hoja y Tablero */
			var hojaTopMitad_vieja = parseFloat( hojaAlto / 2 ) - ( $("#tablero").height() / 2 );
			var hojaLeftMitad_vieja = parseFloat( hojaAncho / 2 ) - ( $("#tablero").width() / 2 );
			var hojaTopMitad_nueva = parseFloat( $("#hoja").height() / 2 ) - ( $("#tablero").height() / 2 );
			var hojaLeftMitad_nueva = parseFloat( $("#hoja").width() / 2 ) - ( $("#tablero").width() / 2 );

			/* Zoom y Scroll Centrado */
			if ( hojaAncho < parseFloat( $("#tablero").width() ) && hojaAncho > hojaAlto ){
				var hojaPosTop_final = hojaTopMitad_nueva;
				var hojaPosleft_final = hojaLeftMitad_nueva;
			} else {
				var hojaPosTop = ( Math.abs(hojaTop) - Math.abs(hojaTopMitad_vieja) + tableroTop ) * ( $("#hoja").height() / hojaAlto );
				var hojaPosLeft = ( Math.abs(hojaLeft) - Math.abs(hojaLeftMitad_vieja) + tableroLeft ) * ( $("#hoja").width() / hojaAncho );
				var hojaPosTop_final = hojaTopMitad_nueva + hojaPosTop;
				var hojaPosleft_final = hojaLeftMitad_nueva + hojaPosLeft;
			}
		}

		/* Aplicar Zoom */
		$( "#tablero" ).scrollTop( hojaPosTop_final );
		$( "#tablero" ).scrollLeft( hojaPosleft_final );


		/* Guardar Data */
		$("#hoja").attr("data-hojax",hojaPosleft_final);
		$("#hoja").attr("data-hojay",hojaPosTop_final);

	
		if (origenZoom == 'Menu' || origenZoom == 'Teclado'){
			localStorageCrear();
			estadisticas(origenZoom, 'Zoom '+zoom_Nuevo+'%'); /* Analytics */
		}

	}



	/* Scroll Guadado Automatico Posicion Zoom */
	function scrollGuadadoAutomatico(){
		$("#tablero").scroll(function (event) {
			localStorageCrear();
		});
	}
	scrollGuadadoAutomatico();
	


	function zoomMas(origen){
		var zoomData = parseFloat( $("#hoja").attr("data-zoom") );
		if (zoomData < 100){
			var zoomSalto = 25;
		} else {
			var zoomSalto = 100;
		}
		var teclado_zoom_actual = zoomData + zoomSalto;

		if (teclado_zoom_actual > 4800){
			return;
		} else {
			zoom( teclado_zoom_actual / 100 , origen);
			localStorageCrear();
		}
	}

	function zoomMenos(origen){
		var zoomData = parseFloat( $("#hoja").attr("data-zoom") );
		if (zoomData <= 100){
			var zoomSalto = 25;
		} else {
			var zoomSalto = 100;
		}
		var teclado_zoom_actual = zoomData - zoomSalto;

		if (teclado_zoom_actual < 75){
			return;
		} else {
			zoom( teclado_zoom_actual / 100 , origen);
			localStorageCrear();
		}
	}






	/* localStorage Posicion objetos en Grupo ------------------------------ */
	function localStoragePosicion(objetoID){

		if ( $(objetoID).hasClass("agrupado") ){

			var grupoID = "#"+$(objetoID).closest("div.grupo").attr("id");

			if ( $(grupoID).hasClass("elemento") ){
				var seleccionID = "#"+$(objetoID).closest("div.seleccion").attr("id");
				var posLeftSeleccion = parseFloat( $(seleccionID).css("left") );
				var posTopSeleccion = parseFloat( $(seleccionID).css("top") );
				var posiciones = posicionObjetos(objetoID, grupoID);
				var posLeft = parseFloat(posiciones[0]) + posLeftSeleccion;
				var posTop = parseFloat(posiciones[1]) + posTopSeleccion;
			} else {
				var posiciones = posicionObjetos(objetoID, grupoID);
				var posLeft = parseFloat(posiciones[0]);
				var posTop = parseFloat(posiciones[1]);
			}

		} else if ( $(objetoID).hasClass("elemento") ){
			var seleccionID = "#"+$(objetoID).closest("div.seleccion").attr("id");
			var posiciones = posicionObjetos(objetoID, seleccionID);
			var posLeft = parseFloat(posiciones[0]);
			var posTop = parseFloat(posiciones[1]);

		} else {
			var posLeft = parseFloat($(objetoID).css("left"));
			var posTop = parseFloat($(objetoID).css("top"));
		}
		return [posLeft, posTop];
	}




	/* localStorage Crear -------------------------------------------------- */
	function localStorageCrear(){

		var attrArray = [];

		var zoom_Actual = parseFloat( $( "#hoja" ).attr("data-zoom") );
		var zoom_100 = 100;
		if ( zoom_Actual == zoom_100 ){
			var factor = 1;
		} else {
			var factor = zoom_100 / zoom_Actual;
		}


		$("#hoja").attr("data-hojax",parseFloat( $("#hoja").offset().left ) );
		$("#hoja").attr("data-hojay",parseFloat( $("#hoja").offset().top ) );


		attrArray.push({ tipo: "info", nombre: infoNombre, version: infoVersion, fecha: infoFecha });
		
		attrArray.push({ tipo: "hoja", zoom: $("#hoja").attr("data-zoom"), giro: $("#hoja").attr("data-giro"), hojax: $("#hoja").attr("data-hojax"), hojay: $("#hoja").attr("data-hojay"), guias: $("#hoja").attr("data-guias"), guiasbloqueo: $("#hoja").attr("data-guiasbloqueo") });
		
		$(".signo").each(function () {
			var posiciones = localStoragePosicion( "#"+$(this).attr("id") );
			attrArray.push({ tipo: "signo", id: $(this).attr("id"), left: posiciones[0] * factor, top: posiciones[1] * factor, letra: $(this).attr("data-letra"), variable: $(this).attr("data-variable"), titulo: $(this).attr("data-titulo") });
		});

		$(".guion").each(function () {
			var posiciones = localStoragePosicion( "#"+$(this).attr("id") );
			attrArray.push({ tipo: "guion", id: $(this).attr("id"), left: posiciones[0] * factor, top: posiciones[1] * factor, letra: $(this).attr("data-letra"), variable: $(this).attr("data-variable"), titulo: $(this).attr("data-titulo") });
		});
		
		$(".rotulo").each(function () {
			var posiciones = localStoragePosicion( "#"+$(this).attr("id") );
			attrArray.push({ tipo: "rotulo", id: $(this).attr("id"), left: posiciones[0] * factor, top: posiciones[1] * factor, texto:$(this).text() });
		});

		$(".grupo").each(function () {
			var cadenaAgrupados = [];
			var grupoBuscar = "#"+$(this).attr("id")+" .agrupado";
			$(grupoBuscar).each(function(){
				cadenaAgrupados.push( $(this).attr("id") );
			});
			attrArray.push({ tipo: "grupo", id: $(this).attr("id"), left: parseFloat($(this).css("left")) * factor, top: parseFloat($(this).css("top")) * factor, agrupados: cadenaAgrupados });
		});

		$(".guia_duplicada").each(function () {
			if ( $(this).hasClass("guia_horizontal") ){
				var guiaDireccion = "horizontal";
			} else if ( $(this).hasClass("guia_vertical") ){
				var guiaDireccion = "vertical";
			}
			attrArray.push({ tipo: "guia", top: parseFloat($(this).css("top")) * factor, left: parseFloat($(this).css("left")) * factor, direccion: guiaDireccion });
		});

		localStorage.removeItem(localStorage_Nombre);
		localStorage.setItem(localStorage_Nombre, JSON.stringify(attrArray));
	}




	/* localStorage Crear -------------------------------------------------- */
	function localStorageCarga(){
		
		var localStorageAttrArray = JSON.parse(localStorage.getItem(localStorage_Nombre));

		var guionesArray = [];
		var gruposArray = [];

		var localStorageAttrArray_length = localStorageAttrArray.length;

		for (var i=0; i<localStorageAttrArray_length; i++){

			if ( localStorageAttrArray[i]["tipo"] == "hoja" ){
				$("#hoja").attr("data-giro", localStorageAttrArray[i]["giro"]).attr("data-hojax", localStorageAttrArray[i]["hojax"]).attr("data-hojay", localStorageAttrArray[i]["hojay"]).attr("data-guias", localStorageAttrArray[i]["guias"]).attr("data-guiasbloqueo", localStorageAttrArray[i]["guiasbloqueo"]);
				if (localStorageAttrArray[i]["giro"] == "vertical") {
					var HojaAncho = $("#hoja").width();
					var HojaAlto = $("#hoja").height();
					$("#hoja").addClass("hoja_no_efecto").css({
						"height": HojaAncho,
						"width": HojaAlto
					});
				}
				var guias_visibilidad_estado = (localStorageAttrArray[i]["guias"]);
				var guias_bloqueo_estado = (localStorageAttrArray[i]["guiasbloqueo"]);
			}

			if ( localStorageAttrArray[i]["tipo"] == "signo" || localStorageAttrArray[i]["tipo"] == "guion" ){
				$("#hoja").append( '<div class="'+localStorageAttrArray[i]["tipo"]+'" id="'+localStorageAttrArray[i]["id"]+'" style="top: '+localStorageAttrArray[i]["top"]+'px; left: '+localStorageAttrArray[i]["left"]+'px;" data-letra="'+localStorageAttrArray[i]["letra"]+'" data-variable="'+localStorageAttrArray[i]["variable"]+'" data-titulo="'+localStorageAttrArray[i]["titulo"]+'"><span class="objeto">'+glifosRestitucion( localStorageAttrArray[i]["letra"] )+'</span></div>' );
			}

			if ( localStorageAttrArray[i]["tipo"] == "rotulo" ){
				$(".rotulo").css({
					"left":localStorageAttrArray[i]["left"]+"px",
					"top":localStorageAttrArray[i]["top"]+"px"
				});
			}

			if ( localStorageAttrArray[i]["tipo"] == "guia" ){
				$("#hoja").append( '<div class="guia guia_'+localStorageAttrArray[i]["direccion"]+' guia_duplicada guia_'+localStorageAttrArray[i]["direccion"]+'_duplicada" style="top: '+localStorageAttrArray[i]["top"]+'px; left: '+localStorageAttrArray[i]["left"]+'px;"><span></span></div>' );
			}

			if ( localStorageAttrArray[i]["tipo"] == "guion" ){
				guionesArray.push( localStorageAttrArray[i]["id"] );
			}
			if ( localStorageAttrArray[i]["tipo"] == "grupo" ){
				gruposArray.push( localStorageAttrArray[i]["agrupados"] );
			}
		}


		zoom( parseFloat(localStorageAttrArray[1]["zoom"]) / 100, "recarga" );

		/* Activacion objetos */
		arrastreSignos();
		arrastreRotulo();
		arrastreTexto();
		
		guia_horizontal_arrastre();
		guia_vertical_arrastre();
		guiasVisibilidad(guias_visibilidad_estado);
		guiasBloqueo(guias_bloqueo_estado);

		var guionesArray_length = guionesArray.length;

		for (var i=0; i<guionesArray_length; i++){
			arrastreGuiones( guionesArray[i] );
			guionClick( guionesArray[i] );
			tecladoMover("guion",guionesArray[i]);
		}

		var gruposArray_length = gruposArray.length;

		for (var i=0; i<gruposArray_length; i++){
			selectElements( gruposArray[i], "agregar" );
			grupoCrear("recarga");
			deseleccionador();
		}

		/* Mover Signos con el Teclado */
		tecladoMover();
	}






	/* Iniciar funciones construccion  ------------------------------------- */
	function inicio(origen){
		/* Crea Signos */
		signosCreador();

		/* Posicionar signos aleatoriamente */
		signosPosicionAleatoria(".signo");

		/* Posicionar rotulo */
		rotuloPosicion();

		/* Arrastre */
		arrastreSignos();
		arrastreRotulo();
		arrastreTexto();

		/* Mover Signos con el Teclado */
		tecladoMover(origen);
	}


	/* Reiniciar todos los elementos  -------------------------------------- */
	function reiniciar(){
		seleccionBorrar();
		deseleccionador();
		guionBorradoDeseleccion();
		
		localStorage.removeItem(localStorage_Nombre);

		$("#hoja").removeClass("hoja_girar_efecto");

		if ( $("#hoja").attr("data-giro") == "vertical" ){
			var HojaAncho = $("#hoja").width();
			var HojaAlto = $("#hoja").height();
			$("#hoja").addClass("hoja_no_efecto").css({
				"height": HojaAncho,
				"width": HojaAlto
			}).attr("data-giro","horizontal");
		}

		guiasVisibilidad("visibles");
		guiasBloqueo("desbloqueadas");
		guiasDuplicadasBorrar("reiniciar");


		$(".signo").each(function(){
			if ($(this).hasClass("original") == false){
				$(this).remove();
			}
		});
		$(".guion").each(function(){
			$(this).remove();
		});
		$(".grupo").each(function(){
			grupoBorrar( $(this).attr("id") );
		});

		zoom( 1 , "reinicio" );

		inicio("reinicio");
	}






	/* --------------------------------------------------------------------- */
	/* Inicio construccion ------------------------------------------------- */
	if (localStorageEstado == "si"){
		/* Carga datos del localStorage */
		localStorageCarga();

		estadisticas('Navegador', 'Recarga'); /* Analytics */

	} else {
		/* Inicio de todos los elementos */
		inicio();

		estadisticas('Navegador', 'Inicio'); /* Analytics */
	}
	/* --------------------------------------------------------------------- */
	/* --------------------------------------------------------------------- */








	/* PDF Generar Formulario de envio de Array ---------------------------- */
	function pdfGenerar (){

		seleccionBorrar();
		deseleccionador();
		guionBorradoDeseleccion();

		var pdfArray = [];

		var zoom_Actual = parseFloat( $( "#hoja" ).attr("data-zoom") );
		var zoom_100 = 100;
		if ( zoom_Actual == zoom_100 ){
			var factor = 1;
		} else {
			var factor = zoom_100 / zoom_Actual;
		}
	
		pdfArray.push({ tipo: "hoja", giro: $("#hoja").attr("data-giro") });
		
		$(".signo").each(function () {
			var posiciones = localStoragePosicion( "#"+$(this).attr("id") );
			pdfArray.push({ tipo: "signo", id: $(this).attr("id"), left: posiciones[0] * factor, top: posiciones[1] * factor, letra: $(this).attr("data-letra"), variable: $(this).attr("data-variable"), titulo: $(this).attr("data-titulo") });
		});

		$(".guion").each(function () {
			var posiciones = localStoragePosicion( "#"+$(this).attr("id") );
			pdfArray.push({ tipo: "guion", id: $(this).attr("id"), left: posiciones[0] * factor, top: posiciones[1] * factor, letra: $(this).attr("data-letra"), variable: $(this).attr("data-variable"), titulo: $(this).attr("data-titulo") });
		});
		
		$(".rotulo").each(function () {
			var posiciones = localStoragePosicion( "#"+$(this).attr("id") );
			pdfArray.push({ tipo: "rotulo", id: $(this).attr("id"), left: posiciones[0] * factor, top: posiciones[1] * factor, texto:$(this).text() });
		});


		/* Formulario */
		$("#informacion").val( JSON.stringify( pdfArray ) );
		$("#formulario").submit();

		estadisticas('Menu', 'Generar PDF - Zoom '+zoom_Actual+'% - Giro '+$("#hoja").attr("data-giro") ); /* Analytics */
	}




























	/* Menu ---------------------------------------------------------------- */
	function menuCerrar(objeto){
		$("#menu .submenu").each(function(){
			if ( $(this).attr("id") != objeto ){
				$(this).removeClass("submenu_abierto");
			}
		});
	}

	$("#menu .submenu .subtitulo").click(function(event) {
		menuCerrar($(this).parent().attr("id"));
		$(this).parent().toggleClass("submenu_abierto");
	});

	$(".signo, .guion, .rotulo, .guia, .seleccion, .grupo, #menu_trabajopractico, #menu_atajos, #menu_creditos, #menu_pagina_girar, #menu_guias_visibilidad, #menu_guias_bloqueo, #menu_guias_borrar, #menu_grupos_agrupar, #menu_grupos_desagrupar, #menu_guiones_agregar, #menu_guiones_borrar, #menu_reiniciar_accion").click(function(event) {
		menuCerrar();
	});






	/* Menu Información ---------------------------------------------------- */
	$("#menu_trabajopractico").colorbox({
		href:"#ventana_trabajopractico",
		inline:true,
		height:"460px",
		width:"560px",
		initialHeight:"460px",
		initialWidth:"560px",
		transition:"fade"
	});

	$("#menu_atajos").colorbox({
		href:"#ventana_atajos",
		inline:true,
		height:"460px",
		width:"560px",
		initialHeight:"460px",
		initialWidth:"560px",
		transition:"fade"
	});

	$("#menu_creditos").colorbox({
		href:"#ventana_creditos",
		inline:true,
		height:"460px",
		width:"560px",
		initialHeight:"460px",
		initialWidth:"560px",
		transition:"fade"
	});




	/* Menu Pagina Girar --------------------------------------------------- */
	$("#menu_pagina_girar").colorbox({
		href:"#ventana_pagina_girar",
		inline:true,
		height:"300px",
		width:"360px",
		initialHeight:"300px",
		initialWidth:"360px",
		transition:"fade"
	});
	$("#girar_aceptar").click(function(event){
		event.preventDefault();
		girarHoja();
	});
	$("#girar_aceptar, #girar_cancelar").click(function(event){
		event.preventDefault();
		$.colorbox.close();
	});




	/* Menu Texto ---------------------------------------------------------- */
	$("#menu_texto span").click(function(event) {
		menuCerrar();
		$("#texto").toggle();
	});
	$("#texto .cerrar").click(function(event) {
		event.preventDefault();
		$("#texto").toggle();
	});




	/* Menu Guias ---------------------------------------------------------- */
	/* icono Guias Visibilidad */
	$( "#regla_guias_visibilidad" ).mouseover(function(event) {
		if ( $("#hoja").attr("data-guias") == "visibles" ){
			$(this).addClass("guias_icono_visible");
			$(this).removeClass("guias_icono_invisible");
		} else if ( $("#hoja").attr("data-guias") == "ocultas" ){
			$(this).addClass("guias_icono_invisible");
			$(this).removeClass("guias_icono_visible");
		}
	});
	$( "#regla_guias_visibilidad" ).mouseout(function(event) {
		$(this).removeClass("guias_icono_visible");
		$(this).removeClass("guias_icono_invisible");
	});
	$( "#regla_guias_visibilidad" ).click(function(event) {
		if ( $("#hoja").attr("data-guias") == "visibles" ){
			$(this).addClass("guias_icono_invisible");
			$(this).removeClass("guias_icono_visible");
		} else if ( $("#hoja").attr("data-guias") == "ocultas" ){
			$(this).addClass("guias_icono_visible");
			$(this).removeClass("guias_icono_invisible");
		}
	});


	$( "#regla_guias_visibilidad, #menu_guias_visibilidad" ).click(function(event) {
		guiasVisibilidad();
		guiasVisibilidadTexto();
	});
	$("#menu_guias_borrar").colorbox({
		href:"#ventana_guias_borrar",
		inline:true,
		height:"300px",
		width:"360px",
		initialHeight:"300px",
		initialWidth:"360px",
		transition:"fade"
	});
	$("#guias_borrar_aceptar").click(function(event){
		event.preventDefault();
		guiasDuplicadasBorrar();
	});
	$("#guias_borrar_aceptar, #guias_borrar_cancelar").click(function(event){
		event.preventDefault();
		$.colorbox.close();
	});

	$( "#menu_guias" ).click(function(event) {
		if ( $("#hoja").attr("data-guiasbloqueo") == "desbloqueadas" ){
			$("#menu_guias_bloqueo span").text("Bloquear líneas guías");
		} else if ( $("#hoja").attr("data-guiasbloqueo") == "bloqueadas" ){
			$("#menu_guias_bloqueo span").text("Desbloquear líneas guías");
		}
	});
	$( "#menu_guias_bloqueo" ).click(function(event) {
		guiasBloqueo();
	});




	/* Menu Grupos --------------------------------------------------------- */
	$( "#menu_grupos .subtitulo span" ).click(function(event) {
		if( $(".seleccion .conjunto .elemento").length > 0 && $(".seleccion .conjunto .grupo").length == 0 ){
			$( "#menu_grupos_agrupar" ).removeClass("desactivado");
		} else {
			$( "#menu_grupos_agrupar" ).addClass("desactivado");
		}

		if( $(".grupo.seleccionado").length == 1 ){
			$( "#menu_grupos_desagrupar" ).removeClass("desactivado");
		} else if ( $(".seleccion .conjunto .elemento").length == 1 && $(".grupo.elemento").length == 1 ){
			$(".grupo.elemento").addClass("seleccionado");
			seleccionBorrar();
			$( "#menu_grupos_desagrupar" ).removeClass("desactivado");

		} else {
			$( "#menu_grupos_desagrupar" ).addClass("desactivado");
		}
	});
	$( "#menu_grupos_agrupar" ).click(function(event) {
		if ( $(this).hasClass("desactivado") == false ){
			grupoCrear();
		}
	});
	$( "#menu_grupos_desagrupar" ).click(function(event) {
		if ( $(this).hasClass("desactivado") == false ){
			grupoBorrar();
		}
	});




	/* Menu Guiones -------------------------------------------------------- */
	$("#menu_guiones").click(function(event){

		if ( $( ".guion_animacion" ).length ) {
			$( "#menu_guiones_agregar" ).addClass("desactivado");
		} else {
			$( "#menu_guiones_agregar" ).removeClass("desactivado");
		}
		
		var guionLibre = "no";
		$(".guion").each(function(){
			if ( $(this).hasClass("agrupado") === false ){
				guionLibre = "si";
			}
		});
		if (guionLibre == "no"){
			$( "#menu_guiones_borrar" ).addClass("desactivado");
		} else if (guionLibre == "si"){
			$( "#menu_guiones_borrar" ).removeClass("desactivado");
		}
	});


	$("#menu_guiones_agregar").click(function(event){
		if ( $(this).hasClass("desactivado") == false ){
			guionCrear();
		}
	});

	$("#menu_guiones_borrar").click(function(event){
		if ( $(this).hasClass("desactivado") == false ){
			guionBorradoSeleccion();
		}
	});




	/* Menu Reiniciar ------------------------------------------------------ */
	$("#menu_reiniciar_accion").colorbox({
		href:"#ventana_reiniciar",
		inline:true,
		height:"300px",
		width:"360px",
		initialHeight:"300px",
		initialWidth:"360px",
		transition:"fade"
	});
	$("#reiniciar_aceptar, #reiniciar_cancelar").click(function(event){
		event.preventDefault();
		$.colorbox.close();
	});
	$("#reiniciar_aceptar").click(function(event){
		event.preventDefault();
		reiniciar();
	});




	/* Menu Generar PDF ---------------------------------------------------- */
	$("#menu_generarpdf").click(function(event){
		event.preventDefault();
		pdfGenerar();
	});




	/* Menu Zoom ----------------------------------------------------------- */
	$("#menu_zoom_menos").click(function(event){
		zoomMenos('Menu');
	});
	$("#menu_zoom_mas").click(function(event){
		zoomMas('Menu');
	});




	/* Menu Tooltip -------------------------------------------------------- */
	$('.no-touch #menu span').tooltip();




	/* Menu Responsive ----------------------------------------------------- */
	$("#menu_icono").click(function(event){
		$("#menu_caja").toggle();
	});

	$(window).bind('load resize', function(){
		var breakpoint = window.innerWidth;
		if (breakpoint > 768){
			$("#menu_caja").removeAttr("style");
		} else {
			$("#menu ul li").removeClass("submenu_abierto");
		}
	});






	/* Estadisticas Eventos Google Analytics ------------------------------- */
	function estadisticas(accion,etiqueta){
		// console.log( "Accion: "+accion+" / Etiqueta: "+etiqueta );
	}

	$('#menu_trabajopractico').on('click', function() {
		estadisticas('Menu', 'Trabajo practico');
	});

	$('#menu_atajos').on('click', function() {
		estadisticas('Menu', 'Atajos');
	});

	$('#menu_creditos').on('click', function() {
		estadisticas('Menu', 'Creditos');
	});

	$('#menu_pagina_girar').on('click', function() {
		estadisticas('Menu', 'Pagina girar ventana');
	});

	$('#girar_aceptar').on('click', function() {
		estadisticas('Menu', 'Pagina girar - '+$("#hoja").attr("data-giro"));
	});

	$('#menu_texto').on('click', function() {
		estadisticas('Menu', 'Texto');
	});

	$('#guias_borrar_aceptar').on('click', function() {
		estadisticas('Menu', 'Guias borrar');
	});

	$('#menu_reiniciar_accion').on('click', function() {
		estadisticas('Menu', 'Reiniciar ventana');
	});

	$('#reiniciar_aceptar').on('click', function() {
		estadisticas('Menu', 'Reiniciar');
	});


});