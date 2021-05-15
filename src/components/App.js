import './../styles/App.css';
import Banner from './Banner'
import Cart from './Cart'
import QuestionForm from './QuestionForm'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import {useState, useEffect} from 'react';

function App() {

  // save data even refresh
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
      <div className="App">
          <header className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}    
              {/* crlr + i => for shoes emoji */}
              <Banner/>
              {/* <QuestionForm/> */}
              <div style={{background_color: 'red', display: 'flex'}}>
                    <Cart cart={cart} updateCart={updateCart} />
                    <ShoppingList cart={cart} updateCart={updateCart} />
              </div>
            
              <Footer/>
          </header>
    </div>
  );
}

export default App;
