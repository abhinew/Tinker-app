import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { likeTENANT, dislikeTENANT } from '../actions/owners_action'
import TenantsSelectorPresenter from './TenantsSelectorPresenter';

class TenantSelector extends React.Component {
  
  state = {
    display: "none",
    display2: "",
    imageAddress: ""
  }

  likeThisTenant = () => {
    console.log("like this tenant")
    this.setState({imageAddress: this.props.tenant[this.props.owner.likeByTenant[0]].url})
    this.props.likeTENANT(this.props.owner.likeByTenant[0], this.props.owner.ownerID)
  }

  dislikeThisTenant = () => {
    console.log("dislike this tenant")
    this.props.dislikeTENANT(this.props.owner.likeByTenant[0], this.props.owner.ownerID)
  }

  handleClickT = () => {
    this.likeThisTenant()
    this.showMatch()
  }

  showMatch = () => {
    this.setState({
      display: "",
      display2: "none"
    })
  }

  removeMatch = () => {
    this.setState({
      display: "none",
      display2: ""
    })
  }

  render() {
    return (<div>
      <div className="menu">
        <div className="topButtons">
          <Link to='/profile/owner'>Owner Profile</Link>
          <Link to='/'>Home</Link>
          <Link to='/chat'>Chat</Link>
        </div>
      </div>

      {!this.props.owner.likeByTenant[0] && <div>
        <h1>No Tenant is found so far</h1>
      </div>}

      {this.props.owner.likeByTenant[0] && <div>
        <TenantsSelectorPresenter owner={this.props.owner} tenant={this.props.tenant}
          handleClickT={this.handleClickT} dislikeThisTenant={this.dislikeThisTenant}
          removeMatch={this.removeMatch} state={this.state} imageAddress = {this.img} />
      </div>}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tenant: state.tenant, // for the first time this is equal to the initial state defined in ./reducers/newWord
    owner: { ...state.owner[1] }
  }
}

export default connect(mapStateToProps, { likeTENANT, dislikeTENANT })(TenantSelector)

