import * as React from 'react'
import { connect } from 'react-redux'
import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'


class MainPageOwner extends React.PureComponent {
    render(){
      return ( <div>
                  <div className="topButtons">
                    <Link to = '/profile'><button>Profile</button></Link>
                    <Link to = '/'><button>Home</button></Link>
                    <Link to = '/chat'><button>Chat</button></Link>
                  </div>
                    <h1>{owners[1].Location}</h1>

                  <div className="homeOwnerImage" data-swipable="true" >
                    <img  src={owners[1].url} alt="House" draggable></img>
                  </div>
                  <div className="homeInformation">
                    <ul>
                        <li>Size: {owners[1].size} m2</li>
                        <li>Bathrooms: {owners[1].bathrooms}</li>
                        <li>Bedrooms: {owners[1].bedrooms}</li>
                        <li>Price per month: {owners[1].pricePerMonth}</li>
                    </ul>
                  </div>
                  <div className="swipeButtons">
                    <button id="like">Like</button>
                    <button id="dislike">Dislike</button>
                  </div>
               </div> 
          )
    }
  }

export default connect(null, {})(MainPageOwner)
