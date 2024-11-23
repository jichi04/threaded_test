import React, {useState} from 'react'

function Header() {

    const [cart, setCart] = useState(0);
    const [cartData, setCartData] = useState([]);
    const imgNavLocation = './src/assets/navigation';
    
    function handleOpenShoppingCart() {

        const shoppingCartOpen =  document.getElementsByClassName('shopping-bag-cart');
        
        const hasClassChecker = 1;
        
        for (let i = 0; i < shoppingCartOpen.length; i++) {
            
            const classList = shoppingCartOpen[i].classList.value;
            if(!classList.includes('open')) {
                shoppingCartOpen[i].classList.value = classList + ' open';
            } else {
                shoppingCartOpen[i].classList.value = classList.replace('open', '');
            }
        }
        

    }

    function handleLeftNavMobileOpenClose() {

        const navLeftDropDpwn =  document.getElementsByClassName('left-nav-ul-list');
        
        const hasClassChecker = 1;
        
        for (let i = 0; i < navLeftDropDpwn.length; i++) {
            
            const classList = navLeftDropDpwn[i].classList.value;
            if(!classList.includes('open')) {
                navLeftDropDpwn[i].classList.value = classList + ' open';
            } else {
                navLeftDropDpwn[i].classList.value = classList.replace('open', '');
            }
        }
        

    }

    return(

        <header>
            <div className = "left-nav-container">
                <div className="left-nav-burger-icon toggle-left-nav-trigger-mobile hide-desktop">
                    <img src={imgNavLocation + "/left-nav/burger-bar.png"} alt="Burger icon" width="20" height="20"  onClick={handleLeftNavMobileOpenClose} />
                    <ul className="left-nav-ul-list toggle-left-nav-mobile hide-mobile show-desktop">
                        <li className="left-nav-ul-items selected">WOMEN</li>
                        <li className="left-nav-ul-items">MAN</li>
                        <li className="left-nav-ul-items">PLUS</li>
                        <li className="left-nav-ul-items">ACCESSORIES</li>
                    </ul>
                </div>
            </div>
            <div className = "center-nav-container">
                <a href='#'>
                    <img className="logo" src={imgNavLocation + "/center-nav/Logo.svg"} alt="Logo" width="150" height="20"/>
                </a>
            </div>
            <div className = "right-nav-container">
            <ul className="right-nav-ul-list">
                    <li className="right-nav-ul-items">
                        <a href='#'>
                            <img src={imgNavLocation + "/right-nav/bx_bx-user.svg"} alt="Shopping " width="20" height="20"/>
                        </a>
                    </li>
                    <li className="right-nav-ul-items shopping-cart-trigger">
                        <a href='#'>
                            <img src={imgNavLocation + "/right-nav/bx_bx-shopping-bag.svg"} alt="Shopping bag" width="20" height="20" onClick={handleOpenShoppingCart} />
                        </a>
                        <div className="shopping-bag-cart " id="shopping-bag-cart">
                            <div className="close" onClick={handleOpenShoppingCart}> <p>X</p></div>
                            <div className="product-list-section"> 
                                <p>Empty</p>
                            </div>
                        </div>
                    </li>
                    <li className="right-nav-ul-items"> 
                        <a href='#'>
                            <img src={imgNavLocation + "/right-nav/bx_bx-heart.svg"} alt="Wish List" width="20" height="20" />
                        </a>
                    </li>
                    <li className="right-nav-ul-items">
                        <a href='#'>
                            <img src={imgNavLocation + "/right-nav/bx_bx-search.svg"} alt="Search" width="20" height="20" />
                        </a>
                    </li>
                    <li className="right-nav-ul-items">
                        <div className="text-image-container">
                            <img src={imgNavLocation + "/right-nav/us-flag.png"} alt="Shopping bag" width="20" height="20" />
                            <select className='currency-select'>
                                <option value="usd">$ USD</option>
                            </select>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header