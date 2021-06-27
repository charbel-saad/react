import React, { useEffect,useState } from 'react'
import Axios from'axios'
import center1 from './images/center1.jpg';
import {CheckBox,CheckBox2} from './checkbox';

function LandingPage(){


const [centers,setCenters] = useState([]);
const [Filters,setFilters]=useState({
    lebanon: [],

})


useEffect(()=>{
    getCenters();
})

const getCenters= (variables) => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(response => setCenters(response.data))
      .catch(err =>console.error(err))
}

// useEffect(()=>{
//         Axios.get('http://localhost:4000/products')
//         .then(response=>{
//             if(response.data){
//                 setCenters(response.data)
//                 console.log(centers)
//             }else{
//                 alert('Failed')
//             }
//         })

// },[])

const renderCenter = centers.map((center,index)=>{
return<li className="centers" > 
<div className="name" key={center.center_id}>{center.center_name}</div>
<div className="img"><img src={center1} height="280px" width="360px"/></div>
<div className="right">
<div className="desc">{center.center_desc}</div>
<a className="loc" id="loc">{center.center_loc}</a>
<a href={`/details/${center.center_id}`}><button className="select_btn" >SELECT CENTER</button></a>
</div>

</li>
})


const showFilteredResults =(filters)=>{
    const variables = {
        filters: filters
    }
    
        getCenters(variables)
} 

const handleFilters=(filters,category)=>{
    var checkedLoc=filters
    
    console.log(checkedLoc)
    // let resCenters=centers
    // console.log(resCenters)
    var ul,li,a,i;
    ul=document.getElementById("filterMenu");
    li = ul.getElementsByTagName("li");
    

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.indexOf(checkedLoc) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        
    }









////////////////////////////
    // checkedLoc.forEach((item,index)=>{
    //     resCenters=resCenters.filter((centers)=>{
    //         let location=centers.center_loc
            
    //             console.log(location)

            
    //     })
    // })
    
    ////////////////////////////////////////////////

    // const newFilters = {... Filters}
    // newFilters[category] = filters


    // showFilteredResults(newFilters)
    // setFilters(newFilters)
}

    return(

        <div className="mid">
            <div className="title_div"><p className="title">BEAUTY CENTERS</p></div>
            <div className="filter">
                
                      
                <div className="table">
                          <p id="f-small">FILTERS</p>
                          <div >
                          <CheckBox2 
                                    handleFilters={filters=> handleFilters(filters,"lebanon")}
                          />
                          
                          </div>
                    
                <div>
                    




                </div>
                    


                </div>
          </div>


          <ul id="filterMenu">  {renderCenter}</ul>
        {/* <div > {Object.keys(centers).map(renderCenter)}</div> */}

 
        </div>
    )
}
export default LandingPage