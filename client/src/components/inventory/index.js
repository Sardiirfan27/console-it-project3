import React from 'react'
import "./inventory.css"



function inventory({ inventory, invenShow, handleButtonInventory }) {

    const invenClass = invenShow ? 'invenBox' : 'hide invenBox'

    function useBtn() {
        console.log(this)
    }


    return (
        <div className={invenClass}>
            <p className="invenHead">Inventory</p>
            <ul className="items">
                {inventory.map(item => (<li><button onClick={useBtn} className="itemBtn">use</button> {item} </li>))}
            </ul>
            <button onClick={handleButtonInventory} className="closeBtn">Close</button>
        </div>
    )
}

export default inventory
