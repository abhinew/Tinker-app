import * as React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Register from './Register';


class LoginOwner extends React.PureComponent {

    displayRegisteredOwners(owner) {
        
        return (<li>
            <Link to={"/owners/" }>{owner.name}</Link> 
            </li>); 
    }

    render() {
        console.log(this.props.owner)
        return (
            <div>
                <h1>Registered owners</h1>
                { !this.props.owner && 'Loading...' }
                {
                this.props.owner &&
                <ul>{ this.props.owner.map(this.displayRegisteredOwners) }</ul>
                }
                 <Register />   
            </div> 
        )
    }

}
const mapStateToProps = (state) => {
    return {
      tenant: state.tenant, // for the first time this is equal to the initial state defined in ./reducers/newWord
      owner: state.owner
    }
}

export default connect(mapStateToProps, null) (LoginOwner) 