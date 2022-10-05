import NavBar from 'components/NavBar/NavBar';
import Cast from 'pages/Cast/Cast';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/navBar" element={<NavBar />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}
