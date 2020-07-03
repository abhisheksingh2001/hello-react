import React from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: null };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position =>
                this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message}))
    }

    render() {
        if (this.state.lat!==null && this.state.errorMessage===null) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if (this.state.lat===null && this.state.errorMessage!==null) {
            return <div>Error</div>
        }
        return <div>Loading</div>

    }

}

export default App;


/** ApprovalCard Code

 <div className="ui container comments">

 <ApprovalCard>
 <CommentDetail author="Abhishek" time="10 hours ago" movie="Big Bang Theory"/>
 </ApprovalCard>

 <ApprovalCard>
 <CommentDetail author="Vishal" time="8 hours ago" movie="Money Heist"/>
 </ApprovalCard>

 <ApprovalCard>
 <CommentDetail author="Piyush"  time="5 mins ago" movie="Big Bang Theory"/>
 </ApprovalCard>

 </div>


 */
