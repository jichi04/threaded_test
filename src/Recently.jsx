import React, {useState} from 'react'
   

function Recently() {
    
    function handleAddCart(e) {
        
    }

    return (
            <div className="recently-main-container">
                <div className='header-text'><img src="./src/assets/recently/heading.png" alt="Header" /></div>
                <div className="recently-subcontainer">
                    <img src="./src/assets/recently/item-1.png" alt="Item 1" />
                    <button className="">Shop Now</button>
                </div>
                <div className="recently-subcontainer">
                    <img src="./src/assets/recently/item-2.png" alt="Item 2" />
                    <button className="shop-now" onClick={handleAddCart}>Shop Now</button>
                </div>
                <div className="recently-subcontainer">
                    <img src="./src/assets/recently/item-sale1.png" alt="Item 3" />
                    <button className="shop-now" onClick={handleAddCart}>Shop Now</button>
                </div>
                <div className="recently-subcontainer">
                    <img src="./src/assets/recently/item-sale2.png" alt="Item 4" />
                    <button className="shop-now" onClick={handleAddCart}>Shop Now</button>
                </div>
                <div className="recently-subcontainer">
                    <img src="./src/assets/recently/item-sale3.png" alt="Item 5" />
                    <button className="shop-now" onClick={handleAddCart}>Shop Now</button>
                </div>
            </div>
    );
}

export default Recently