import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Foot } from "./foot";
//create your first component
export function Home() {
	return (
		<div className="container text-center">
			<Navbar />
			<Jumbotron />
			<div className="container d-flex">
				<Card
					text="Esto es una foto cualquiera de un Carro"
					image="https://loremflickr.com/320/240/car"
					buttonLabel="car"
				/>
				<Card
					text="Esto es una foto cualquiera de un Bote"
					image="https://loremflickr.com/320/240/boat"
					buttonLabel="boat"
				/>
				<Card
					text="Esto es una foto cualquiera del Oceano"
					image="https://loremflickr.com/320/240/ocean"
					buttonLabel="ocean"
				/>
				<Card
					text="Esto es una foto cualquiera de una Chica"
					image="https://loremflickr.com/320/240/girl"
					buttonLabel="girl"
				/>
			</div>
			<Foot />
		</div>
	);
}
