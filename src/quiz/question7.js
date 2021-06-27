import React, { Component } from 'react';

class question7 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            gender:[this.props.match.params.gender],
            age: [this.props.match.params.age],
            skin:[this.props.match.params.skin],
            sensitive: [this.props.match.params.sensitive],
            stress:[this.props.match.params.sensitive],
            concern:[this.props.match.params.concern],
            hurried: 'hurried',
            unhurried:'unhurried'
        };
    }
    render(){
        return(
            <div className="mid"> 
            
            <p className="gender_title">PICK A ROUTINE</p>
            <div className="sensitive_div">
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.stress}/question7/${this.state.concern}/question8/${this.state.hurried}`} ><button className="sensitive_btn">HURRIED </button></a>
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.stress}/question7/${this.state.concern}/question8/${this.state.unhurried}`} ><button className="sensitive_btn">UNHURRIED </button></a>
            </div>
            
            
            
            
            
            </div>



        )
    }
}
export default question7