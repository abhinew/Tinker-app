import * as React from 'react'

export default class TenantsSelectorPresenter extends React.PureComponent {

    render() {
        return (<div>
            <h1>{this.props.tenant[this.props.owner.likeByTenant[0]].name}</h1>
            
            
            <div className="tenantImage" data-swipable="true" >
                <img src={this.props.tenant[this.props.owner.likeByTenant[0]].url} alt="Face" draggable></img>
                {this.props.owner.like[0] &&
                <div className="match" style={{ display: this.props.state.display }} onClick={this.props.removeMatch}>
                    <img src={require('../images/its-a-match.png')} alt = "match" />
                    <div className="matchImages">
                        <img className="homeOwnerMatchImage" src={this.props.state.imageAddress} alt = "tenant" />
                        <img className="tenantMatchImage" src={this.props.owner.url[0]} alt = "owner" />
                    </div>
                </div>}
            </div>
            <div className="tenantInformation" style={{ display: this.props.state.display2 }}>
                <ul>
                    <li><b>Age:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].age}</li>
                    <li><b>Occupation:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].occupation}</li>
                    <li><b>Company:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].company}</li>
                    <li><b>Income per month:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].incomePerMonth} €</li>
                </ul>
                <div className="swipeButtons">
                    <button id="like" onClick={this.props.handleClickT}>Like</button>
                    <button id="dislike" onClick={this.props.dislikeThisTenant}>Dislike</button>
                </div>
            </div>
        </div>
        )
    }
}