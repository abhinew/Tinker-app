import { Link } from 'react-router-dom'
import React from 'react'

export default class FirstPageComponent extends React.PureComponent {
    render() {
        return (
        <div>
            <div>
            <img src={require('../images/FirstPageImage_Small.jpg')} alt="FirstPage" className = "FirstPageImage"/>
            </div>
            <div>
            <Link to = '/main/tenantselector' className = "FirstPageButton"><button>I am the owner</button></Link>
            <Link to = '/main/houseselector' className = "FirstPageButton"><button>I am a tenant</button></Link>
            </div>
            </div>

        )
    }
}
