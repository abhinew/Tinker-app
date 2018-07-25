import * as React from 'react'
import { connect } from 'react-redux'
import { tenants } from '../lib/tenants_lib'
import { Link } from 'react-router-dom'


class MainPageTenant extends React.PureComponent {
    render(){
      return ( <div>
                <div className="menu">
                  <div className="topButtons">
                    <Link to = '/profile/owner'>Profile</Link>
                    <Link to = '/'>Home</Link>
                    <Link to = '/chat'>Chat</Link>
                </div>
                </div>
                  <h1>{tenants[1].Location}</h1>

                  <div className="tenantImage" data-swipable="true" >
                    <img className="Arrow-icons" src={require('../images/Button-Back.png')} alt = "" />
                    <img  src={tenants[0].url} alt="Face" draggable></img>
                    <img className="Arrow-icons" src={require('../images/Button-Next.png')} alt = "" />
                  </div>
                  <div className="tenantInformation">
                    <ul>
                        <li>Name: {tenants[0].name}</li>
                        <li>age: {tenants[1].age}</li>
                        <li>occupation: {tenants[1].occupation}</li>
                        <li>company: {tenants[1].company}</li>
                        <li>Income per month: {tenants[1].incomePerMonth}</li>
                    </ul>
                  </div>
                  <div className="swipeButtons">
                    <button id="like">Like</button>
                    <button id="dislike">Dislike</button>
                    <button id="maybe">Maybe</button>
                  </div>
                </div> 
          )
    }
  }

export default connect(null, {})(MainPageTenant)
