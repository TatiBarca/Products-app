// import { Switch } from "react-router-dom';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import './App.css';
import { Details } from './Details';
import { Home } from './Home/Home';
import { BasicTable} from './Products';


function App() {
  return (
    <div className="App">
      <h1>Pages</h1>
      <BrowserRouter>
      <Home />
        <Routes>
        
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/' element={<BasicTable />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
