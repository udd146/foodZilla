import Reastraunts from "./RestroCard"
import swiggy_data from "./Api"
import { useState,useEffect } from "react"
import Shimmer from "./shimmerUi"

 function filterData(search_food,restaurant_list)
 {
  const filter_data=restaurant_list.filter((restaurant)=> restaurant.data.name.toLowerCase().includes(search_food.toLowerCase()))
  return filter_data
 }

const Body=()=>{
   
    const [search_food,set_search_food]= useState()
    const[filterRestaurantList,setFilterResList]=useState([])
    const[allRestaurantsList,setAllRestaurants]=useState([])

   //  using useEffect(to not make api call unnecassary while rendering)
   useEffect(()=>{
      console.log("yos ")
       getReastraunt()
   },[])
  //calling api   
   async function getReastraunt(){
      try {
         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.966325&lng=75.720249&page_type=DESKTOP_WEB_LISTING");
         const json = await data.json();
         console.log(json)
         setFilterResList(json?.data?.cards[2]?.data?.data?.cards)
         setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        } catch (error) {
         console.log(error);
       }
   }
   
     
   
       

       

   return (allRestaurantsList.length===0)?(<Shimmer/>):(  
        <div>
       <input className="input_food" type="text" value={search_food} onChange={(e)=>{
        set_search_food(e.target.value)
       }} ></input>
       {/* in button providing on-click feature to filter data */}
       <button className="search_btn" onClick={()=>{
       const data=filterData(search_food,allRestaurantsList)
       setFilterResList(data)
       }} >search</button>
           
        <div className="rest_carsouls"> 
       
           
             {
          //  we cannot make changes in the normal swiggy_data, so we have to make React local variable using hooks
              filterRestaurantList.map(res=>{
               
                  return (
                     <Reastraunts {...res.data}  />
                     )})
             }
      </div>
      </div>
      )
   
} 
export default Body
   