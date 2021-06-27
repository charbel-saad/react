import React, { Component } from 'react';

class question8 extends Component{
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
            
            <p className="gender_title">PICK THE ENVRIONMENT YOU LIVE IN</p>
            <div className="sensitive_div">
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.stress}/question7/${this.state.concern}/question8/${this.state.hurried}`} ><button className="sensitive_btn">HOT AND HUMID </button></a>
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.stress}/question7/${this.state.concern}/question8/${this.state.unhurried}`} ><button className="sensitive_btn">COLD AND WINDY  </button></a>
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.stress}/question7/${this.state.concern}/question8/${this.state.unhurried}`} ><button className="sensitive_btn">URBAN AND CITY </button></a>
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.stress}/question7/${this.state.concern}/question8/${this.state.unhurried}`} ><button className="sensitive_btn">FRESH AND GREENERY </button></a>
            </div>
            
            
            
            
            
            </div>



        )
    }
}
export default question8