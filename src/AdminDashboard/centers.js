import React from 'react'


const Posts =({posts,loading})=>{
    if(loading){
        return<h2>Loading...</h2>
    }
    return(
        <div>
            {posts.map(post=>(
               <a href={`/adminDetails/${post.status}/${post.center_id}`}> <li key={post.center_id} className="admin_centers"><a>{post.name}</a></li></a>
            ))}
        </div>
    )
}
export default Posts

