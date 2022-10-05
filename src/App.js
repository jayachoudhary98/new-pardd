import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/layout/Header';
import Routess from './Routes/Routess';
 
function App() {
  return (
    <div>
      <Header/>

      <Routess/>

</div>
  );
}

export default App;
