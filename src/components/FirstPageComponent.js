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
            <img src={require('../images/FirstPageImage_Small.jpg')} alt="FirstPage" className = "FirstPageImage"/>
            </div>
            <div>
            <Link to='/ownersLogin' className="FirstPageButton"><button>I am the owner</button></Link>
            <Link to='/tenantsLogin' className="FirstPageButton"><button>I am a tenant</button></Link>
            </div>
            </div>

        )
    }
}
