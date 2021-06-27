import React, { Component } from 'react';

class question5 extends Component{

    constructor (props) {
        super(props);
        this.state = {
            gender:[this.props.match.params.gender],
            age: [this.props.match.params.age],
            skin:[this.props.match.params.skin],
            sensitive: [this.props.match.params.sensitive],
            always_realxed:'always_realxed',
            sometimes_stressed:'sometimes_stressed',
            always_stressed:'always_stressed'
            
        };
    }
    render(){
        return(

            <div className="mid">

            <p className="gender_title">HOW STRESSED ARE YOU?</p>
            <div className="sensitive_div">
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.always_realxed}`} ><button className="sensitive_btn">NEVER STRESSED </button></a>
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.sometimes_stressed}`} ><button className="sensitive_btn">SOMETIMES STRESSED </button></a>
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.always_stressed}`} ><button className="sensitive_btn">ALWAYS STRESSED </button></a>
            </div>







            </div>

        )
    }
}
export default question5