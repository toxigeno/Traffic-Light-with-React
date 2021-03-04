import React, { useState } from "react";

export function Trafficlight() {
	let [colorLight, setColorLight] = useState("");

	function red() {
		setColorLight("red");
	}
	function yellow() {
		setColorLight("yellow");
	}

	function green() {
		setColorLight("green");
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="tl-box">
					<div className="bolster mx-auto"></div>
					<div className="tl-body p-2">
						<div
							onClick={red}
							className={
								"red-light" +
								(colorLight == "red" ? " glow" : "")
							}></div>
						<div
							onClick={yellow}
							className={
								"yellow-light" +
								(colorLight == "yellow" ? " glow" : "")
							}></div>
						<div
							onClick={green}
							className={
								"green-light" +
								(colorLight == "green" ? " glow" : "")
							}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Trafficlight;
