import React ,{Component}from 'react';
import SideBar from './sidebar'
import  './assets/offers.css';


class Offers extends Component{

    constructor(props){
        super(props)
        this.state = {
          file: null,
          perc:'0',
          title: 'title here ',
          desc: 'description of the offer '
        }
        this.handleChange = this.handleChange.bind(this);
        this.percChange = this.percChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.descChange = this.descChange.bind(this);


    }
    handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
    }
    percChange(event) {
        this.setState({
            perc: event.target.value,

        })
    }
    titleChange(event) {
        this.setState({
            title:event.target.value,
        })
    }
    descChange(event) {
        this.setState({
            
            desc:event.target.value
        })
    }

    render(){

        return(
            <div>
                <SideBar />
                <div className="dashboard_title_before">  Offers</div>
            <div className="dashboard_title">  Offers</div> 
            <div className="dsh_offers_part1">
                    <label className="info_label"> Company Logo (horizontally)</label>
                    <input className="info_input" type="file" onChange={this.handleChange}/>

                    <label className="info_label"> sale %</label>
                    <input type="text" name="" className="info_input" required onChange={this.percChange} />

                    <label className="info_label"> Offer on </label>
                    <input type="text" name="" className="info_input" required onChange={this.titleChange} />

                    <label className="info_label"> Description</label>
                    <input type="text" name="" className="info_input" required onChange={this.descChange} />

                    <button className="configuration_save" style={{'margin-top':'10px'}}> Save Information </button>
            </div>
            <div className="dsh_offers_part2">
                <div className="offer_img">
                <img src={this.state.file}/>

                </div>
                <div className="offer_title">
                   <p> {this.state.perc} %sale on {this.state.title} </p>
                </div>
                <div className="offer_desc">
                    {this.state.desc}
                </div>
                 
            </div>
            </div>
        )
    }
}
export default Offers