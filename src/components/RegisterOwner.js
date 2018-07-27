import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from "prop-types";
import SimpleAppBar from './SimpleAppBar';

class RegisterOwner extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      location: '',
      pricePerMonth: '',
      size: '',
      bathrooms: '',
      bedrooms: '',
      url: [],
      likeByTenant: [],
      like: [],
      dislike: [],
      lastTenantIDSeen: ''

    }
  }

  handleClick = (event) => {
    this.props.onAddUser({
      name: this.state.name,
      location: this.state.location,
      pricePerMonth: this.state.pricePerMonth,
      size: this.state.size,
      bathrooms: this.state.bathrooms,
      bedrooms: this.state.bedrooms,
      url: this.state.url,
      likeByTenant: this.state.likeByTenant,
      like: this.state.like,
      dislike: this.state.dislike,
      lastTenantIDSeen: this.state.lastTenantIDSeen
    });
    this.setState({
      name: '',
      location: '',
      pricePerMonth: '',
      size: '',
      bathrooms: '',
      bedrooms: '',
      url: [],
      likeByTenant: [],
      like: [],
      dislike: [],
      lastTenantIDSeen: ''
    });
  }


  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <SimpleAppBar title="Register"/>
           <TextField
             hintText="Enter the Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => {this.setState({name:newValue})}}
             />
           <br/>
           <TextField
             hintText="Enter the location"
             floatingLabelText="location"
             onChange = {(event,newValue) => this.setState({location:newValue})}
             />
            <br/> 
            <TextField
             hintText="Enter the pricePerMonth"
             floatingLabelText="pricePerMonth"
             onChange = {(event,newValue) => this.setState({pricePerMonth:newValue})}
             />
             <br/>
            <TextField
             hintText="Enter the size of property"
             floatingLabelText="size"
             onChange = {(event,newValue) => this.setState({size:newValue})}
             />
             <br/>
             <TextField
             hintText="Enter the number of bathrooms"
             floatingLabelText="bathrooms"
             onChange = {(event,newValue) => this.setState({bathrooms:newValue})}
             /> 
             <br/> 
             <TextField
             hintText="Enter the number of bedrooms"
             floatingLabelText="bedrooms"
             onChange = {(event,newValue) => this.setState({bedrooms:newValue})}
             /> 
             <br/> 
           <br/>
           <br/>
           <RaisedButton label="Submit" primary={true} style={{style}} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}


RegisterOwner.propTypes = {
  onAddUser: PropTypes.func.isRequired
}

const style = {
  margin: 15
};

export default RegisterOwner;

