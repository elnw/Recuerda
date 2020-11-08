import React, { Component} from 'react';
import {Label, Col, Row, Button} from 'reactstrap';
import ShowPassword from './ShowPasswordComponent';

class Options extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			insertedSymbols: "",
			inputLength: 6,
			shouldGeneratePW: false
		};
		
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
		this.generatePassword = this.generatePassword.bind(this);
	}
	
	handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }
	
	handleSubmit(event) {
		event.preventDefault();
        this.setState({
			shouldGeneratePW: true
		});
        
    }
	
	generatePassword(){
		var finalPW = "";
		var finalLength = this.state.inputLength;
		var jump = Math.floor(Math.random() * 6); //random number between 0 and 5
		var initialCharacter = 0;
		var symbolList = this.state.insertedSymbols.split(";");
		if(!(jump & 1) && symbolList.length > 0){
			finalPW += symbolList[0];
		}
		initialCharacter = Math.floor(Math.random() * 28) + 65;
		
		finalPW += String.fromCharCode(initialCharacter);
		
		var rnInserter = 0;
		
		for(var i=0;i<finalLength-1 - ((!(jump & 1) && symbolList.length > 0) ? 1: 0);i++){
			rnInserter = Math.floor(Math.random() * 17);
			
			if(!(rnInserter & 1)){
				if(symbolList.length > 0){
					finalPW+=symbolList[Math.floor(Math.random() * symbolList.length)];
				}else{
					finalPW+=String.fromCharCode(Math.floor(Math.random() * 221) + 33);
				}
			}else{
				finalPW+=String.fromCharCode(initialCharacter);
				initialCharacter+=jump;
			}
		}
		
		return finalPW;
	}
	
	
	render(){
		return(
			<div className="mt-3">
				<form onSubmit={this.handleSubmit}>
					<Row className="form-group">
						<Col sm={{ size: 9, offset: 1 }}>
							<Label htmlFor="symbols">Wanna use specific symbols? Put them here (separated by ;)</Label>
							<input className="form-control" id="insertedSymbols" name="insertedSymbols" type="text" value={this.state.insertedSymbols ?? ""}  onChange={this.handleInputChange} />
						
						</Col>
					</Row>
					
					<Row className="form-group">
						<Col sm={{ size: 9, offset: 1 }}>
							<Label htmlFor="inputLength">Enter the desired lenght of you password</Label>
							<input className="form-control" id="inputLength" name="inputLength" type="number" value={this.state.inputLength} min="0" max="20" onChange={this.handleInputChange} />
						</Col>
					</Row>
					
					<Col sm={{ size: 4, offset: 4 }}>
						<Button type="submit" value="submit" color="primary">
								Generate password
						</Button>
					</Col>
				
				</form>
				
				{ this.state.shouldGeneratePW && 
					(<div>
						<Row>
							<Col sm={{ size: 9, offset: 1 }}>
								<ShowPassword generatedPassword={ this.generatePassword()}  />
							</Col>
						</Row>
					</div>)
				}
				
				
				
			</div>
		)
	}
}

export default Options;