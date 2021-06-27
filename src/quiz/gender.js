import React, { Component } from 'react';
import female from './female.jpg';
import male from './male.jpg';
import female_color from './female_color.jpg';
import male_color from './male_color.jpg';



class Quiz extends Component{
    constructor (props) {
        super(props);
        this.makeMale =this.makeMale.bind(this);
        this.makeFemale=this.makeFemale.bind(this);
        this.state = {
            selectedGender: '',
            srcMale: male,
            srcFemale:female
        };
    }
    makeMale=()=>{
        this.setState({selectedGender: "male",srcMale: male_color,srcFemale: female});


    }
    makeFemale=()=>{
        this.setState({selectedGender: "female",srcFemale: female_color,srcMale:male});

    }

    render(){
        return(
            <div className="mid">
                <p className="gender_title"> PICK A GENDER</p>
                <div className='gender_f'><img className="gender_img" src={this.state.srcFemale}/><img className="hover_gender_f" src={female_color} onClick={this.makeFemale}/>
                <p className="gender_type">Female</p>
                </div>
                <div className='gender_m'><img className="gender_img" src={this.state.srcMale} /><img className="hover_gender_m" src={male_color} onClick={this.makeMale}/>
                <p className="gender_type">Male</p>
                </div>
        <div className="gender_btn_div">
            {/* {this.state.selectedGender} */}
            <a href={`/question2/${this.state.selectedGender}`}><button className="gender_btn" > NEXT </button></a>
           
        
        
        
        
         </div>










            </div>
        )
    }

}
export default Quiz
