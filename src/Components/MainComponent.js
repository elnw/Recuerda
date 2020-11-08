import React, { Component} from 'react';
import { Jumbotron } from 'reactstrap';
import Options from './OptionsComponent';

class Main extends Component{
	
	render(){
		return(
			<div>
				<Jumbotron>
					<div className="container">
						<div className="align-self-center">
							<h1>Recuerda!</h1>
						</div>
					</div>
				</Jumbotron>
				
				<div className="container">
					<div className="align-self-center mt-2">
						<h2>Generate an easy-to-remember and strong password with only one click</h2>
					</div>
					<Options />
				</div>
				
			
			</div>
		)
	}
	
	
}

export default Main;