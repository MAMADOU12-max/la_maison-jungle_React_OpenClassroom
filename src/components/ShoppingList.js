import React, {useState} from 'react';
import {plantList} from '../datas/plantList';
import Plantitem from './Plantitem';
import './../styles/shoppingList.css'
import Categories from './Categories'

function ShoppingList({cart, updateCart}) {

    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	// initialise Categories

	const [activeCategories, setactiveCategories] = useState('')


    // console.log(categories);

	function addToCart(name, price) {
		// verify if plant is already selected
	   const currentPlantAdded = cart.find((plant) => plant.name === name)
	   console.log(currentPlantAdded)
	   if(currentPlantAdded) {
		   // create table without him
			const cartFilteretCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteretCurrentPlant, {name, price, amount: currentPlantAdded.amount +1}
			])
	   } else {
		   updateCart([...cart, {name, price, amount: 1}])
	   }
	}

	return (
		<div>
			<Categories activeCategories={activeCategories} setactiveCategories={setactiveCategories}
			categories={categories}/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => 
				!activeCategories || activeCategories === category ? (
					<div key={id}>
						<Plantitem
							id={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
						/>		
						<button onClick={()=> addToCart(name, price)}>
							Ajouter
						</button>
					</div>
				
				) : null )}
			</ul>
		</div>
	)
}

export default ShoppingList
