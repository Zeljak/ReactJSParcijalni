import React from 'react';

export default function List ({ data, repo}){
    if (!data || data.length === 0){
        return "Sorry, but there were no results";
    }



return(
    <ul>
        <ul>
 <img src={data["avatar_url"]} alt={data.name}/>
 <li>NAME: {data.name}</li>
 <li>LOCATION: {data.location}</li>   
 <li>BIO: {data.bio}</li>  
 </ul>
     <ul>
       {repo.map((user)=> {
         return <li key={user.id + " " + user.node_id}>REPOSITORY: {user.name}</li>  
       })}
     </ul>
    </ul>
);

}