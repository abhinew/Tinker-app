import * as React from 'react'
import { connect } from 'react-redux'
import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'
import { findOwnerIndex } from '../lib/owners_lib';


class MainPageOwner extends React.PureComponent {

   findOwnerIndex = (event) => {
     console.log(event);
    let currentImage = event.target.value;
    let currentOwnerIndex = owners.find(currentImage);
    console.log(currentImage);
  }

previousImage() {
    return owners[0].url.length - 1
}


nextImage() {
    
}


  render() {
    console.log("Hiiiii")
    return (<div>
      <div className="menu">
        <div className="topButtons">
          <Link to='/profile/tenant'>Profile</Link>
          <Link to='/'>Home</Link>
          <Link to='/chat'>Chat</Link>
        </div>
        <h1>{owners[1].Location}</h1>
        <div className="homeOwnerImage" data-swipable="true" >
          <img  onClick={this.previousImage} className="Arrow-icons" src={require('../images/Button-Back.png')} />
          <img onClick={this.findOwnerIndex} src={owners[0].url[0]} alt="House" draggable />
          <img onClick={this.nextImage} className="Arrow-icons" src={require('../images/Button-Next.png')} />
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
