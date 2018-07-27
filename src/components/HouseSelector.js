import * as React from 'react'
import { connect } from 'react-redux'
// import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'
import { likeHOUSE, dislikeHOUSE, thinkHOUSE } from '../actions/tenants_action'
import HouseSelectorPresenter from './HouseSelectorPresenter'

let i = 0
class HouseSelector extends React.PureComponent {
  state = { index: 0 }
  // urlID = this.props.location.pathname.slice(-1)

  nextImage = () => {
    if (i === this.props.owner[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].url.length - 1) {
      i = 0;
    } else {
      i++
    }
    this.setState({ index: i })
  }

  previousImage = () => {
    if (i === 0) {
      i = this.props.owner[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].url.length - 1
    } else {
      i--
    }
    this.setState({ index: i })
  }

  likeThisHouse = () => {
    console.log("like this house")
    this.props.likeHOUSE(this.props.tenants[this.props.location.pathname.slice(-1)].tenantID, this.props.owner[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].ownerID)
  }

  dislikeThisHouse = () => {
    console.log("dislike this house")
    this.props.dislikeHOUSE(this.props.tenants[this.props.location.pathname.slice(-1)].tenantID, this.props.owner[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].ownerID)
  }

  thinkThisHouse = () => {
    console.log("think about this house")
    this.props.thinkHOUSE(this.props.tenants[this.props.location.pathname.slice(-1)].tenantID, this.props.owner[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].ownerID)
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
      {console.log("hello")}
      {console.log(this.props.location.pathname.slice(-1))}
      <div className="menu">
        <div className="topButtons">
          <Link to='/profile/tenant'>Profile</Link>
          <Link to='/'>Home</Link>
          <Link to='/chat'>Chat</Link>
        </div>
      </div>
      {this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen === (this.props.owner.length) && <div>
        <h1>No more houses is available</h1>
      </div>}

      {this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen !== (this.props.owner.length) && <div>
        <HouseSelectorPresenter owner={this.props.owner} tenant={this.props.tenants[this.props.location.pathname.slice(-1)]}
          nextImage={this.nextImage} previousImage={this.previousImage}
          state={this.state} likeThisHouse={this.likeThisHouse}
          handleClickThink={this.handleClickThink} handleClickDislike={this.handleClickDislike} />
      </div>}


    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tenants: { ...state.tenant }, // for the first time this is equal to the initial state defined in ./reducers/newWord
    owner: state.owner
  }
}

export default connect(mapStateToProps, { likeHOUSE, dislikeHOUSE, thinkHOUSE })(HouseSelector)
