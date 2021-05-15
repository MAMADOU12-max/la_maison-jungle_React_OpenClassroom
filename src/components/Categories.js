import React from 'react'

function Categories({setactiveCategories, activeCategories, categories}) {

    function select() {
        console.log('cool')
    }


    return (
        <div>
           <select
				value={activeCategories}
				onChange={(e) => setactiveCategories(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
            <button onClick={() => setactiveCategories('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories
