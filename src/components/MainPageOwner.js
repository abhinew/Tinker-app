import * as React from 'react'
import { connect } from 'react-redux'
import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'
import { likeHOUSE, dislikeHOUSE, thinkHOUSE } from '../actions/tenants_action'

let i = 0
class MainPageOwner extends React.PureComponent {
  state = { index: 0 }

  nextImage= () => {
    if (i === this.props.owner.url.length -1 ){
      i = 0;
    } else {
      i++
    }
    this.setState({index: i})
  }

  previousImage= () => {
    if (i == 0){
    i = this.props.owner.url.length -1 
  } else {
    i--
  }
    this.setState({index: i})
  }
  
  likeThisHouse = () => {
    console.log("like")
  }

  dislikeThisHouse = () => {
    console.log(this.props.tenant.age)
    this.props.dislikeHOUSE(0, 33)
  }

  nextHouse = () => {
    if (i === this.props.owner.length -1 ){
      i = 0;
    } else {
      i++
    }
    this.setState({index: i})
  }
  
  handleClick = () => {
    this.likeThisHouse()
  }

  

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
          <img onClick ={this.previousImage} className="Arrow-icons" src={require('../images/Button-Back.png')} alt="" />
          <img id="test" src={this.props.owner.url[this.state.index]} alt="House" draggable></img>
          <img onClick={this.nextImage} className="Arrow-icons" src={require('../images/Button-Next.png')} alt="" />
        </div>
        <div className="homeInformation">
          <ul>
            <li>Size: {this.props.owner.size} m2</li>
            <li>Bathrooms: {this.props.owner.bathrooms}</li>
            <li>Bedrooms: {this.props.owner.bedrooms}</li>
            <li>Price per month: {this.props.owner.pricePerMonth}</li>
          </ul>
        </div>
        <div className="swipeButtons">
          <button id="like" onClick={this.handleClick}>Like</button>
          <button id="maybe" onClick={this.ThinkThisHouse}>Think</button>
          <button id="dislike" onClick={this.dislikeThisHouse}>Dislike</button>          
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tenant: state.tenant[0], 
    owner: state.owner[0]
  }
}

export default connect(mapStateToProps, { likeHOUSE, dislikeHOUSE, thinkHOUSE })(MainPageOwner)
