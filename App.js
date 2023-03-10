import React from "react";
import "./style.css";

export default function App() {
  const [user,setUser] = React.useState(null);
  const fetchData = async ()=>{
    const response = await fetch('https://randomuser.me/api/?results=1');
    let user = await response.json();    
    setUser(user.results[0]);
    
  }
  React.useEffect(()=>{    
     fetchData()
  },[])
  if(user){
    return(
      <div>
        <h1>{user.name.first} {user.name.last}</h1>
        <img src={user.picture.large} alt='user'/>
        <p>{user.location.city} {user.location.country}</p>
      </div>
    );    
  } 
  return <div>No Data Yet</div>
}
