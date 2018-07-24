import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'

export default class FirstPageComponent extends React.PureComponent {
    render() {
        return (
        <div>
            <div>
            <img src={require('../images/ttFirstPageImage.jpg')} alt="FirstPage" className = "FirstPageImage"/>
            </div>
            <div>
            <Link to = '/main/owner' className = "FirstPageButton"><button>I am the owner</button></Link>
            <Link to = '/main/tenant' className = "FirstPageButton"><button>I am a tenant</button></Link>
            </div>
            </div>

        )
    }
}
