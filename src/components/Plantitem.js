import React from 'react'
import CareScale from './CareScale'
import './../styles/Plant.css'

function Plantitem ({id, cover, name, water, light }) {

    function handleClick(e) {
    	console.log(e);
	}

	return (
		<li key={id} className='lmj-plant-item' onClick={handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default Plantitem;
