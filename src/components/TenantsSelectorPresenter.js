import * as React from 'react'

export default class TenantsSelectorPresenter extends React.PureComponent {

    render() {
        return (<div>
            <h1>{this.props.tenant[this.props.owner.likeByTenant[0]].name}</h1>

            <div className="tenantImage" data-swipable="true" >
                <img src={this.props.tenant[this.props.owner.likeByTenant[0]].url} alt="Face" draggable></img>
            </div>
            <div className="tenantInformation">
                <ul>
                    <li><b>Age:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].age}</li>
                    <li><b>Occupation:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].occupation}</li>
                    <li><b>Company:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].company}</li>
                    <li><b>Income per month:</b> {this.props.tenant[this.props.owner.likeByTenant[0]].incomePerMonth} €</li>
                </ul>
                <div className="swipeButtons">
                    <button id="like" onClick={this.props.likeThisTenant}>Like</button>
                    <button id="dislike" onClick={this.props.dislikeThisTenant}>Dislike</button>
                </div>
            </div>
        </div>
        )
    }
}