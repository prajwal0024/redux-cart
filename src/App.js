import './App.css';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './Footer/Footer';

import { useSelector } from 'react-redux';

function App() {
  const { data } = useSelector((state) => state.cartReducer);

  return (
    <>
      <Navbar />
      <CartContainer products={data} />
      <Footer />
    </>
  );
}

export default App;
