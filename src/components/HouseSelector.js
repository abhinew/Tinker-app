import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { likeHOUSE, dislikeHOUSE, thinkHOUSE } from '../actions/tenants_action'
import HouseSelectorPresenter from './HouseSelectorPresenter'

let i = 0
class HouseSelector extends React.PureComponent {
  state = { index: 0 }
  // urlID = this.props.location.pathname.slice(-1)

  nextImage = () => {
    let urlLength = this.props.owners[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].url.length
    i++
    this.setState({ index: Math.abs(i % urlLength) })
  }

  previousImage = () => {
    let urlLength = this.props.owners[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].url.length
    i--
    this.setState({ index: Math.abs(i % urlLength) })
  }

  likeThisHouse = () => {
    console.log("like this house")
    this.props.likeHOUSE(this.props.tenants[this.props.location.pathname.slice(-1)].tenantID, this.props.owners[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].ownerID)
  }

  dislikeThisHouse = () => {
    console.log("dislike this house")
    this.props.dislikeHOUSE(this.props.tenants[this.props.location.pathname.slice(-1)].tenantID, this.props.owners[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].ownerID)
  }

  thinkThisHouse = () => {
    console.log("think about this house")
    this.props.thinkHOUSE(this.props.tenants[this.props.location.pathname.slice(-1)].tenantID, this.props.owners[this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen].ownerID)
  }

  nextHouse = () => {
    if (i === this.props.owners.length - 1) {
      i = 0;
    } else {
      i++
    }
    this.setState({ index: i })
  }

  handleClickThink = () => {
    this.thinkThisHouse()
    // this.nextImage()
  }

  handleClickDislike = () => {
    this.dislikeThisHouse()
    // this.nextImage()
  }

  render() {
    return (<div>
      {console.log("lastOwnerID", this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen)}
      {console.log("owners.length", this.props.owners.length)}
      <div className="menu">
        <div className="topButtons">
          <Link to={ `/profile/tenants/${this.props.location.pathname.slice(-1)}` }>Profile</Link>
          <Link to='/'>Home</Link>
          <Link to={`/tenants/${this.props.location.pathname.slice(-1)}`}>Chat</Link>
        </div>
      </div>
      {this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen === (this.props.owners.length) && <div className="noMoreHouses">
        <h1>No more houses is available!</h1>
      </div>}

      {this.props.tenants[this.props.location.pathname.slice(-1)].lastOwnerIDSeen !== (this.props.owners.length) && <div>
        <HouseSelectorPresenter owner={this.props.owners} tenant={this.props.tenants[this.props.location.pathname.slice(-1)]}
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
    owners: [ ...state.owner ]
  }
}

export default connect(mapStateToProps, { likeHOUSE, dislikeHOUSE, thinkHOUSE })(HouseSelector)
