<?php
$version_actual = "2.2.0";
$version_fecha = "(02/05/2015)";
?>
<!doctype html>
<html class="no-js" lang="es">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Cátedra Cosgaya - Aplicación - Sensibilización a la forma y al color tipográficos</title>
<meta name="description" content="Trabajo práctico de sensibilización a la forma y al color tipográficos.">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="iconos/favicon.ico">
<link rel="shortcut icon" sizes="196x196" href="iconos/favicon-196x196.png">
<link rel="apple-touch-icon" href="iconos/apple-touch-icon.png">
<link rel="apple-touch-icon-precomposed" href="iconos/apple-touch-icon-precomposed.png">
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/colorbox.css">
<link rel="stylesheet" href="css/bootstrap.tooltip.css">
<link rel="stylesheet" href="css/estilos.css">
<script src="js/vendor/modernizr.min.js"></script>
</head>

<body>

<div id="menu">
	<nav>
		<div id="menu_logo"><a href="http://www.catedracosgaya.com.ar/" target="_blank"><img src="img/icono_catedra_cosgaya.svg" alt="" width="30" height="30"></a></div>
		<ul>			
			<li id="menu_informacion" class="submenu">
				<div class="subtitulo"><span>Información</span></div>
				<ul>
					<li id="menu_trabajopractico"><span>Trabajo práctico</span></li>
					<li id="menu_atajos"><span>Atajos de teclado</span></li>
					<li id="menu_creditos"><span>Créditos</span></li>
				</ul>
			</li>

			<li id="menu_pagina_girar"><span>Rotar página 90º</span></li>

			<li id="menu_texto"><span>Texto</span></li>

			<li id="menu_guias" class="submenu">
				<div class="subtitulo"><span>Guías</span></div>
				<ul>
					<li id="menu_guias_visibilidad"><span>Ocultar líneas guías</span></li>
					<li id="menu_guias_bloqueo"><span>Bloquear líneas guías</span></li>
					<li id="menu_guias_borrar"><span>Borrar todas las líneas guías</span></li>
				</ul>
			</li>

			<li id="menu_grupos" class="submenu">
				<div class="subtitulo"><span>Grupos</span></div>
				<ul>
					<li id="menu_grupos_agrupar" class="desactivado"><span>Agrupar elementos seleccionados</span></li>
					<li id="menu_grupos_desagrupar" class="desactivado"><span>Desagrupar elementos</span></li>
				</ul>
			</li>

			<li id="menu_guiones" class="submenu">
				<div class="subtitulo"><span>Guiones</span></div>
				<ul>
					<li id="menu_guiones_agregar"><span>Agregar guión</span></li>
					<li id="menu_guiones_borrar"><span>Selector para borrar guiones desagrupados</span></li>
				</ul>
			</li>

			<li id="menu_reiniciar" class="submenu">
				<div class="subtitulo"><span>Reiniciar</span></div>
				<ul>
					<li id="menu_reiniciar_accion"><span>Reiniciar la posición de los elementos</span></li>
				</ul>
			</li>
			
			<li id="menu_generarpdf"><span>Generar PDF</span></li>

			<li id="menu_zoom" class="submenu">
				<div id="menu_zoom_menos"><span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Shift −">−</span></div>
				<div id="menu_zoom_cifra"><span>100%</span></div>
				<div id="menu_zoom_mas"><span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Shift +">+</span></div>
			</li>
			
		</ul>
	</nav>
</div>




<div id="tablero">
	<div id="hoja" data-giro="horizontal" data-guias="visibles" data-guiasbloqueo="desbloqueadas" data-zoom="100">
		<div class="seleccion" id="sel_1"><div class="conjunto"></div></div>
		<div class="original" id="sig_0"></div>
		<div class="rotulo" id="rotulo"><span class="objeto">Cátedra Cosgaya | Sensibilización a la forma y al color tipográficos | Año <?php echo date("Y"); ?> | v<?php echo $version_actual; ?> | www.catedracosgaya.com.ar/espaciado</span></div>
	</div>
</div>
<div class="selector_marco"><span></span></div>


<div id="regla_guias_visibilidad"></div>
<div class="regla regla_horizontal">
	<div class="guia guia_horizontal guia_original guia_horizontal_original"><span></span></div>
</div>
<div class="regla regla_vertical">
	<div class="guia guia_vertical guia_original guia_vertical_original"><span></span></div>
</div>


<div id="texto">
	<div class="texto_contenedor">
		<p>Cuando lees de forma automática, y alcanzas el estado en que el texto de la página se convierte directamente en lenguaje, puede suceder que algo raro te interrumpe, como un espacio exagerado entre palabras en una columna o un renglón con espacio añadido entre letras.</p>
		<p>¿Qué ocurre mientras lees?, Gerard Unger.</p>
	</div>
	<div class="cerrar">×</div>
</div>


<form action="pdf.php" method="post" id="formulario">
	<input id="informacion" name="informacion" type="hidden" value=""/>
</form>




<div class="ventana_oculta">
	<div id="ventana_trabajopractico" class="ventana ventana_informacion">
		<h2>Trabajo práctico</h2>

		<h3>Objetivos</h3>
		<p>Desarrollar el sentido del ritmo a través del reconocimiento de las relaciones espaciales óptimas entre los elementos de un texto.</p>
		<p>Reflexionar sobre el comportamiento de las contraformas propias y compartidas, reconociendo pares problemáticos para proyectar las relaciones espaciales del conjunto.</p>
		<p>Analizar cómo interactúan la interletra, la interpalabra, la interlínea, el color del bloque, los márgenes y el soporte en una pieza gráfica y cómo influyen en la transmisión de la información escrita.</p>
		<p>Trabajar un bloque de texto de modo de generar un color homogéneo y armonía en la forma de la mancha (alineación, largo de las líneas, corte de palabras y márgenes).</p>

		<h3>Ejercitación</h3>
		<p>Se compondrá el texto propuesto prestando especial atención a las relaciones espaciales. Para ello se buscará primero la interletra que permita espaciar con un color parejo todos los pares presentes en el texto. Luego, en base a esa interletra se decidirá la interpalabra y la interlínea de modo tal que se establezcan líneas horizontales de palabras pertenecientes a un bloque de color homogéneo y de fácil lectura.</p>
		<p>En la composición, el tamaño de la caja, las relaciones espaciales, el marginado, etcétera, deberán proyectarse previamente y ser evaluados a medida que avanza el trabajo. Para esto pueden generarse e imprimirse PDF durante el proceso.</p>
		<p>Se compondrá un bloque con el texto completo en no menos de 4 líneas. El mismo deberá tener color tipográfico homogéneo.</p>
		<p>El bloque de texto, la/s línea/s de título y autor y el rótulo deberán formar parte de la composición, por lo que, además de cumplir sus respectivas funciones en la comunicación, deberán relacionarse en la puesta en página.</p>
		<p>El trabajo se evaluará en el impreso.</p>

		<h3>Consejos</h3>
		<p>Prestarle especial atención a los blancos (contraformas internas y compartidas). Utilizarlas para decidir las relaciones espaciales que permitan resolver el bloque con un color tipográfico homogéneo.</p>
		<p>Comenzar por ubicar cuáles son los pares de letras problemáticos, es decir, los que presentan mayores complicaciones para espaciarlos (porque contienen mucho o muy poco aire) y a partir de ellos detectar cuál es el rango de color posible para las palabras. Cuando se haya logrado igualar el color de una palabra que contenga uno de estos pares con otra que no los tenga, tomarlas como parámetro para espaciar las otras.</p>
		<p>Definir la interpalabra y la interlínea después de haber consolidado el color de las palabras.</p>
		<p>Leer el texto compuesto para evitar omisiones y erratas.</p>
		<p>Hacer el trabajo con tiempo y hacer evaluaciones durante el proceso.</p>
		<p>Una vez impreso el trabajo, verificar que los márgenes sean los buscados. No dejar que la impresión encaje el archivo en el área de impresión porque eso ampliará los márgenes y achicará las letras.</p>
		<p>Con el impreso a distancia prudente (al menos 50 cm) entrecerrar los ojos y observar el color del bloque. Tiene que ser homogéneo. Si lo que se ve no es el resultado buscado, volver a intentarlo, imprimir y repetir la operación.</p>

	</div>


	<div id="ventana_atajos" class="ventana ventana_informacion">
		<h2>Atajos de teclado</h2>
		<dl>
			<dt><span>Shift</span><i>+</i><span class="imagen"><img src="img/mouse_puntero_clic.svg" alt="" width="18" height="22"></span></dt>
			<dd>Sumar o quitar elementos a la selección</dd>

			<dt><span>A</span><i>…</i><span>Z</span></dt>
			<dd>Resaltar letras (tecla correspondiente)</dd>

			<dt><span>Barra espaciadora</span></dt>
			<dd>Resaltar signos de puntuación y con tilde</dd>

			<dt><span>Supr</span><i>/</i><span>Delete</span></dt>
			<dd>Borrar guión seleccionado</dd>

			<dt><span>Shift</span><i>+</i><span>+</span></dt>
			<dd>Zoom más</dd>

			<dt><span>Shift</span><i>+</i><span>−</span></dt>
			<dd>Zoom menos</dd>

			<dt><span>Shift</span><i>+</i><span>1</span></dt>
			<dd>Zoom 100%</dd>

			<dt><span>Shift</span><i>+</i><span>2</span></dt>
			<dd>Zoom 200%</dd>

			<dt><span>Shift</span><i>+</i><span>3</span></dt>
			<dd>Zoom 75%</dd>

			<dt>Borrar guía:</dt>
			<dd>Arrastrar la guía hasta el borde izquierdo (vertical) o superior (horizontal) y se pondrá en rojo</dd>
		</dl>
	</div>


	<div id="ventana_creditos" class="ventana ventana_informacion">
		<h2>Créditos</h2>

		<article class="info-introduccion">
			<p><strong>Elaboración ejercicio:</strong> Cuerpo docente de la Cátedra Cosgaya.</p>
			<p><strong>Desarrollo:</strong> Alejandro Sánchez Menéndez</p>
			<p><strong>Redacción:</strong> Marcela Romero y Alvaro Ghisolfo</p>
			<p><strong>Agradecimientos:</strong> Pablo Cosgaya, Marcela Romero, Alvaro Ghisolfo y a todo el cuerpo docente de la Cátedra.</p>
			<p><strong>Versión:</strong> <?php echo $version_actual." - ".$version_fecha;?></p>
		</article>

		<article class="info-licencia">
			<h3>Licencia de uso</h3>
			<p><a href="http://creativecommons.org/licenses/by-sa/4.0/deed.es" target="_blank">Esta obra está bajo una licencia de Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional.</a></p>
		</article>
		
		<article class="info-contacto">
			<h3>Contacto</h3>
			<p>Email: <a href="mailto:contactenos@catedracosgaya.com.ar">contactenos@catedracosgaya.com.ar</a></p>
			<p>Web: <a href="http://www.catedracosgaya.com.ar/" target="_blank">www.catedracosgaya.com.ar</a></p>
			<p>Facebook: <a href="http://www.facebook.com/catedracosgaya" target="_blank">facebook.com/catedracosgaya</a></p>
			<p>Twitter: <a href="http://www.twitter.com/catedracosgaya" target="_blank">twitter.com/catedracosgaya</a></p>
		</article>

		<article class="info-recursos">
			<h3>Recursos utilizados</h3>
			<p>Fuentes: <a href="http://www.omnibus-type.com/fonts/rosario.php" target="_blank">Rosario</a>, <a href="http://www.omnibus-type.com/fonts/chivo.php" target="_blank">Chivo</a>, <a href="http://www.google.com/fonts" target="_blank">Lato</a>, <a href="http://www.omnibus-type.com/fonts/asap-symbol.php" target="_blank">Asap Symbol</a>, <a href="http://fontawesome.io/" target="_blank">Font Awesome</a> y <a href="http://mfglabs.github.io/mfglabs-iconset/" target="_blank">MFG Labs icon set</a></p>
			<p class="enlaces"> <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="http://www.jacklmoore.com/colorbox/" target="_blank">Colorbox</a>, <a href="https://github.com/dompdf/dompdf" target="_blank">dompdf</a>, <a href="http://html5boilerplate.com/" target="_blank">HTML5 Boilerplate</a>, <a href="http://jqueryui.com/" target="_blank">jQuery UI</a>, <a href="http://touchpunch.furf.com/" target="_blank">jQuery UI Touch Punch</a>, <a href="http://nightlycoding.com/" target="_blank">Nightly Coding</a>, <a href="http://stackoverflow.com/" target="_blank">Stack Overflow</a> </p>
		</article>
	</div>

	<div id="ventana_pagina_girar" class="ventana">
		<h2>Atención</h2>
		<p>Al gira la página se podría perder la ubicación de las letras y guías que queden afuera de la misma.</p>
		<div class="botonera">
			<div id="girar_aceptar" class="boton boton_rojo">Girar</div>
			<div id="girar_cancelar" class="boton">Cancelar</div>
		</div>
	</div>

	<div id="ventana_guias_borrar" class="ventana">
		<h2>Atención</h2>
		<p>¿Quiere borrar todas las líneas guías de la página?</p>
		<div class="botonera">
			<div id="guias_borrar_aceptar" class="boton boton_rojo">Borrar</div>
			<div id="guias_borrar_cancelar" class="boton">Cancelar</div>
		</div>
	</div>

	<div id="ventana_reiniciar" class="ventana">
		<h2>Atención</h2>
		<p>¿Quiere reiniciar la posición de todas las letras y signos?</p>
		<div class="botonera">
			<div id="reiniciar_aceptar" class="boton boton_rojo">Reiniciar</div>
			<div id="reiniciar_cancelar" class="boton">Cancelar</div>
		</div>
	</div>

</div>





<script src="js/vendor/jquery.min.js"></script>
<script src="js/vendor/jquery.ui.custom.min.js"></script>
<script src="js/vendor/jquery.ui.touch-punch.min.js"></script>
<script src="js/vendor/jquery.colorbox.min.js"></script>
<script src="js/vendor/bootstrap.tooltip.min.js"></script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>

</body>
</html>
