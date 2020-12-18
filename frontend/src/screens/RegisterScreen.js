import react from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../actions/userActions';



const RegisterScreen = () => {


    const submitHandler = (e) => {
        e.preventDefault()

        console.log('good')
    }
    return (
        <div className="register">

       
        <div className="customer-signup">
		<div className="customer-signup-header">
			<h3 className="customer-signup-heading">Create an account</h3>
		</div>
		
		<form action="" onSubmit={submitHandler}>
			<div className="customer-signup-form-group">
				<input
					type="text"
					className="customer-signup-form-input"
					placeholder="First name"
					required
				/>
				<input
					type="text"
					className="customer-signup-form-input"
					placeholder="Last name"
					required
				/>
			</div>
			<div className="customer-signup-form-group">
				<input
					type="email"
					className="customer-signup-form-input"
					placeholder="Email Address"
					required
				/>
			</div>
			<div className="customer-signup-form-group">
				<input
					type="password"
					className="customer-signup-form-input"
					placeholder="Password"
					required
				/>
				<input
					type="password"
					className="customer-signup-form-input"
					placeholder="Confirm Password"
					required
				/>
			</div>
			<div className="customer-signup-form-group">
				<button className="customer-signup-btn">Create my account</button>
			</div>
		</form>
	</div>
    </div>
    )
}



export default RegisterScreen