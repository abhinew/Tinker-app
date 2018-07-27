import * as React from 'react'
import { Link } from 'react-router-dom'

export default class ProfilePageTenantComponent extends React.PureComponent {
    render() {
        return (
                <div>
                     <div className="menu">
                        <div className="topButtons">
                            <Link to={ `/tenants/${this.props.location.pathname.slice(-1)}` }>Back</Link>
                            <Link to='/'>Logout</Link>
                        </div>
                     </div>
                </div>

        )
    }
}
