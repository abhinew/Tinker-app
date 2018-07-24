import * as React from 'react'
import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
// import FirstPage from './FirstPage'

export default class FirstPageComponent extends React.PureComponent {
    render() {
        return (<div>

            <Link to = '/MainPageOwner'><button>I am the owner</button></Link>
            <Link to = '/MainPageTenant'><button>I am a tenant</button></Link>
            </div>

        )
    }
}
