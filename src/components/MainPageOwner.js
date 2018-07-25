import * as React from 'react'
import { connect } from 'react-redux'
import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'



class MainPageOwner extends React.PureComponent {
  render() {
    return (<div>
      <div className="menu">
        <div className="topButtons">
          <Link to='/profile/tenant'>Profile</Link>
          <Link to='/'>Home</Link>
          <Link to='/chat'>Chat</Link>
        </div>
        <h1>{owners[1].Location}</h1>
        <div className="homeOwnerImage" data-swipable="true" >
          <img className="Arrow-icons" src={require('../images/Button-Back.png')} />
          <img src={owners[1].url[0]} alt="House" draggable></img>
          <img className="Arrow-icons" src={require('../images/Button-Next.png')} />
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
    </div>
    )
  }
}

export default connect(null, {})(MainPageOwner)
