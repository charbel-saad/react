import React ,{useState, useEffect}from 'react';
import Tweet from './tweet';
import center1 from './images/center1.jpg';
import {CheckBox,CheckBox2} from './checkbox';
import Pagination from './AdminDashboard/pagination';
import './css/homeMobile.css'
// import {browseHistory} from 'react-router';
import Axios from "axios";



function Home(){
  
//   OnNavigateDetails() {
//     browseHistory.push('/center_details');
//   }
Axios.defaults.withCredentials = true;

const [centers,setCenters] = useState([]);
const [Filters,setFilters]=useState([])

const [loading,setLoading]= useState(false);
const [currentPage,setCurrentPage]=useState(1);
const [postsPerPage,setPostsPerPage]=useState(3);
const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = centers.slice(indexOfFirstPost,indexOfLastPost);

    const paginate=(pageNumber)=>setCurrentPage(pageNumber);

useEffect(()=>{
  getCenters();
})

// useEffect(() => {
//   Axios.get("https://omnielle.com/omnielle-dashboard/api/web/centers/get-all-clients/").then((response) => {
    
//       setCenters(response.data)
  
//   });
// }, []);


// useEffect(() => {
//   Axios.post("/centers/get-centers/").then((response) => {
//     var result=centers.concat(response.data.data);
//     console.log(result);
//     setCenters(response.data.data);
//       // setCenters(response.data);
  
//   });
// }, []);


const getCenters= (variables) => {
  fetch('https://omnielle.com/api/web/centers/get-centers/')
    .then(response => response.json())
    .then(response => setCenters(response.data))
    .catch(err =>console.error(err))
}

const renderCenter = currentPost.filter(center=>{
  return center.location_details.indexOf(Filters) >=0
})
.map((center,index)=>{
  return<li className="centers" > 
  <div className="name" key={center.id}>{center.name}</div>
  <div className="img"><img src={center1} height="280px" width="360px"/></div>
  <div className="right">
  <div className="desc">This is a short description </div>
  <div className="loc"><a  id="loc">{center.location_details}</a></div>
  <a href={`/details/${center.center_id}`}><button className="select_btn" >SELECT CENTER</button></a>
  </div>
  
  </li>
  })
  // renderCenter_desc = ({center_id,center_desc}) => <div key={center_id}>{center_desc}</div>
  // renderCenter_loc = ({center_id,center_loc}) => <div key={center_id}>{center_loc}</div>  

  const  handleFilters=(filters,category)=>{
    var checkedLoc=filters
    setFilters(filters);
    
    console.log(checkedLoc);
    console.log("filters"+Filters)
    // let resCenters=centers
    // console.log(resCenters)

    // var ul,li,a,i;
    // ul=document.getElementById("filterMenu");
    // li = ul.getElementsByTagName("li");
    

    // for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     if (a.innerHTML.indexOf(checkedLoc) > -1) {
    //         li[i].style.display = "";
    //       } else {
    //         li[i].style.display = "none";
    //       }
        
    // }
    
    }
    
  
  return (
    <div className='mid'>
      <div className="title_div"><p className="title">BEAUTY CENTERS</p></div>
      
                <div className="filter">
                
                      
                      <div className="table">
                                <p id="f-small">FILTERS</p>
                                <div>
                                <CheckBox2 
                                    handleFilters={filters=> handleFilters(filters)}
                          />
                                
                                </div>
                          
                      <div>
                          




                      </div>
                          


                      </div>
                </div>
      <div >
      <div className="dash_pagination">
                            <Pagination postsPerPage={postsPerPage} totalPosts={centers.length} paginate={paginate} />
      </div>
      <div id="filterMenu">  {renderCenter}</div>
      

        </div>
      {/* {users.map(user => (
          <Tweet name={user.name} message={user.message}/>
      )
      )} */}





    </div>
  );

}

export default Home;
