import { Link } from 'react-router-dom'
import React from 'react'


export default class FirstPageComponent extends React.PureComponent {
    render() {
        return (
            <div className="body">
                <div className="titleHomePage">
                    <h1>Welcome to Tinker!</h1>
                </div>
                <div className="homePic">
                    <img src={require('../images/FirstPageImage_Small.jpg')} alt="FirstPage" className="FirstPageImage" />
                </div>
                <div>
                    <Link to='/ownersLogin'><button className="firstpageButton"><b>I'm an owner</b></button></Link>
                    <Link to='/tenantsLogin'><button className="firstpageButton"><b>I'm a tenant</b></button></Link>
                </div>
            </div>

        )
    }
}
