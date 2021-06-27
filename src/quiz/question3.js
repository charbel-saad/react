import React, { Component } from 'react';
import female_face from './female_face.jpg'
import male_normal from './male_normal.jpg'
import color_normal from './color_normal.jpg'
import male_normal_color from './male_normal_color.jpg'

import female_combination from './female_combination.jpg'
import male_combination from './male_combination.jpg'
import female_comb_color from './female_comb_color.jpg'
import female_dry from './female_dry.jpg'
import male_dry from './male_dry.jpg'
import female_dry_color from './female_dry_color.jpg'
import female_oily from './female_oily.jpg'
import male_oily from './male_oily.jpg'
import female_oily_color from './female_oily_color.jpg'




class question3 extends Component{

    constructor (props) {
        super(props);
        this.state = {
            gender:[this.props.match.params.gender],
            age: [this.props.match.params.age],
            skin:'',

            srcFemale:female_face,
            srcFemaleDry:female_face,
            srcFemaleOily:female_face,
            srcFemaleComb:female_face,


            srcMale:male_normal,
            srcMaleDry:male_normal,
            srcMaleOily:male_normal,
            srcMaleComb:male_normal,
            
        };
    }   
    skinNormal=()=>{
        this.setState({skin: "normal",srcFemale:color_normal,
        srcFemaleDry:female_face,
        srcFemaleOily:female_face,
        srcFemaleComb:female_face,
});
    }
    skinOily=()=>{
        this.setState({skin: "oily",srcFemale:female_face,
        srcFemaleDry:female_face,
        srcFemaleOily:female_oily_color,
        srcFemaleComb:female_face,
});
    }
    skinDry=()=>{
        this.setState({skin: "dry",srcFemale:female_face,
        srcFemaleDry:female_dry_color,
        srcFemaleOily:female_face,
        srcFemaleComb:female_face,
});
    }
    skinComb=()=>{
        this.setState({skin: "combination",srcFemale:female_face,
        srcFemaleDry:female_face,
        srcFemaleOily:female_face,
        srcFemaleComb:female_comb_color,
});
    }



    maleNormal=()=>{
        this.setState({skin: "normal",srcMale:male_normal_color,srcMaleDry:male_normal,
        srcMaleOily:male_normal,
        srcMaleComb:male_normal,});
    }
    maleOily=()=>{
        this.setState({skin: "oily",srcMaleOily:male_oily,srcMale:male_normal,srcMaleDry:male_normal,srcMaleComb:male_normal,});
    }
    maleDry=()=>{
        this.setState({skin: "dry",srcMale:male_normal,
        srcMaleDry:male_dry,
        srcMaleOily:male_normal,
        srcMaleComb:male_normal,});
    }
    maleComb=()=>{
        this.setState({skin: "combination",srcMale:male_normal,
        srcMaleDry:male_normal,
        srcMaleOily:male_normal,
        srcMaleComb:male_combination,});
    }


    
    render(){
        if (this.state.gender =='female') {
        
        
        return(
            <div className="mid">
                <p className="gender_title">PICK YOUR SKIN TYPE</p>
                
                <div className='skin_div'><img className="skin_type" src={this.state.srcFemale} /><img className="hover_skin" src={color_normal} onClick={this.skinNormal}/>
                <p className="skin_title">Normal</p>
                </div>
                <div className='skin_div'><img className="skin_type" src={this.state.srcFemaleOily} /><img className="hover_skin" src={female_oily_color} onClick={this.skinOily}/>
                <p className="skin_title">Oily</p>
                </div>
                <div className='skin_div'><img className="skin_type" src={this.state.srcFemaleDry} /><img className="hover_skin" src={female_dry_color} onClick={this.skinDry}/>
                <p className="skin_title">Dry</p>
                </div>
                <div className='skin_div'><img className="skin_type" src={this.state.srcFemaleComb} /><img className="hover_skin" src={female_comb_color} onClick={this.skinComb}/>
                <p className="skin_title">Combination</p>
                </div>
                <div className="skin_btn_div">
            {/* {this.state.selectedGender} */}
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}`}><button className="skin_btn" > NEXT </button></a>
                </div>





            </div>



        )
        }
        else{
            return(
                <div className="mid">
                <p className="gender_title">PICK YOUR SKIN TYPE</p>
                
                <div className='skin_div'><img className="skin_type" src={this.state.srcMale} /><img className="hover_skin" src={male_normal_color} onClick={this.maleNormal}/>
                <p className="skin_title">Normal</p>
                </div>
                <div className='skin_div'><img className="skin_type" src={this.state.srcMaleOily} /><img className="hover_skin" src={male_oily} onClick={this.maleOily}/>
                <p className="skin_title">Oily</p>
                </div>
                <div className='skin_div'><img className="skin_type" src={this.state.srcMaleDry} /><img className="hover_skin" src={male_dry} onClick={this.maleDry}/>
                <p className="skin_title">Dry</p>
                </div>
                <div className='skin_div'><img className="skin_type" src={this.state.srcMaleComb} /><img className="hover_skin" src={male_combination} onClick={this.maleComb}/>
                <p className="skin_title">Combination</p>
                </div>
                <div className="skin_btn_div">
            {/* {this.state.selectedGender} */}
            <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}`}><button className="skin_btn" > NEXT </button></a>
                </div>





            </div>
            )
        }
    }
}
export default question3