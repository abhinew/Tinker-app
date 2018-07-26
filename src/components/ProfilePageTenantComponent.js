import * as React from 'react'
import { Link } from 'react-router-dom'

export default class ProfilePageTenantComponent extends React.PureComponent {
    render() {
        return (
                <div>
                     <div className="menu">
                        <div className="topButtons">
                            <Link to='/tenants'>Back</Link>
                            <Link to='/'>Logout</Link>
                        </div>
                     </div>
                </div>

        )
    }
}
