import * as React from 'react'
import { connect } from 'react-redux'
import { homeOwners } from '../lib/homeOwners'


class MainPageOwner extends React.PureComponent {
    render(){
      return ( <div>
          <div className="topButtons">
          <button>Profile</button>
          <button>Home</button>
          <button>Chat</button>
          </div>
          <h1>{homeOwners[1].Location}</h1>

          <div className="homeOwnerImage" data-swipable="true" >
             <img  src={homeOwners[1].url} draggable></img>
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