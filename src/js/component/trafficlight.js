import React from "react";

const Trafficlight = () => {
	constructor();
	super();
	this.state = {
		clickedLight: null
	};
};

let redglow = "";
if (this.state.clickedLight == "redlight") redglow = "glow";
let yellowglow = "";
if (this.state.clickedLight == "yellowlight") redglow = "glow";
let greenglow = "";
if (this.state.clickedLight == "greenlight") redglow = "glow";

return (
	<div>
		<div id="top"></div>
		<div id="container">
			<div
				className={"light redlight" + "redglow"}
				onClick={() =>
					this.setState({ clickedLight: "redlight" })
				}></div>
			<div
				className={"light yellowlight" + "yellowglow"}
				onClick={() =>
					this.setState({ clickedLight: "yellowlight" })
				}></div>
			<div
				className={"light greenlight" + "greenglow"}
				onClick={() =>
					this.setState({ clickedLight: "greenlight" })
				}></div>
		</div>
	</div>
);
export default Trafficlight;
