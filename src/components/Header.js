import "../StyleSheet/Header.css"
import React,{useState,useEffect} from 'react';
import data from './data';
import SearchIcon from '@mui/icons-material/Search';

function Header() {

     const [inputText,setInputText] = useState('');
   const [results,setResults] = useState([]);
   const [display,setDisplay] = useState(false);

   useEffect(() => {
      let reg = RegExp(`^${inputText}`,'ig');
      let new_results = data.shows.filter((item) => reg.test(item.title));
      if(new_results.length>0)
         setResults(new_results);
      else
         setResults([]);
   },[inputText])

   const searchHandler = (e) => {
      e.preventDefault();
      setDisplay(true);
   }

  return (
    <div className="header">
        <div className="header-left">
         <img className = 'header-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8sFyGuwr9HCc8p9ivai53lOUu6gv97HhLS5yUNTNEnlWzue-mMw6z3rRD_UpibW7fVE&usqp=CAU" alt="logo" />

        </div>
        <div className="header-right">
          
          <form className="search-bar" onSubmit={searchHandler}>
            <SearchIcon color='primary' sx={{fontSize:22}}/>
            <input type="text" 
                placeholder='Search for Movies'
                value = {inputText}
                onChange = {(e) => setInputText(e.target.value)}
                />
          </form>

          <img className = 'user-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU" alt="user logo" />
        </div>

        {
           inputText.length>0 && results.length>0 && <div className = 'search-list'>
              {results.map((show) => {
                 return <div className="list-show">
                    <div ><img className="list-img" src={show.img} alt="" /></div>
                    <h2>{show.title}</h2>
                 </div>
              })}
           </div>
        }

        {inputText.length>0 && display && results.length>0 && 
            <div className="results">
               {results.map((show) => {
                 return <div className="results-show">
                    <div ><img className="results-img" src={show.img} alt="" /></div>
                    <h2>{show.title}</h2>
                 </div>
              })}
            </div>
        }
      </div>
  )
}

export default Header;