import React from 'react'

function SearchResults({data}) {
   // console.log('search results');
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

export default SearchResults