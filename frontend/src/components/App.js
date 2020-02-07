import React from "react";

const App = () => {
	return (
		<div className="container">
			<div className="jumbotron mt-5">
				<h1 className="display-4">Rent Bill Calculation</h1>
				<p>
					<b>Electric Use:</b>
				</p>
				<div className="row">
					<div className="col-md-6">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									New Amount
								</span>
							</div>
							<input
								type="number"
								className="form-control"
								placeholder="Number"
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									Old Amount
								</span>
							</div>
							<input
								type="number"
								className="form-control"
								placeholder="Number"
							/>
						</div>
					</div>
				</div>
				<p><b>Water Use:</b></p>
				<div className="row">
					<div className="col-md-6">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									New Amount
								</span>
							</div>
							<input
								type="number"
								className="form-control"
								placeholder="Number"
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									Old Amount
								</span>
							</div>
							<input
								type="number"
								className="form-control"
								placeholder="Number"
							/>
						</div>
					</div>
				</div>
				<hr className="my-4" />
				<p>
					0.0R
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Calculation
				</a>
			</div>
		</div>
	);
};

export default App;
