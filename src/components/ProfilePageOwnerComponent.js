import * as React from 'react'
import { Link } from 'react-router-dom'

export default class ProfilePageOwnerComponent extends React.PureComponent {

    render() {
        console.log(this.props)
        return (
                <div>
                      <div className="menu">
                        <div className="topButtons">
                            <Link to={"/owners/"}>Back</Link>
                            <Link to='/chat'>Logout</Link>
                        </div>
                    </div>
                </div>

        )
    }
}
