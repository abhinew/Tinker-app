import * as React from 'react'
import { connect } from 'react-redux'
// import { tenants } from '../lib/tenants_lib'
import { Link } from 'react-router-dom'
import { likeTENANT, dislikeTENANT } from '../actions/owners_action'


class TenantSelector extends React.PureComponent {

  likeThisTenant = () => {
    console.log("like this tenant")
    this.props.likeTENANT(this.props.tenant[this.props.owner.lastTenantIDSeen].tenantID, this.props.owner.ownerID)
  }

  dislikeThisTenant = () => {
    console.log("dislike this tenant")
    this.props.dislikeTENANT(this.props.tenant[this.props.owner.lastTenantIDSeen].tenantID, this.props.owner.ownerID)
  }

  render() {
    return (<div>
      {console.log(this.props.owner.lastTenantIDSeen)}
      <div className="menu">
        <div className="topButtons">
          <Link to='/profile/owner'>Owner</Link>
          <Link to='/'>Home</Link>
          <Link to='/chat'>Chat</Link>
        </div>
      </div>
      <h1>{this.props.tenant[this.props.owner.lastTenantIDSeen].name}</h1>

      <div className="tenantImage" data-swipable="true" >
        <img src={this.props.tenant[this.props.owner.lastTenantIDSeen].url} alt="Face" draggable></img>
      </div>
      <div className="tenantInformation">
        <ul>
          <li><b>Age:</b> {this.props.tenant[this.props.owner.lastTenantIDSeen].age}</li>
          <li><b>Occupation:</b> {this.props.tenant[this.props.owner.lastTenantIDSeen].occupation}</li>
          <li><b>Company:</b> {this.props.tenant[this.props.owner.lastTenantIDSeen].company}</li>
          <li><b>Income per month:</b> {this.props.tenant[this.props.owner.lastTenantIDSeen].incomePerMonth} €</li>
        </ul>
      </div>
      <div className="swipeButtons">
        <button id="like" onClick={this.likeThisTenant}>Like</button>
        <button id="dislike" onClick={this.dislikeThisTenant}>Dislike</button>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tenant: state.tenant, // for the first time this is equal to the initial state defined in ./reducers/newWord
    owner: state.owner[1]
  }
}

export default connect(mapStateToProps, { likeTENANT, dislikeTENANT })(TenantSelector)
