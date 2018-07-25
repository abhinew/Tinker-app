import * as React from 'react'
import { connect } from 'react-redux'
// import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'
import { likeHOUSE, dislikeHOUSE, thinkHOUSE } from '../actions/tenants_action'

let i = 0
class MainPageOwner extends React.PureComponent {
  state = { index: 0 }

  nextImage= () => {
    console.log(this.props.tenant.lastOwnerIDSeen)
    if (i === this.props.owner[this.props.tenant.lastOwnerIDSeen].url.length -1 ){
      i = 0;
    } else {
      i++
    }
    this.setState({index: i})
  }

  previousImage= () => {
    if (i === 0){
    i = this.props.owner[this.props.tenant.lastOwnerIDSeen].url.length -1 
  } else {
    i--
  }
    this.setState({index: i})
  }
  
  likeThisHouse = () => {
    console.log("like this house")
    this.props.likeHOUSE(this.props.tenant.tenantID, this.props.owner.ownerID)
  }

  dislikeThisHouse = () => {
    console.log("dislike this house")
    this.props.dislikeHOUSE(this.props.tenant.tenantID, this.props.owner.ownerID)
  }

  thinkThisHouse = () => {
    console.log("think about this house")
    this.props.thinkHOUSE(this.props.tenant.tenantID, this.props.owner.ownerID)
  }

  nextHouse = () => {
    if (i === this.props.owner.length -1 ){
      i = 0;
    } else {
      i++
    }
    this.setState({index: i})
  }
  
  handleClickThink = () => {
    this.thinkThisHouse()
    this.nextImage()
  }

  handleClickDislike = () => {
    this.dislikeThisHouse()
    this.nextImage()
  }

  

  render() {
    return (<div>
      <div className="menu">
        <div className="topButtons">
          <Link to='/profile/tenant'>Profile</Link>
          <Link to='/'>Home</Link>
          <Link to='/chat'>Chat</Link>
        </div>
        <h1>{this.props.owner[this.props.tenant.lastOwnerIDSeen].Location}</h1>
        <div className="homeOwnerImage" data-swipable="true" >
          <img onClick ={this.previousImage} className="Arrow-icons" src={require('../images/Button-Back.png')} alt="" />
          <img id="test" src={this.props.owner[this.props.tenant.lastOwnerIDSeen].url[this.state.index]} alt="House" draggable></img>
          <img onClick={this.nextImage} className="Arrow-icons" src={require('../images/Button-Next.png')} alt="" />
        </div>
        <div className="homeInformation">
          <ul>
            <li>Size: {this.props.owner[this.props.tenant.lastOwnerIDSeen].size} m2</li>
            <li>Bathrooms: {this.props.owner[this.props.tenant.lastOwnerIDSeen].bathrooms}</li>
            <li>Bedrooms: {this.props.owner[this.props.tenant.lastOwnerIDSeen].bedrooms}</li>
            <li>Price per month: {this.props.owner[this.props.tenant.lastOwnerIDSeen].pricePerMonth}</li>
          </ul>
        </div>
        <div className="swipeButtons">
          <button id="like" onClick={this.likeThisHouse}>Like</button>
          <button id="think" onClick={this.handleClickThink}>Think</button>
          <button id="dislike" onClick={this.handleClickDislike}>Dislike</button>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tenant: state.tenant[0], // for the first time this is equal to the initial state defined in ./reducers/newWord
    owner: state.owner
  }
}

export default connect(mapStateToProps, { likeHOUSE, dislikeHOUSE, thinkHOUSE })(MainPageOwner)
