import * as React from 'react'
import { connect } from 'react-redux'
import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'
import { likeHOUSE, dislikeHOUSE, thinkHOUSE } from '../actions/tenants_action'

class MainPageOwner extends React.PureComponent {
  likeThisHouse = () => {
    console.log("like")
  }

  dislikeThisHouse = () => {
    console.log("dislike")
    console.log(this.props.tenant.age)
    this.props.dislikeHOUSE(0, 33)
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
          <img className="Arrow-icons" src={require('../images/Button-Back.png')} alt="" />
          <img src={owners[0].url[0]} alt="House" draggable></img>
          <img className="Arrow-icons" src={require('../images/Button-Next.png')} alt="" />
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
          <button id="like" onClick={this.likeThisHouse}>Like</button>
          <button id="dislike" onClick={this.ThinkThisHouse}>Think</button>
          <button id="dislike" onClick={this.dislikeThisHouse}>Dislike</button>          
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tenant: state.tenant[0], // for the first time this is equal to the initial state defined in ./reducers/newWord
    owner: state.owner[0]
  }
}

export default connect(mapStateToProps, { likeHOUSE, dislikeHOUSE, thinkHOUSE })(MainPageOwner)