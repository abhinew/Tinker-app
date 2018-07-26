import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { likeTENANT, dislikeTENANT } from '../actions/owners_action'
import TenantsSelectorPresenter from './TenantsSelectorPresenter';


class TenantSelector extends React.Component {
  state = {
    display: "none",
    img: this.props.tenant[this.props.owner.likeByTenant[0]].url
  }

  likeThisTenant = () => {
    console.log("like this tenant")
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
      display: ""
    })
  }

  removeMatch = () => {
    this.setState({
      display: "none"
    })
  }

  render() {
    return (<div>

      {/* {this.props.owner.like[this.props.owner.like.length - 1] && this.setState({
        img: this.props.tenant[this.props.owner.like[this.props.owner.like.length - 1]].url
      })} */}

      <div className="menu">
        <div className="topButtons">
          <Link to='/profile/owner'>Owner</Link>
          <Link to='/'>Home</Link>
          <Link to='/chat'>Chat</Link>
        </div>
      </div>

      {!this.props.owner.likeByTenant[0] && <div>
        <h1>No Tenant is found so far</h1>
      </div>}

      {this.props.owner.likeByTenant[0] && <div>
        <TenantsSelectorPresenter owner={this.props.owner} tenant={this.props.tenant}
          likeThisTenant={this.handleClickT} dislikeThisTenant={this.dislikeThisTenant}
          removeMatch={this.removeMatch} state={this.state} />
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

