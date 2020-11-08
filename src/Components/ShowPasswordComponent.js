import React, { Component} from 'react';

class ShowPassword extends Component{
	
	render(){
		//this.generatePassword();
		return(
		<div className="mt-3">
			<p>Your new password is: </p>
			<input type="text" className="border-style form-control" value={ this.props.generatedPassword} />
		</div>);

	}
}

export default ShowPassword;
