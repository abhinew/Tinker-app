import * as React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RegisterOwner from './RegisterOwner';
import { addOwner } from '../actions/owners_action'

class LoginOwner extends React.PureComponent {

    displayRegisteredOwners(owner) {
        return (<li key={owner.ownerID} className='registerText' >
            <Link to={`/owners/${owner.ownerID}`}>{owner.name}</Link>
        </li>)
    }

    render() {
        return (
            <div>
                <div className="menu">
                    <div className="topButtons">
                        <Link to='/'>Home</Link>
                    </div>
                </div>
                <h1>Registered owners</h1>
                {!this.props.owner && 'Loading...'}
                {(this.props.owner) ? <ul>{this.props.owner.map(this.displayRegisteredOwners)}</ul> : null}
                <RegisterOwner onAddUser={this.props.addOwner} />
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

export default connect(mapStateToProps, { addOwner })(LoginOwner) 