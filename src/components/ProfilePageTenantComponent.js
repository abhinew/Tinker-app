import * as React from 'react'
import { Link } from 'react-router-dom'

export default class ProfilePageTenantComponent extends React.PureComponent {
    render() {
        return (
                <div>
                     <div className="topButtons">
                        <Link to = '/main/tenant'><button>Home</button></Link>
                    </div>

                </div>

        )
    }
}
