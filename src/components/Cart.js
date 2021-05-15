import React, {useState, useEffect} from 'react'
import './../styles/Cart.css'

function Cart({cart, updateCart}) {

	const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)
	console.log(total);

    const monsteraPrice = 8
	const [isOpen, setisOpen] = useState(true)

	//update title link element
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	return isOpen ?(
		<div className='lmj-cart'>
			<button onClick={() => setisOpen(false)}>Fermer le panier</button>
			<h2>Panier</h2>
			{
				cart.map(({ name, amount, price }, index) => (
					<div key={`${name}-${index}`}>
						{name} {price}$ x {amount}
					</div>
				))
			}

			<h3>Total: {total} $</h3>
			<button onClick={() => updateCart([])}>Vider le cart</button>
		</div>
	) : (
		<button onClick={() => setisOpen(true)}>Ouvrir le panier</button>
	)
}

export default Cart
