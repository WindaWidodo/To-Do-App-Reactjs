import logo from './logo.svg';
import './App.css';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from "./components/Navbar";
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <switch>
          <Route path="/">
            <Home/>
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku/>
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
