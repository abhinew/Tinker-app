import * as React from 'react'
import { connect } from 'react-redux'
// import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'
import { likeHOUSE, dislikeHOUSE, thinkHOUSE } from '../actions/tenants_action'
import HouseSelectorPresenter from './HouseSelectorPresenter'

let i = 0
class HouseSelector extends React.PureComponent {
  state = { index: 0 }

  nextImage = () => {
    if (i === this.props.owner[this.props.tenant.lastOwnerIDSeen].url.length - 1) {
      i = 0;
    } else {
      i++
    }
    this.setState({ index: i })
  }

  previousImage = () => {
    if (i === 0) {
      i = this.props.owner[this.props.tenant.lastOwnerIDSeen].url.length - 1
    } else {
      i--
    }
    this.setState({ index: i })
  }

  likeThisHouse = () => {
    console.log("like this house")
    this.props.likeHOUSE(this.props.tenant.tenantID, this.props.owner[this.props.tenant.lastOwnerIDSeen].ownerID)
  }

  dislikeThisHouse = () => {
    console.log("dislike this house")
    this.props.dislikeHOUSE(this.props.tenant.tenantID, this.props.owner[this.props.tenant.lastOwnerIDSeen].ownerID)
  }

  thinkThisHouse = () => {
    console.log("think about this house")
    this.props.thinkHOUSE(this.props.tenant.tenantID, this.props.owner[this.props.tenant.lastOwnerIDSeen].ownerID)
  }

  nextHouse = () => {
    if (i === this.props.owner.length - 1) {
      i = 0;
    } else {
      i++
    }
    this.setState({ index: i })
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
      </div>

      <HouseSelectorPresenter owner={this.props.owner} tenant={this.props.tenant}
      nextImage = {this.nextImage} previousImage = {this.previousImage} 
      state = {this.state} />
      
      <div className="swipeButtons">
        <button id="like" onClick={this.likeThisHouse}>Like</button>
        <button id="think" onClick={this.handleClickThink}>Think</button>
        <button id="dislike" onClick={this.handleClickDislike}>Dislike</button>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tenant: { ...state.tenant[2]}, // for the first time this is equal to the initial state defined in ./reducers/newWord
    owner: state.owner
  }
}

export default connect(mapStateToProps, { likeHOUSE, dislikeHOUSE, thinkHOUSE })(HouseSelector)
