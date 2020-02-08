import React from "react";
import { reduxForm, Field } from "redux-form";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { result: "" };
	}

	renderField({ placeholder, type, input, label, meta: { touched, error } }) {
		return (
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<span className="input-group-text">{label}</span>
				</div>
				<input
					type={type}
					className="form-control"
					placeholder={placeholder}
					{...input}
				/>
			</div>
		);
	}

	calculateRentBill(values) {
		var elecNew = values["elec-new"];
		var elecOld = values["elec-old"];
		var waterNew = values["water-new"];
		var waterOld = values["water-old"];

		var electric = (elecNew - elecOld) * 1000;
		var water = (waterNew - waterOld) * 1000;

		var calculate = JSON.stringify(electric + water);

		var result = "";

		for (var i = 1; i <= calculate.length; i++) {
			if (i % 3 === 0) {
				result = "," + calculate[calculate.length - i] + result;
			} else {
				result = calculate[calculate.length - i] + result;
			}
		}

		return result;
	}

	onFormSubmit = values => {
		this.setState({ result: this.calculateRentBill(values) });
	};

	render() {
		return (
			<div className="container">
				<form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
					<div className="jumbotron mt-5">
						<h1 className="display-5">Rent Bill Calculation App</h1>
						<p>
							<b>Electic:</b>
						</p>
						<div className="row">
							<div className="col-md-6">
								<Field
									name="elec-new"
									type="number"
									label="New"
									placeholder="Number"
									component={this.renderField}
								/>
							</div>
							<div className="col-md-6">
								<Field
									name="elec-old"
									type="number"
									label="Old"
									placeholder="Number"
									component={this.renderField}
								/>
							</div>
						</div>
						<p>
							<b>Water:</b>
						</p>
						<div className="row">
							<div className="col-md-6">
								<Field
									name="water-new"
									type="number"
									label="New"
									placeholder="Number"
									component={this.renderField}
								/>
							</div>
							<div className="col-md-6">
								<Field
									name="water-old"
									type="number"
									label="Old"
									placeholder="Number"
									component={this.renderField}
								/>
							</div>
						</div>
						<hr className="my-4" />
						<div className="mb-4 h2">
							{this.state.result + " R"}
						</div>
						<button
							className="btn btn-primary btn-lg"
							type="submit"
						>
							Calculate
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: "rentCalcForm"
})(App);
