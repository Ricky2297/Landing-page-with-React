import React from "react";

//create your first component
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top d-flex">
			<a className="navbar-brand" href="#">
				Start Boostrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse justify-content-end">
				<ul className="navbar-nav ">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Service
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link " href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
