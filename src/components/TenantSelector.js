import * as React from 'react'
import { connect } from 'react-redux'
import { tenants } from '../lib/tenants_lib'
import { owners } from '../lib/owners_lib'
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
        <img className="testing" src={tenants[0].url} alt="Face" draggable></img>
        <div className="match">
        <img src={require('../images/its-a-match.png')}/>
          <div className="matchImages">
            <img className="homeOwnerMatchImage" src={tenants[0].url}/>
            <img className="tenantMatchImage" src={owners[0].url[0]}/> 
            </div>
      </div>
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
    tenant: state.tenant, // for the first time this is equal to the initial state defined in ./reducers/newWord
    owner: state.owner
  }
}

export default connect(mapStateToProps, { likeTENANT, dislikeTENANT })(MainPageTenant)
