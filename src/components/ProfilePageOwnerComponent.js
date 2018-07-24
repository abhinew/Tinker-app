import * as React from 'react'
import { Link } from 'react-router-dom'

export default class ProfilePageOwnerComponent extends React.PureComponent {
    render() {
        return (
                <div>
                     <div className="topButtons">
                        <Link to = '/main/owner'><button>Home</button></Link>
                    </div>

                </div>

        )
    }
}
