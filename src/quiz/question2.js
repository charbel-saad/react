import React, { Component } from 'react';






class question2 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            age_13:'13',
            age_20:'20',
            age_30:'30',
            age_50:'50',
            gender:[this.props.match.params.gender]
            
        };
    }

    render(){
        return(
            <div className="mid">
                <p className="gender_title">AGE IS JUST A NUMBER</p>
                <p className="age_small_title">(that we need to know )</p>
                <a href={`/question2/${this.state.gender}/question3/${this.state.age_13}`}><button className="age_btn_1">13-19 </button></a>
                <a href={`/question2/${this.state.gender}/question3/${this.state.age_20}`}><button className="age_btn_2">20-29 </button></a>
                <a href={`/question2/${this.state.gender}/question3/${this.state.age_30}`}><button className="age_btn_3">30-49 </button></a>
                <a href={`/question2/${this.state.gender}/question3/${this.state.age_50}`}><button className="age_btn_4">50+   </button></a>





            </div>


        )
    }
}
export default question2