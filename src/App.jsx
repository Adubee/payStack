import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import './App.css';

function App() {
	const publicKey = import.meta.env.VITE_PAYSTACK_KEY;
	const amount = 1000000; // Remember, set in kobo!
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const currency = 'GHS';

	const buttonClick = (e) => {
		e.preventDefault()
	} 
	const componentProps = {
		email,
		amount,
		currency,
		metadata: {
			name,
			phone,
		},
		publicKey,
		text: 'Pay Now',
		onSuccess: () => {
			alert('Thanks for doing business with us! Come back soon!!');
		},
		onClose: () => {},
	};

	return (
		<>
			<div className="container">
				<div className="card">
					<div className="card-image">
						<h2 className="card-heading">
							Get started
							<small>Complete your purchase</small>
						</h2>
					</div>

					<form className="card-form" onSubmit={buttonClick}>
						<div className="input">
							<input
								type="text"
								className="input-field"
								name="name"
								required
								id="name"
								onChange={(e) => setName(e.target.value)}
							/>
							<label className="input-label">Full name</label>
						</div>
						<div className="input">
							<input
								type="email"
								className="input-field"
								name="email"
								id="email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<label className="input-label">Email</label>
						</div>
						<div className="input">
							<input
								type="number"
								className="input-field"
								name="password"
								id="phone"
								onChange={(e) => setPhone(e.target.value)}
								required
							/>
							<label className="input-label">Phone Number</label>
						</div>
						<div className="action">
							<PaystackButton
								className="paystack-button action-button"
								{...componentProps}
							/>
						</div>
					</form>
					<div className="card-info">
						<p>
							By signing up you are agreeing to our
							<a href="#">Terms and Conditions</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
