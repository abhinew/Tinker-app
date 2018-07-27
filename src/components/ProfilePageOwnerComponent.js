import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ProfilePageOwnerComponent extends React.PureComponent {

    render() {
        console.log(this.props.tenant)
        return (
                <div>
                      <div className="menu">
                        <div className="topButtons">
                            <Link to={"/owners/"}>Back</Link>
                            <Link to='/chat'>Logout</Link>
                        </div>
                    </div>

                    <div className="personalInfoOwner">
                        <div className="ownerName">
                            <h2>{this.props.owner[0].name}</h2>
                            <img src />
                        </div>
                    </div>
                    <div className="potentialCandidatesOwner">
                        <h2>You've got {this.props.owner[1].likeByTenant.length} Potential Candidates!</h2>
                    </div>
                    <div className="ownerCandidates">
                        <div className="candidateContainer">
                            <img className="imgOwnerCandidate" src={this.props.tenant[this.props.owner[1].likeByTenant[1]].url}/>
                            <ul>
                                <li><b>Name:</b> {this.props.tenant[this.props.owner[1].likeByTenant[1]].name}</li>
                                <li><b>Age:</b> {this.props.tenant[this.props.owner[1].likeByTenant[1]].age}</li>
                                <li><b>Occupation:</b> {this.props.tenant[this.props.owner[1].likeByTenant[1]].occupation}</li>
                                <li><b>Company:</b> {this.props.tenant[this.props.owner[1].likeByTenant[1]].company}</li>
                                <li><b>Income per month:</b> {this.props.tenant[this.props.owner[1].likeByTenant[1]].incomePerMonth} €</li>
                            </ul>
                         </div>
                    </div>
                    <div className="ownerMatches">
                         <h2>You've got {this.props.owner[1].like.length} matches!</h2>
                    </div>
                    <div className="propertyButtons">
                        <button className="addPropertyButton">Add Property</button>
                        <button className="addPropertyButton">Adjust Property</button>
                        <button className="deletePropertyButton">Delete Property</button>
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

export default connect(mapStateToProps) (ProfilePageOwnerComponent) 