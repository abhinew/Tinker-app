import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class ProfilePageTenantComponent extends React.PureComponent {

    render() {
        return (
                <div>
                      <div className="menu">
                        <div className="topButtons">
                        <Link to={ `/tenants/${this.props.location.pathname.slice(-1)}` }>Back</Link>
                            <Link to='/'>Logout</Link>


                    </div>
                </div>

                <div className="personalInfoOwner">
                    <div className="ownerName">
                        <h2>Hello {this.props.tenant[this.props.location.pathname.slice(-1)].name}!</h2>
                    </div>
                </div>
                <div className="potentialCandidatesOwner">
                    <h2>You've got {this.props.tenant[this.props.location.pathname.slice(-1)].thinking.length} Thinkers!</h2>
                </div>
                <div className="ownerCandidates">
                    {this.props.tenant[this.props.location.pathname.slice(-1)].thinking.map(url => <div className="candidateContainer">
                        <img className="imgOwnerCandidate" src={this.props.owner[url].url[0]} alt="" />
                        <ul>
                            <li><b>Location:</b> {this.props.owner[url].location}</li>
                            <li><b>Price per Month:</b> {this.props.owner[url].pricePerMonth}</li>
                            <li><b>Size:</b> {this.props.owner[url].size}</li>
                            <li><b>Bathrooms:</b> {this.props.owner[url].bathrooms}</li>
                            <li><b>Bedrooms:</b> {this.props.owner[url].bedrooms}</li>
                        </ul>
                    </div>

                    )}
                </div>
                <div className="ownerMatches">
                    <h2>You've got {this.props.tenant[this.props.location.pathname.slice(-1)].like.length} likes!</h2>
                </div>
                <div className="ownerCandidates">
                    {this.props.tenant[this.props.location.pathname.slice(-1)].like.map(url => <div className="candidateContainer">
                        <img className="imgOwnerCandidate" src={this.props.owner[url].url[0]} alt = "" />
                        <ul>
                            <li><b>Location:</b> {this.props.owner[url].location}</li>
                            <li><b>Price per Month:</b> {this.props.owner[url].pricePerMonth}</li>
                            <li><b>Size:</b> {this.props.owner[url].size}</li>
                            <li><b>Bathrooms:</b> {this.props.owner[url].bathrooms}</li>
                            <li><b>Bedrooms:</b> {this.props.owner[url].bedrooms}</li>
                        </ul>
                    </div>

                    )}
                </div>
                <div className="propertyButtons">
                    <button className="addPropertyButton"><b>Adjust Profile</b></button>
                    <button className="deletePropertyButton"><b>Delete Profile</b></button>
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

export default connect(mapStateToProps)(ProfilePageTenantComponent) 