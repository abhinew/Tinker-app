import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from "prop-types";
import SimpleAppBar from './SimpleAppBar'


class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      age:'',
      occupation: '',
      company: '',
      incomePerMonth: '',
      url: [],
      like: [],
      dislike: [],
      thinking: [],
      lastOwnerIDSeen: ''
    }
  }

  handleClick = (event) => {

    this.props.onAddUser({
      name: this.state.first_name,
      age: this.state.age,
      occupation: this.state.occupation,
      company: this.state.company,
      incomePerMonth: this.state.incomePerMonth,
      url: this.state.url,
      like: this.state.like,
      dislike: this.state.dislike,
      thinking: this.state.thinking,
      lastOwnerIDSeen: this.state.lastOwnerIDSeen
    });

    this.setState({
      first_name:'',
      age:'',
      occupation: '',
      company: '',
      incomePerMonth: '',
      url: [],
      like: [],
      dislike: [],
      thinking: [],
      lastOwnerIDSeen: ''
    })
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <SimpleAppBar style={{color:'#303f9f'}} title ="Register" />
           <TextField
             hintText="Enter your Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => {this.setState({first_name:newValue})}}
             />
           <br/>
           <TextField
             hintText="Enter your Age"
             floatingLabelText="Age"
             onChange = {(event,newValue) => this.setState({age:newValue})}
             />
            <br/> 
            <TextField
             hintText="Enter your Occupation"
             floatingLabelText="Occupation"
             onChange = {(event,newValue) => this.setState({occupation:newValue})}
             />
             <br/>
            <TextField
             hintText="Enter your company"
             floatingLabelText="company"
             onChange = {(event,newValue) => this.setState({company:newValue})}
             />
             <br/>
             <TextField
             hintText="Enter your incomePerMonth"
             floatingLabelText="incomePerMonth"
             onChange = {(event,newValue) => this.setState({incomePerMonth:newValue})}
             /> 
             <br/> 
           <br/>
           <br/>
           <RaisedButton label="Submit" primary={true}  style={{'background-color': '#303f9f'}} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}


Register.propTypes = {
  onAddUser: PropTypes.func.isRequired
}

const style = {
  margin: 15,
};

export default Register;