<?php
if (isset($_POST['informacion'])){

	$json = file_get_contents('php://input');
	$letrasArray = json_decode(stripslashes($_POST['informacion']), true);


	$factorPDF = 1.5874;

	function glifosRestitucion($original){
		if ($original == "atilde"){
			return "Á";
		} else if ($original == "etilde"){
			return "É";
		} else if ($original == "itilde"){
			return "Í";
		} else if ($original == "otilde"){
			return "Ó";
		} else if ($original == "utilde"){
			return "Ú";
		} else if ($original == "cedilla"){
			return "Ç";
		} else if ($original == "avirgulilla"){
			return "Ã";
		} else if ($original == "ovirgulilla"){
			return "Õ";
		} else if ($original == "nvirgulilla"){
			return "Ñ";
		} else if ($original == "punto"){
			return ".";
		} else if ($original == "coma"){
			return ",";
		} else if ($original == "puntoycoma"){
			return ";";
		} else if ($original == "puntossuspensivos"){
			return "…";
		} else if ($original == "guionmediano"){
			return "–";
		} else if ($original == "guionlargo"){
			return "—";
		} else if ($original == "inta"){
			return "¿";
		} else if ($original == "intc"){
			return "?";
		} else if ($original == "exca"){
			return "¡";
		} else if ($original == "excc"){
			return "!";
		} else if ($original == "comillasimplea"){
			return "‘";
		} else if ($original == "comillasimplec"){
			return "’";
		} else if ($original == "comilladoblea"){
			return "“";
		} else if ($original == "comilladoblec"){
			return "”";
		} else {
			return $original;
		}
	}




	/* HTML --------------------------------------------------------------------- */
	$html = '<link rel="stylesheet" href="css/estilos_pdf.css">';
	foreach ($letrasArray as &$valor) {

		$tipo = htmlspecialchars($valor[tipo], ENT_QUOTES | ENT_HTML401, 'UTF-8');

		if ( $tipo == "hoja" ){
			$info_giro = htmlspecialchars($valor[giro], ENT_QUOTES | ENT_HTML401, 'UTF-8');
			if ($info_giro == "vertical"){
				$pagina_orientacion = "portrait";
			} else {
				$pagina_orientacion = "landscape";
			}
		}

		if ( $tipo == "signo" || $tipo == "guion" ){
			$glifo_class = $tipo;
			$glifo_id = htmlspecialchars($valor[id], ENT_QUOTES | ENT_HTML401, 'UTF-8') ;
			$glifo_left = htmlspecialchars($valor[left], ENT_QUOTES | ENT_HTML401, 'UTF-8') * $factorPDF;
			$glifo_top = htmlspecialchars($valor[top], ENT_QUOTES | ENT_HTML401, 'UTF-8') * $factorPDF;
			$glifo_letra = glifosRestitucion( htmlspecialchars($valor[letra], ENT_QUOTES | ENT_HTML401, 'UTF-8') );

			$html .= '<div class="glifo '.$glifo_class.'" id="'.$glifo_id.'" style="left:'.$glifo_left.'px; top:'.$glifo_top.'px;">'.$glifo_letra.'</div>';
		}

		if ( $tipo == "rotulo" ){
			$rotulo_class = $tipo;
			$rotulo_id = htmlspecialchars($valor[id], ENT_QUOTES | ENT_HTML401, 'UTF-8') ;
			$rotulo_left = htmlspecialchars($valor[left], ENT_QUOTES | ENT_HTML401, 'UTF-8') * $factorPDF;
			$rotulo_top = htmlspecialchars($valor[top], ENT_QUOTES | ENT_HTML401, 'UTF-8') * $factorPDF;
			$rotulo_texto = htmlspecialchars($valor[texto], ENT_QUOTES | ENT_HTML401, 'UTF-8') ;

			$html .= '<div class="'.$rotulo_class.'" id="'.$rotulo_id.'" style="left:'.$rotulo_left.'px; top:'.$rotulo_top.'px;">'.$rotulo_texto.'</div>';
		}

	}





	/* PDF ---------------------------------------------------------------------- */
	require_once("dompdf/dompdf_config.inc.php");
	$dompdf = new DOMPDF();
	$dompdf->set_paper('A3', $pagina_orientacion); /* landscape - portrait */
	$dompdf->load_html($html);
	$dompdf->render();
	$dompdf->stream("Catedra_Cosgaya_TP_Letras.pdf");
}
?>