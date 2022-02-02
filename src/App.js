import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Voucher from './components/Voucher';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Product/>
      <Voucher/>
    </div>
  );
}

export default App;
