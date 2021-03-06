import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ProfilePageOwnerComponent extends React.PureComponent {

    render() {
        return (

            <div>
                <div className="menu">
                    <div className="topButtons">
                        <Link to={`/owners/${this.props.location.pathname.slice(-1)}`}>Back</Link>
                        <Link to='/'>Logout</Link>


                    </div>
                </div>

                <div className="personalInfoOwner">
                    <div className="ownerName">
                        <h2>{this.props.owner[this.props.location.pathname.slice(-1)].name}</h2>
                    </div>
                </div>
                <div className="potentialCandidatesOwner">
                    <h2>You've got {this.props.owner[this.props.location.pathname.slice(-1)].likeByTenant.length} Potential Candidates!</h2>
                </div>
                <div className="ownerCandidates">
                    {this.props.owner[this.props.location.pathname.slice(-1)].likeByTenant.map(url => <div className="candidateContainer">
                        <img className="imgOwnerCandidate" src={this.props.tenant[url].url} alt="" />
                        <ul>
                            <li><b>Name:</b> {this.props.tenant[url].name}</li>
                            <li><b>Age:</b> {this.props.tenant[url].age}</li>
                            <li><b>Occupation:</b> {this.props.tenant[url].occupation}</li>
                            <li><b>Company:</b> {this.props.tenant[url].company}</li>
                            <li><b>Income per month:</b> {this.props.tenant[url].incomePerMonth} €</li>
                        </ul>

                    </div>
                    )}
                </div>
                <div className="ownerMatches">
                    <h2>You've got {this.props.owner[this.props.location.pathname.slice(-1)].like.length} matches!</h2>
                </div>
                <div className="ownerCandidates">
                    {this.props.owner[this.props.location.pathname.slice(-1)].like.map(url => <div className="candidateContainer">
                        <img className="imgOwnerCandidate" src={this.props.tenant[url].url} alt="" />
                        <ul>
                            <li><b>Name:</b> {this.props.tenant[url].name}</li>
                            <li><b>Age:</b> {this.props.tenant[url].age}</li>
                            <li><b>Occupation:</b> {this.props.tenant[url].occupation}</li>
                            <li><b>Company:</b> {this.props.tenant[url].company}</li>
                            <li><b>Income per month:</b> {this.props.tenant[url].incomePerMonth} €</li>
                        </ul>
                        <a href="https://api.whatsapp.com/send?phone=15551234567"><img className="whatsApp" src="https://qph.fs.quoracdn.net/main-qimg-ab05a3e6a691977d72b4e0c6c3c0edb6" alt="" /></a>
                    </div>

                    )}
                </div>
                <div className="propertyButtons">
                    <button className="addPropertyButton"><b>Add Property</b></button>
                    <button className="addPropertyButton"><b>Adjust Property</b></button>
                    <button className="deletePropertyButton"><b>Delete Property</b></button>
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

export default connect(mapStateToProps)(ProfilePageOwnerComponent) 