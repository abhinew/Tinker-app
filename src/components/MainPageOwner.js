import * as React from 'react'
import { connect } from 'react-redux'


class MainPageOwner extends React.PureComponent {
    render(){
      return ( <div>
          <h1></h1>
          <div className="image">
              <img/>
          </div>
          </div> 
          )
    }
  }

export default connect(null, {})(MainPageOwner)

        
    
