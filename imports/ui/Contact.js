import React, { Component }  from "react";
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';





class Contact extends Component {
	handleSubmit(event) {
	    event.preventDefault();
			console.log('Event: Form Submit');



	    // Find the text field via the React ref
	    const fn = ReactDOM.findDOMNode(this.refs.fn).value.trim();
	    const ln = ReactDOM.findDOMNode(this.refs.ln).value.trim();
	    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
	    const tel = ReactDOM.findDOMNode(this.refs.tel).value.trim();
	    const address = ReactDOM.findDOMNode(this.refs.address).value.trim();
	    const city = ReactDOM.findDOMNode(this.refs.city).value.trim();
	    const state = ReactDOM.findDOMNode(this.refs.state).value.trim();
	    const zip = ReactDOM.findDOMNode(this.refs.zip).value.trim();
	    const country = ReactDOM.findDOMNode(this.refs.country).value.trim();
	    const comment = ReactDOM.findDOMNode(this.refs.comment).value.trim();



	    Meteor.call('infos.insert', fn, ln, email, tel, address, city, state, zip, country, comment);

	    // Clear form
	    ReactDOM.findDOMNode(this.refs.fn).value = '';
	    ReactDOM.findDOMNode(this.refs.ln).value = '';
	    ReactDOM.findDOMNode(this.refs.email).value = '';
	    ReactDOM.findDOMNode(this.refs.tel).value = '';
	    ReactDOM.findDOMNode(this.refs.address).value = '';
	    ReactDOM.findDOMNode(this.refs.city).value = '';
	    ReactDOM.findDOMNode(this.refs.state).value = '';
	    ReactDOM.findDOMNode(this.refs.zip).value = '';
	    ReactDOM.findDOMNode(this.refs.country).value = '';
	    ReactDOM.findDOMNode(this.refs.comment).value = '';

	}


	render() {
		return (
				<form className='validate'>
				<label><h3>Contact</h3> </label>
				<label><h3>Your Details</h3> </label>
				<br />
				<label>First Name </label>
				<input
			        id="outlined-name"
			        label="First Name"
			        margin="normal"
			        ref="fn"
			        variant="outlined"
							placeholder="First name"
							required

			    />
					<span className='err-msg'></span>
					<br />
					<br />
					<label>Last Name </label>
			    <input

			        id="outlined-name"
			        label="Last Name"
			        margin="normal"
			        ref="ln"
			        variant="outlined"
							placeholder="Last name"

			    />
					<br />
					<br />
					<label>Email Address </label>
			    <input
			        id="outlined-name"
			        label="Email*"
							type="email"
							name="email"
							autoComplete="email"
			        margin="normal"
			        ref="email"
			        variant="outlined"
							placeholder="Email address"

			    />
					<br />
					<br />
					<label>Telephone </label>
			    <input
			        id="outlined-name"
			        label="Telephone"
			        margin="normal"
			        ref="tel"
			        variant="outlined"
							placeholder="Telephone:(000)000-0000"


			    />
					<br />
					<br />
					<label>Address </label>
			    <input
			        id="outlined-name"
			        label="Address"
			        margin="normal"
			        ref="address"
			        variant="outlined"
							placeholder="Address"
			    />
					<br />
					<br />
					<label>City </label>
			    <input
			        id="outlined-name"
			        label="City"
			        margin="normal"
			        ref="city"
			        variant="outlined"
							placeholder="City"
			    />
					<br />
					<br />
					<label>State </label>
              	<input
			        id="outlined-name"
			        label="State"
			        margin="normal"
			        ref="state"
			        variant="outlined"
							placeholder="State"
			    />
					<br />
					<br />
					<label>Zip </label>
                <input
			        id="outlined-name"
			        label="Zip*"
			        margin="normal"
			        ref="zip"
			        variant="outlined"
							placeholder="Zip(XXX-XXX)"
			    />
					<br />
					<br />
					<label>Country </label>
	            <input
			        id="outlined-name"
			        label="Country"
			        margin="normal"
			        ref="country"
			        variant="outlined"
							placeholder="Country"
			    />
						<br />
						<br />
						<label>How can we help you? </label>
								<textarea rows="4" cols="30"
			        id="outlined-name"
			        label="Comment"
			        margin="normal"
			        ref="comment"
			        variant="outlined"
							placeholder="Comment/Question: Enter text here... "

			    />
					<br />
					<br />


              <Button color="primary" margin="dense"  variant="outlined" onClick={this.handleSubmit.bind(this)}>Submit</Button>
            </form>
		);
	}
}



export default Contact;
