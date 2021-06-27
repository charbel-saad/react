import React, { Component } from 'react';
import female_concern from './female_concern.jpg'
import male_concern from './male_concern.jpg'
import female_fineLines from './female_fineLines.jpg'
import male_wrinkless from './male_wrinkless.jpg'
import female_pigmentation from './female_pigmentation.jpg'
import male_pigmentation from './male_pigmentation.jpg'
import female_pores from './female_pores.jpg'
import male_pores from './male_pores.jpg'
import female_breakout from './female_breakout.jpg'
import male_breakouts from './male_breakouts.jpg'
import female_dullness from './female_dullness.jpg'

class question6 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            gender:[this.props.match.params.gender],
            age: [this.props.match.params.age],
            skin:[this.props.match.params.skin],
            sensitive: [this.props.match.params.sensitive],
            stress:[this.props.match.params.sensitive],
            concern:'',
            src: female_concern,
            srcMale: male_concern ,
            // src: [female_concern,female_fineLines,female_pigmentation,female_pores,female_breakout,female_dullness]

        };
    }
        // changeImage=(e)=>{
        //     this.setState({src:[e], concern:"wrinkless"});
        // }
    lineWrinkless=()=>{
        this.setState({src:female_fineLines, concern:"wrinkless"});
        var element = document.getElementById("concern_id");
        var element2 = document.getElementById("concern_id2");
        var element3 = document.getElementById("concern_id3");
        var element4 = document.getElementById("concern_id4");
        var element5 = document.getElementById("concern_id5");

            element2.classList.remove("concern_btn_clicked");
            element3.classList.remove("concern_btn_clicked");
            element4.classList.remove("concern_btn_clicked");
            element5.classList.remove("concern_btn_clicked");
            element.classList.add("concern_btn_clicked");

    }
    femalPigmentation=()=>{
        this.setState({src:female_pigmentation ,concern:"pigmentation"});
        var element = document.getElementById("concern_id2");
        var element2 = document.getElementById("concern_id");
        var element3 = document.getElementById("concern_id3");
        var element4 = document.getElementById("concern_id4");
        var element5 = document.getElementById("concern_id5");

            element2.classList.remove("concern_btn_clicked");
            element3.classList.remove("concern_btn_clicked");
            element4.classList.remove("concern_btn_clicked");
            element5.classList.remove("concern_btn_clicked");
        element.classList.add("concern_btn_clicked");
    }
    femalePores=()=>{
        this.setState({src:female_pores, concern:"pores"});
        var element = document.getElementById("concern_id3");
        var element2 = document.getElementById("concern_id");
        var element3 = document.getElementById("concern_id2");
        var element4 = document.getElementById("concern_id4");
        var element5 = document.getElementById("concern_id5");

            element2.classList.remove("concern_btn_clicked");
            element3.classList.remove("concern_btn_clicked");
            element4.classList.remove("concern_btn_clicked");
            element5.classList.remove("concern_btn_clicked");
        element.classList.add("concern_btn_clicked");
    }
    femaleBreakout=()=>{
        this.setState({src:female_breakout, concern:"breakouts"});
        var element = document.getElementById("concern_id4");
        var element2 = document.getElementById("concern_id");
        var element3 = document.getElementById("concern_id3");
        var element4 = document.getElementById("concern_id2");
        var element5 = document.getElementById("concern_id5");

            element2.classList.remove("concern_btn_clicked");
            element3.classList.remove("concern_btn_clicked");
            element4.classList.remove("concern_btn_clicked");
            element5.classList.remove("concern_btn_clicked");
        element.classList.add("concern_btn_clicked");
    }
    femaleDullness=()=>{
        this.setState({src:female_dullness, concern:"dullness"});
        var element = document.getElementById("concern_id5");
        var element2 = document.getElementById("concern_id");
        var element3 = document.getElementById("concern_id3");
        var element4 = document.getElementById("concern_id2");
        var element5 = document.getElementById("concern_id4");

            element2.classList.remove("concern_btn_clicked");
            element3.classList.remove("concern_btn_clicked");
            element4.classList.remove("concern_btn_clicked");
            element5.classList.remove("concern_btn_clicked");
        element.classList.add("concern_btn_clicked");
    }
    



    maleWrinkless=()=>{
        this.setState({srcMale:male_wrinkless, concern:"wrinkless"});
        var element = document.getElementById("concern_id");
        var element2 = document.getElementById("concern_id2");
        var element3 = document.getElementById("concern_id3");
        var element4 = document.getElementById("concern_id4");
        var element5 = document.getElementById("concern_id5");

            element2.classList.remove("concern_btn_clicked");
            element3.classList.remove("concern_btn_clicked");
            element4.classList.remove("concern_btn_clicked");
            element5.classList.remove("concern_btn_clicked");
            element.classList.add("concern_btn_clicked");

    }
    malePigmentation=()=>{
        this.setState({srcMale:male_pigmentation ,concern:"pigmentation"});
        var element = document.getElementById("concern_id2");
        var element2 = document.getElementById("concern_id");
        var element3 = document.getElementById("concern_id3");
        var element4 = document.getElementById("concern_id4");
        var element5 = document.getElementById("concern_id5");

            element2.classList.remove("concern_btn_clicked");
            element3.classList.remove("concern_btn_clicked");
            element4.classList.remove("concern_btn_clicked");
            element5.classList.remove("concern_btn_clicked");
        element.classList.add("concern_btn_clicked");
    }
    malePores=()=>{
        this.setState({srcMale:male_pores, concern:"pores"});
        var element = document.getElementById("concern_id3");
        var element2 = document.getElementById("concern_id");
        var element3 = document.getElementById("concern_id2");
        var element4 = document.getElementById("concern_id4");
        var element5 = document.getElementById("concern_id5");

            element2.classList.remove("concern_btn_clicked");
            element3.classList.remove("concern_btn_clicked");
            element4.classList.remove("concern_btn_clicked");
            element5.classList.remove("concern_btn_clicked");
        element.classList.add("concern_btn_clicked");
    }
    maleBreakoout=()=>{
        this.setState({srcMale:male_breakouts, concern:"breakouts"});
        var element = document.getElementById("concern_id4");
        var element2 = document.getElementById("concern_id");
        var element3 = document.getElementById("concern_id3");
        var element4 = document.getElementById("concern_id2");
        var element5 = document.getElementById("concern_id5");

            element2.classList.remove("concern_btn_clicked");
            element3.classList.remove("concern_btn_clicked");
            element4.classList.remove("concern_btn_clicked");
            element5.classList.remove("concern_btn_clicked");
        element.classList.add("concern_btn_clicked");
    }


    render(){
        if(this.state.gender=='female'){
        return(
            <div className="mid"> 
                <p className="gender_title">PICK A MAIN SKINCARE CONCERN</p>
                <div className="concern_div">
                <button className="concern_btn" id="concern_id" onClick={this.lineWrinkless}>FINE LINES AND WRINKLES </button>
                <button className="concern_btn" id="concern_id2" onClick={this.femalPigmentation}>PIGMENTATION </button>
                <button className="concern_btn" id="concern_id3" onClick={this.femalePores}>ENLARGED PORES </button>
                <button className="concern_btn"  id="concern_id4" onClick={this.femaleBreakout}>BREKOUTS  </button>
                <button className="concern_btn" id="concern_id5" onClick={this.femaleDullness}>DULLNESS  </button>
                </div>
            <div>
            <img className="concern_img" src={this.state.src}/>


            </div>
                <div className="concern_btn_div"> 
                <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.stress}/question7/${this.state.concern}`} >
                    <button className="concern_btn_next">NEXT </button>
                    </a>

                </div>
            
            
            
            
            </div>
        )}else{
            return(
                <div className="mid"> 
                    <p className="gender_title">PICK A MAIN SKINCARE CONCERN</p>
                    <div className="concern_div">
                    <button className="concern_btn" id="concern_id" onClick={this.maleWrinkless}>FINE LINES AND WRINKLES </button>
                    <button className="concern_btn" id="concern_id2" onClick={this.malePigmentation}>PIGMENTATION </button>
                    <button className="concern_btn" id="concern_id3" onClick={this.malePores}>ENLARGED PORES </button>
                    <button className="concern_btn"  id="concern_id4" onClick={this.maleBreakoout}>BREKOUTS  </button>
                    <button className="concern_btn" id="concern_id5" >DULLNESS  </button>
                    </div>
                <div>
                <img className="concern_img" src={this.state.srcMale}/>
    
    
                </div>
                    <div className="concern_btn_div"> 
                    <a href={`/question2/${this.state.gender}/question3/${this.state.age}/question4/${this.state.skin}/question5/${this.state.sensitive}/question6/${this.state.stress}/question7/${this.state.concern}`} >
                        <button className="concern_btn_next">NEXT </button>
                        </a>
    
                    </div>
                
                
                
                
                </div>
            )
        }
    }
}
export default question6