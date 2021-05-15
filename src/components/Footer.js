import React, {useState} from 'react'
import './../styles/Footer.css'

function Footer() {

    const [inputValue, setInputValue] = useState('')

    function handleOut () {
        if(!inputValue.includes('@')) {
            alert('This email isn\'t coorect😆😆😆')
        }
    }

    function handleChange (e) {
        setInputValue(e.target.value);
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input value={inputValue}
                onBlur={handleOut}
                onChange={handleChange}
                placeholder='Entrez votre mail'
            />
        </footer>
    )
}

export default Footer
