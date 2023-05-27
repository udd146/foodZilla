

const Shimmer=()=> 
      {
      return(
          <div className="rest_carsouls">
          {Array(15).fill("").map((e)=>(<div className="shimmer"></div>))}
         </div>
         )
     } 
     
export default Shimmer;
