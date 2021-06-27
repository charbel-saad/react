import React, { Component, useState,useEffect } from 'react';
import  './assets/dashboardAdmin.css';
import Adminbar from './AdminBar'
import axios from 'axios';
import Posts from './centers';
import Pagination from './pagination';




function AdminDash(){
    const [posts,setPosts] = useState([]);
    const [loading,setLoading]= useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(5);


    // useEffect(()=>{
    //     const fetchCenters = async()=>{
    //         setLoading(true);
    //         const res=await axios.get("http://localhost:4000/products");
    //         setPosts(res.data);
    //         setLoading(false);
            
    //     }
    //     fetchCenters();
    // },[]);
    useEffect(()=>{
        getCenters();
    })

    const openFormAdd=()=>{
      var modal = document.getElementById('id02');
      modal.style.display='block'
      
  
    }
    const closeFormAdd=()=>{
      var modal = document.getElementById('id02');
      modal.style.display='none'
    }
      
    const getCenters= (variables) => {
        fetch('https://omnielle.com/api/web/centers/get-centers/')
          .then(response => response.json())
          .then(response => setPosts(response.data))
          .catch(err =>console.error(err))
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost,indexOfLastPost);

    const paginate=(pageNumber)=>setCurrentPage(pageNumber);


 const  myFunction=()=> {
        // Declare variables
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
}









    
        return(
            <div>
                <div><Adminbar /></div>
                <div className="dashboard_title_before">  Centers</div>
                <div className="dashboard_title">  Centers</div>


            <div className="admin_dashboard_content">
                <div className="dash_left">   
                        <div className="dash_left_part1">
                            <input type="text" id="mySearch" onChange={myFunction} placeholder="Search.." title="Type in a category"></input>
                             <button className="dash_add_btn" onClick={openFormAdd}> + </button>       

                        </div>
                        <div id="id02" className="modal_add">
            <div>
      <form className="modal_add-content-center animate" action="" method="post">
              <div className="modal_add_container-center"> 
              <label className="add_labelC" for="uname"><b>Name</b></label>
              <input className="add_inputC" type="text" placeholder="Enter Username"   name="name" required></input>

              <label className="add_labelC" for="uname" > Choose an image  </label>
              <input type="file" id="imageFile" accept="image/*"required></input>

              <label className="add_labelC" for="position"><b>Short Description </b></label>
              <input className="add_inputC" type="text" placeholder="Enter short description "  name="email" required/>
              <label  className="add_labelC" for="Office"><b>Description</b></label>
              <input className="add_inputC" type="password" placeholder="Enter Description"  name="password" required/>

              <label className="add_labelC" for="Age"><b>type</b></label>
              <input className="add_inputC"  type="text" placeholder="Enter type"  name="type" required/>

              <label className="add_labelC" for="date"><b> Status </b></label>
              <input className="add_inputC"  type="text" placeholder="Enter status"  name="status" required/>

              <label className="add_labelC" for="date"><b> Location id </b></label>
              <input className="add_inputC"  type="text" placeholder="Enter status"  name="status" required/>

              <label className="add_labelC" for="date"><b> Location details </b></label>
              <input className="add_inputC"  type="text" placeholder="Enter status"  name="status" required/>

              <label className="add_labelC" for="date"><b> Open hours </b></label>
              <input className="add_inputC"  type="text" placeholder="Enter status"  name="status" required/>

              <label className="add_labelC" for="date"><b> Admin </b></label>
              <input className="add_inputC"  type="text" placeholder="Enter status"  name="status" required/>

              
              <div className="btn_divC">
              <button  type="button" onClick={closeFormAdd} className="cancelbtnC">Cancel</button>
             <button  className="add_btnC"  type="submit">Add</button>
             </div>
             
              </div>
              </form>
              </div>
                  

            </div>

                        <div className="dash_left_part2">
                           
                        <ul id="myMenu"> <Posts posts={currentPost} loading={loading} /></ul>

                        <div className="dash_pagination">
                            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                        </div>



                        </div>
                </div>
            </div>





            </div>
        )
    
}
export default AdminDash