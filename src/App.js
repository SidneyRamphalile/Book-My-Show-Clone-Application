import './App.css';

// Routers
import {Routes, Route} from "react-router-dom";

// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import PlayPage from './pages/Play.Page';
import MoviePage from './pages/Movie.Page';
import HomePage from './pages/Home.Page';

// Footer
import Footer from './components/Footer/Footer';


// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/movie/:id" element={<MoviePage />} />
//       <Route path="/plays" element={<PlayPage />} />
//     </Routes>
//   );

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/plays" element={<PlayPage />} />
      </Routes>
      <Footer /> 
    </div>
  );
}


export default App;




