const Reastraunts=({name,area,cloudinaryImageId,cuisines,totalRatings})=>
             (
               <div className="rest_list"> 
                <img alt="food_img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
                <h2>{name}</h2>
                
                <h3>{area}</h3>
                <h3>{cuisines.join(",")}</h3>
                <h3>Rating* {totalRatings} </h3>
              </div>
             )
export default Reastraunts