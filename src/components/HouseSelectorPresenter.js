import * as React from 'react'
import { connect } from 'react-redux'
// import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'
import { likeHOUSE, dislikeHOUSE, thinkHOUSE } from '../actions/tenants_action'

export default class HouseSelectorPresenter extends React.PureComponent {

  render() {
    return (<div>
        <h1>{this.props.owner[this.props.tenant.lastOwnerIDSeen].Location}</h1>
        <div className="homeOwnerImage" data-swipable="true" >
          <img onClick ={this.props.previousImage} className="Arrow-icons" src={require('../images/Button-Back.png')} alt="" />
          <img id="test" src={this.props.owner[this.props.tenant.lastOwnerIDSeen].url[this.props.state.index]} alt="House" draggable></img>
          <img onClick={this.props.nextImage} className="Arrow-icons" src={require('../images/Button-Next.png')} alt="" />
        </div>
        <div className="homeInformation">
          <ul>
            <li><b>Size:</b> {this.props.owner[this.props.tenant.lastOwnerIDSeen].size} m2</li>
            <li><b>Bathrooms:</b> {this.props.owner[this.props.tenant.lastOwnerIDSeen].bathrooms}</li>
            <li><b>Bedrooms:</b> {this.props.owner[this.props.tenant.lastOwnerIDSeen].bedrooms}</li>
            <li><b>Price per month:</b> {this.props.owner[this.props.tenant.lastOwnerIDSeen].pricePerMonth} €</li>
          </ul>
        </div>
      </div>
    )
  }
}