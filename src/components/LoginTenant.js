import * as React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Register from './Register';
import { addTenant } from '../actions/tenants_action'

class LoginTenant extends React.PureComponent {

    displayRegisteredTenants(tenant) {
        

        return (<li key={tenant.tenantID}>
            <Link to={ `/tenants/${tenant.tenantID}` }>{tenant.name}</Link> 

            </li>); 
    }
    
    render() {
        console.log(this.props.tenant)
        return (
            <div>
                <h1>Registered tenants</h1>
                { !this.props.tenants && 'Loading...' }
                {
                this.props.tenants &&
                <ul>{ this.props.tenants.map(this.displayRegisteredTenants) }</ul>
                }
                <Register onAddUser ={this.props.addTenant}/>   
            </div> 
        )
    }

}
const mapStateToProps = (state) => {
    return {
      tenants: state.tenant, // for the first time this is equal to the initial state defined in ./reducers/newWord
      owner: state.owner
    }
}

const mapDispatchToProps = {
    addTenant
}


export default connect(mapStateToProps, mapDispatchToProps) (LoginTenant) 