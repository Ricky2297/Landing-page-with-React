import React from "react";

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron mt-5">
			<h1 className="display-4">
				<strong>Landing page with React</strong>
			</h1>
			<p className="lead">
				Esto es una pagina la cual estoy haciendo con React Js, Lo estoy
				aprendiendo en 4Geeks y aqui no se que mas poner por que esto es
				solo un texto el cual estoy poniendo aqui, por cierto Hola a
				todo el que lea esto!
			</p>

			<p className=" lead ">
				<a className="btn btn-primary btn-lg" href="" role="button">
					Reload!
				</a>
			</p>
		</div>
	);
}
