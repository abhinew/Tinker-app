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
                            <Link to='/chat'>Logt</Link>
                        </div>
                    </div>
                    <div className="personalInfoOwner">
                    <div className="ownerName">
                    <h2>{this.props.owner[0].name}sdafda</h2>
                    </div>
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