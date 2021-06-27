import React, { Component } from 'react';
import services from './services.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPlusSquare, faCheckSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import './services.css'

class ServicesInfo extends Component{
    render(){
        return(
            <div>
                
                <div><img src={services} className="services_img"/></div> 
                <div className="mid">
                    <div className="service_info_title"><p className="service_info_t2">FILLERS</p></div>  
                    <div className="info_pg">

                        <div className="info_pg_left">
                            <p style={{'color':'wheat','font-size':'30px','margin-bottom':'70px'}}> TREATMENT SNAPSHOT  </p>
                            
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="table_case1"><p><FontAwesomeIcon icon={faClock} style={{"color":"wheat","margin-left":"10px"}} /></p></td>
                                        <td className="table_case2">Duration</td>
                                        <td className="table_case3">10 to 15 minutes</td>
                                    </tr>
                                    <tr>
                                        <td className="table_case1"><p><FontAwesomeIcon icon={faPlusSquare} style={{"color":"wheat","margin-left":"10px"}} /></p></td>
                                        <td className="table_case2">Contraindications</td>
                                        <td className="table_case3">pregnancy, breast feeding, cancer, 
                                        autoimmune diseases, skin infections, exacerbation of chronic disease, hemophilia, skin inflammation in the area of presumed injections. the skin’s tendency to form keloid scars , presence of permanent fillers in the corrected zones, such as silicone or bio polymers, allergy to the 
                                        components of the agent, recent usage of laser or chemical peeling.</td>
                                    </tr>
                                    <tr>
                                        <td className="table_case1"><p><FontAwesomeIcon icon={faCheckSquare} style={{"color":"wheat","margin-left":"10px"}} /></p></td>
                                        <td className="table_case2">Final Resul</td>
                                        <td className="table_case3">Elimination of fine lines and wrinkles</td>
                                    </tr>
                                    <tr>
                                        <td className="table_case1"><p><FontAwesomeIcon icon={faUser} style={{"color":"wheat","margin-left":"10px"}} /></p></td>
                                        <td className="table_case2">Suitable For</td>
                                        <td className="table_case3">Person who wants to combat signs of aging</td>
                                    </tr>





                                </tbody>

                            </table>
                            <div className="info_desc">
                            <p style={{'color':'wheat','font-size':'30px'}}> WHAT ARE  FILLERS ?  </p>
                            
                            <p className="info_desc_content" >
                            Fillers are injections containing ingredients that add fullness to areas that have thinned due to aging. Different types of fillers 
                            treat varying signs of aging around the face and restore elasticity and lost volume to the skin.

                            </p>

                            </div>
                            <div className="info_desc">
                            <p style={{'color':'wheat','font-size':'30px'}}> HOW DO THEY WORK  ?  </p>
                            <p className="info_desc_content" >
                            Dermal fillers are gel-like substances that are injected beneath the skin to help combat signs of aging, plump thinning lips, enhance
                             of fill shadows on the face and underneath the eyes, and fill in or soften recessed scars..

                            </p>

                            </div>
                            <div className="info_desc">
                            <p style={{'color':'wheat','font-size':'30px'}}> WHEN CAN I SEE RESULTS ?  </p>
                            <p className="info_desc_content" >
                            fillers may last between 6 to 18 months. How soon will I see any result and how long does it last? the results of fillers are seen instantly after the treatment, although they gradually improve over
                             the course of the following 2–4 weeks. The effect of the fillers lasts on average between 6 to 18 months.

                            </p>

                            </div>



                        </div>
                        <div className="info_pg_right">
                        <p style={{'font-size':'30px'}}> BOOK ONLINE   </p><p style={{'font-size':'20px','margin-top':'20px'}}>Book your treatment online today </p>
                        <a><button className="info_book_btn" >BOOK SERVICE</button> </a>





                        </div>
                        
                
                    </div>                  
                </div>
            </div>
        )
    }
}
export default ServicesInfo