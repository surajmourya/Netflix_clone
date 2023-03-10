import "./StyleSheet/Header.css"
import data from './components/data';
import PopularShows from './components/PopularShows';
import Home from  './components/Home';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searchResults' element={<SearchResults />}/>
        </Routes>
      </Router>
      <PopularShows data = {data.shows}/>
      
    </div>
  );
}

export default App;
