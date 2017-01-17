function getQueryParams(qs) {
	qs = qs.split('+').join(' ');

	var params = {},
		tokens,
		re = /[?&]?([^=]+)=([^&]*)/g;

	while (tokens = re.exec(qs)) {
		params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}

	return params;
}

var query = getQueryParams(document.location.search);

var lines = "";
lines += "<li>";
lines += `	<a href="javascript:irA('index.html')" class='focus'><i class='fa fa-home'></i><br>Inicio</a>`;
lines += "</li>";
if(query.isAdmin){
	lines += "<li>";
	lines += `	<a href="javascript:irA('analisis.html')"><i class='glyphicon glyphicon-stats'></i><br>Análisis</a>`;
	lines += "</li>";
	lines += "<li>";
	lines += `	<a href="javascript:irA('visualizacion.html')"><i class='glyphicon glyphicon-eye-open'></i><br>Visualización</a>`;
	lines += "</li>";
	lines += "<li>";
	lines += `	<a href="javascript:irA('configuracion.html')"><i class='glyphicon glyphicon-cog'></i><br>Configuración</a>`;
	lines += "</li>";
}
if(query.isAdmin){
	lines += "<li>";
	lines += "	<a href='index.html'><i class='glyphicon glyphicon-log-out'></i><br>Salir</a>";
	lines += "</li>";
}else{
	lines += "<li>";
	lines += "	<a href='iniciarSesion.html'><i class='glyphicon glyphicon-log-in'></i><br>Entrar</a>";
	lines += "</li>";
}
$("#menuContenedor").append(lines);

function irA(url){
	if(query.isAdmin){
		window.location.href = url + '?isAdmin=true';
	}else{
		window.location.href = url;
	}
}