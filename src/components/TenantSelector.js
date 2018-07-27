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
    this.setState({imageAddress: this.props.tenants[this.props.owners[this.props.location.pathname.slice(-1)].likeByTenant[0]].url})
    this.props.likeTENANT(this.props.owners[this.props.location.pathname.slice(-1)].likeByTenant[0], this.props.owners[this.props.location.pathname.slice(-1)].ownerID)
  }

  dislikeThisTenant = () => {
    console.log("dislike this tenant")
    this.props.dislikeTENANT(this.props.owners[this.props.location.pathname.slice(-1)].likeByTenant[0], this.props.owners[this.props.location.pathname.slice(-1)].ownerID)
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
          <Link to={ `/profile/owners/${this.props.location.pathname.slice(-1)}` }>Owner Profile</Link>
          <Link to='/'>Home</Link>
          <Link to='/chat'>Chat</Link>
        </div>
      </div>

      {!this.props.owners[this.props.location.pathname.slice(-1)].likeByTenant[0] && <div>
        <h1>No Tenant is found so far</h1>
      </div>}

      {this.props.owners[this.props.location.pathname.slice(-1)].likeByTenant[0] && <div>
        <TenantsSelectorPresenter owner={this.props.owners[this.props.location.pathname.slice(-1)]} tenants={this.props.tenants}
          handleClickT={this.handleClickT} dislikeThisTenant={this.dislikeThisTenant}
          removeMatch={this.removeMatch} state={this.state} imageAddress = {this.img} />
      </div>}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tenants: { ...state.tenant }, // for the first time this is equal to the initial state defined in ./reducers/newWord
    owners: { ...state.owner }
  }
}

export default connect(mapStateToProps, { likeTENANT, dislikeTENANT })(TenantSelector)

