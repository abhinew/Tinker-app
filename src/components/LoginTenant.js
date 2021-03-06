import * as React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RegisterTenant from './RegisterTenant';
import { addTenant } from '../actions/tenants_action'

class LoginTenant extends React.PureComponent {

    displayRegisteredTenants(tenant) {


        return (<li key={tenant.tenantID} className='registerText' >
            <Link to={`/tenants/${tenant.tenantID}`}>{tenant.name}</Link>

        </li>);
    }

    render() {
        return (
            <div>
                <div className="menu">
                    <div className="topButtons">
                        <Link to='/'>Home</Link>
                    </div>
                </div>
                <h1>Registered tenants</h1>
                {!this.props.tenants && 'Loading...'}
                {
                    this.props.tenants &&
                    <ul>{this.props.tenants.map(this.displayRegisteredTenants)}</ul>
                }
                <RegisterTenant onAddUser={this.props.addTenant} />
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


export default connect(mapStateToProps, mapDispatchToProps)(LoginTenant) 