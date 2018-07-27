import * as React from 'react'

export default class HouseSelectorPresenter extends React.PureComponent {

  render() {
    return (<div>
      <h1>{this.props.owner[this.props.tenant.lastOwnerIDSeen].location}</h1>
      <div className="homeOwnerImage" data-swipable="true" >
        <img onClick={this.props.previousImage} className="Arrow-icons" src={require('../images/Button-Back.png')} alt="" />
        <img id="test" src={this.props.owner[this.props.tenant.lastOwnerIDSeen].url[this.props.state.index]} alt="House" draggable></img>
        <img onClick={this.props.nextImage} className="Arrow-icons" src={require('../images/Button-Next.png')} alt="" />
      </div>
      <div className="homeInformation">
        <ul>
          <li key="size"><b>Size:</b> {this.props.owner[this.props.tenant.lastOwnerIDSeen].size} m2</li>
          <li key="bathroom"><b>Bathrooms:</b> {this.props.owner[this.props.tenant.lastOwnerIDSeen].bathrooms}</li>
          <li key="bedroom"><b>Bedrooms:</b> {this.props.owner[this.props.tenant.lastOwnerIDSeen].bedrooms}</li>
          <li key="price"><b>Price per month:</b> {this.props.owner[this.props.tenant.lastOwnerIDSeen].pricePerMonth} €</li>
        </ul>
      </div>
      <div className="swipeButtons">
        <button id="like" onClick={this.props.likeThisHouse}><b>Like</b></button>
        <button id="think" onClick={this.props.handleClickThink}><b>Think</b></button>
        <button id="dislike" onClick={this.props.handleClickDislike}><b>Dislike</b></button>
      </div>
    </div>
    )
  }
}