import * as React from 'react'
import { connect } from 'react-redux'
import { homeOwners } from '../lib/homeOwners'
import { Link } from 'react-router-dom'



class MainPageOwner extends React.PureComponent {
    render(){
      return ( <div>
                  <div className="menu">
                  <div className="topButtons">
                    <Link to = '/profile/tenant'>Profile</Link>
                    <Link to = '/'>Home</Link>
                    <Link to = '/chat'>Chat</Link>
                  </div>
                  </div>
                    <h1>{homeOwners[3].Location}</h1>
                  <div className="homeOwnerImage" data-swipable="true" >
                    <img className="Arrow-icons" src={require('../images/Button-Back.png')}/>
                    <img  src={homeOwners[1].url[1]} alt="House" draggable></img>
                     <img className="Arrow-icons" src={require('../images/Button-Next.png')}/>
                  </div>
                  <div className="homeInformation">
                    <ul>
                        <li>Size: {homeOwners[1].size} m2</li>
                        <li>Bathrooms: {homeOwners[1].bathrooms}</li>
                        <li>Bedrooms: {homeOwners[1].bedrooms}</li>
                        <li>Price per month: {homeOwners[1].pricePerMonth}</li>
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
