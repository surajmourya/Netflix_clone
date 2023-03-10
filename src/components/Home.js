import "../StyleSheet/Home.css"

import data from './data';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


function Home() {

      return <div className="hero">
        <img className = 'hero-img' src={data.movies[4]?.img} alt="" />
    
        <div className="hero-left">
          <h4>RSeries</h4>
          <h2 className="title">{data.movies[2].title}</h2>
          <h4>season2 coming on 25th March</h4>
          <p>{data.movies[4].description}</p>
          <div className="hero__buttons">
            <div className="hero__buttons-left">
              <button className="play-btn"><PlayArrowIcon /> Play</button>
              <button className = 'info-btn'><InfoOutlinedIcon /> More Info</button>
            </div>
            <h2 className="age-description">{data.movies[4].ageGroup}</h2>
          </div>
        </div>
      </div>
}

export default Home;
