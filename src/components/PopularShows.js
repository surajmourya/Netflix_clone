import React from 'react';
import "../StyleSheet/PopularShows.css"

function PopularShows({data}) {
   // console.log(data);
  return (
     <div className="showlist">
      <div className="shows">
         {data?.map((show) => {
            return <div className="show">
               <img src={show.img} alt="" />
            </div>
         })}
      </div>
      <button>&gt;</button>
     </div> 
  )
}

export default PopularShows;