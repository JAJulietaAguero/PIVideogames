import './App.css';
import { Route,Routes } from 'react-router-dom';
import Cards from './components/cards/Cards';
//import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import LandingPage from './components/landingPage/LandingPage';

const App = () => {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
     <Routes>
     <Route path='/' element={<LandingPage />}/>
      <Route path='/home' element={<Cards />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/' element={<Form />}/>
    </Routes>
    </div>
  );
}

export default App;
