import * as React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Register from './Register';


class LoginTenant extends React.PureComponent {

    displayRegisteredTenants(tenant) {
        
        return (<li>
            <Link to={ `/tenants/${tenant.tenantID}` }>{tenant.name}</Link> 
            </li>); 
    }

    render() {
        console.log(this.props.tenant)
        return (
            <div>
                <h1>Registered tenants</h1>
                { !this.props.tenant && 'Loading...' }
                {
                this.props.tenant &&
                <ul>{ this.props.tenant.map(this.displayRegisteredTenants) }</ul>
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

export default connect(mapStateToProps, null) (LoginTenant) 