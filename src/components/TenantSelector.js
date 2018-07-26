import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { likeTENANT, dislikeTENANT } from '../actions/owners_action'
import TenantsSelectorPresenter from './TenantsSelectorPresenter';


class TenantSelector extends React.PureComponent {

  likeThisTenant = () => {
    console.log("like this tenant")
    this.props.likeTENANT(this.props.owner.likeByTenant[0], this.props.owner.ownerID)
  }

  dislikeThisTenant = () => {
    console.log("dislike this tenant")
    this.props.dislikeTENANT(this.props.owner.likeByTenant[0], this.props.owner.ownerID)
  }

  render() {
    return (<div>
      {console.log(this.props.owner.likeByTenant)}
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
        likeThisTenant = {this.likeThisTenant} dislikeThisTenant = {this.dislikeThisTenant} />
        
        {console.log("after tenantpresenter")}

      </div>}
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
