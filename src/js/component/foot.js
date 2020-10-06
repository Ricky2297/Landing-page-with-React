import React from "react";

//create your first component
export function Foot() {
	return (
		<div className="card-dark bg-dark fixed-bottom">
			<div className="card-body">
				<blockquote className="blockquote mb-0">
					<footer className="blockquote-footer">
						Copyright © Ricky Garcia
					</footer>
				</blockquote>
			</div>
		</div>
	);
}
