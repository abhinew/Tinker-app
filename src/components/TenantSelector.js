import * as React from 'react'
import { connect } from 'react-redux'
import { tenants } from '../lib/tenants_lib'
import { owners } from '../lib/owners_lib'
import { Link } from 'react-router-dom'
import { likeTENANT, dislikeTENANT } from '../actions/owners_action'


class TenantSelector extends React.PureComponent {
  state = {
    display: "none"
  }

  likeThisTenant = () => {
    console.log("like this tenant")
    this.props.likeTENANT(this.props.owner.likeByTenant[0], this.props.owner.ownerID)
  }

  dislikeThisTenant = () => {
    console.log("dislike this tenant")
    // console.log(this.props.owner.likeByTenant[0])
    // console.log(this.props.tenant[this.props.owner.likeByTenant[0]].tenantID)
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
        <h1>{this.props.tenant[this.props.owner.likeByTenant[0]].name}</h1>

        <div className="tenantImage" data-swipable="true" >
          <img src={this.props.tenant[this.props.owner.likeByTenant[0]].url} alt="Face" draggable></img>
            <div className="match" style={{display:this.state.display}} onClick={this.removeMatch}>
              <img src={require('../images/its-a-match.png')}/>
                <div className="matchImages">
                  <img className="homeOwnerMatchImage" src={tenants[0].url}/>
                  <img className="tenantMatchImage" src={owners[0].url[0]}/>
                  </div>
            </div>
        </div>
        <div className="tenantInformation">
          <ul>
            <li><b>Age:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].age}</li>
            <li><b>Occupation:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].occupation}</li>
            <li><b>Company:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].company}</li>
            <li><b>Income per month:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].incomePerMonth} €</li>
          </ul>
        </div>
        <div className="swipeButtons">
          <button id="like" onClick={this.handleClickT}>Like</button>
          <button id="dislike" onClick={this.dislikeThisTenant}>Dislike</button>
        </div>
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

