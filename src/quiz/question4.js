import React, { Component } from 'react';



class question4 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            gender:[this.props.match.params.gender],
            age: [this.props.match.params.age],
            skin:[this.props.match.params.skin],
            no: 'no',
            yes: 'yes'
            
        };
    }


render(){
    return(
        <div className="mid">
            <p className="gender_title">IS YOUR SKIN SENSITIVE?</p>
            <div className="sensitive_div">
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.yes}`} ><button className="sensitive_btn">YES </button></a>
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.no}`} ><button className="sensitive_btn">NO </button></a>
            </div>









        </div>
    )
}
}
export default question4