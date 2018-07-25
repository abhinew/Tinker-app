import * as React from 'react'
import { connect } from 'react-redux'
import { tenants } from '../lib/tenants_lib'
import { Link } from 'react-router-dom'
import { likeTENANT, dislikeTENANT } from '../actions/owners_action'


class MainPageTenant extends React.PureComponent {

  likeThisTenant = () => {
    console.log("like this tenant")
    this.props.likeTENANT(this.props.tenant.tenantID, this.props.owner.ownerID)
  }

  dislikeThisTenant = () => {
    console.log("dislike this tenant")
    this.props.dislikeTENANT(this.props.tenant.tenantID, this.props.owner.ownerID)
  }


  render() {
    return (<div>
      <div className="menu">
        <div className="topButtons">
          <Link to='/profile/owner'>Profile</Link>
          <Link to='/'>Home</Link>
          <Link to='/chat'>Chat</Link>
        </div>
      </div>
      <h1>{tenants[1].Location}</h1>

      <div className="tenantImage" data-swipable="true" >
        <img className="Arrow-icons" src={require('../images/Button-Back.png')} alt="" />
        <img src={tenants[0].url} alt="Face" draggable></img>
        <img className="Arrow-icons" src={require('../images/Button-Next.png')} alt="" />
      </div>
      <div className="tenantInformation">
        <ul>
          <li>Name: {tenants[0].name}</li>
          <li>age: {tenants[1].age}</li>
          <li>occupation: {tenants[1].occupation}</li>
          <li>company: {tenants[1].company}</li>
          <li>Income per month: {tenants[1].incomePerMonth}</li>
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
    tenant: state.tenant[2], // for the first time this is equal to the initial state defined in ./reducers/newWord
    owner: state.owner[3]
  }
}

export default connect(mapStateToProps, { likeTENANT, dislikeTENANT })(MainPageTenant)
