import React, { useState } from 'react';
import { IonIcon } from 'react-ion-icon';
import {
    IoStorefrontOutline, IoNotificationsOutline, IoChatbubblesOutline, IoSettingsOutline, IoLogOutOutline,
    IoMenuOutline, IoCartOutline, IoPersonOutline, IoCloseCircleOutline
} from 'react-icons/io5';
import './demo.css';
import chapati from './Images/chapati.jpeg';
import bhurji from './Images/bhurji.jpeg'
import BatataBhaji from './Images/BatataBhaji.jpeg'
import dalkhichdi from './Images/dalkhichdi.jpeg';
import Rice from './Images/Rice.jpeg';
import chicken from './Images/chicken.jpeg';
import friedrice from './Images/friedrice.jpeg';
import eggcurry from './Images/eggcurry.jpeg';
import eggfriedrice from './Images/eggfriedrice.jpeg';




const DelightService = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const addToCart = (item, price) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.item === item);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.item === item
                        ? { ...cartItem, count: cartItem.count + 1, total: (cartItem.count + 1) * cartItem.price }
                        : cartItem
                );
            } else {
                return [...prevItems, { item, price, count: 1, total: price }];
            }
        });
    };

    const toggleCartPopup = () => {
        setIsCartOpen(!isCartOpen);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const cartCount = cartItems.reduce((acc, item) => acc + item.count, 0);
    const cartTotal = cartItems.reduce((acc, item) => acc + item.total, 0).toFixed(2);

    return (
        <div className="app-container">
            <div className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
                <h1 className="logo">Delight Service</h1>
                <div className="sidebar-menus">
                    <a href="/showtiffin"><IonIcon icon={IoStorefrontOutline} />Home</a>
                    <a href="#"><IonIcon icon={IoNotificationsOutline} />Notification</a>
                    <a href="/aboutus"><IonIcon icon={IoChatbubblesOutline} />Contact Us</a>
                    {/* <a href="#"><IonIcon icon={IoSettingsOutline} />Setting</a> */}
                </div>
                <div className="sidebar-logout">
                    <a href="/home"><IonIcon icon={IoLogOutOutline} />Logout</a>
                </div>
            </div>
            <div className="main">
                <div className="main-navbar">
                    <IonIcon className="menu-toggle" icon={IoMenuOutline} onClick={toggleMenu} />
                    <div className="search">
                        <input type="text" placeholder="What you want to eat?" />
                        <button className="search-btn">Search</button>
                    </div>
                    <div className="profile">
                        <a className="cart" href="#" onClick={toggleCartPopup}>
                            
                            <IonIcon icon={IoCartOutline} />
                            
                            <span className="cart-count" id="cart-count">{cartCount}</span>
                        </a>
                        <a className="user" href="#"><IonIcon icon={IoPersonOutline} /></a>
                       
                    </div>
                </div>
                {isCartOpen && (
                    <div id="cart-popup" className="cart-popup">
                        <h4>Food Cart</h4>
                        <table id="cart-items">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>#</th>
                                    <th>Price(₹)</th>
                                    <th>Total(₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((cartItem, index) => (
                                    <tr key={index}>
                                        <td>{cartItem.item}</td>
                                        <td>{cartItem.count}</td>
                                        <td>{cartItem.price}</td>
                                        <td>{cartItem.total.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>Total(₹)<span id="cart-total">{cartTotal}</span></p>
                        <a className="cart-close" onClick={closeCart}><IonIcon icon={IoCloseCircleOutline} /></a>
                    </div>
                )}
                <div className="main-detail">
                    <h2 className="main-title">Choose Order</h2>
                    <div className="detail-wrapper">
                        {/* Repeat this block for each item */}
                        <div className="detail-card">
                            <img className="detail-img" src={chapati} alt="Chapati" />
                            <div className="detail-desc">
                                <div className="detail-name">
                                    <h4>Chapati</h4>
                                    {/* <p className="detail-sub">Lorem ajay</p> */}
                                    <p className="price">₹10.00</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart('Chapati', 10.00)}>Add to Cart</button>
                                </div>
                                <IonIcon className="detail-favorites" icon="bookmark-outline" />
                            </div>
                        </div>
                        {/* Add similar blocks for other items */}
                        <div className="detail-card">
                            <img className="detail-img" src={bhurji} alt="Chapati" />
                            <div className="detail-desc">
                                <div className="detail-name">
                                    <h4>bhurji</h4>
                                    {/* <p className="detail-sub">Lorem ajay</p> */}
                                    <p className="price">₹80.00</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart('bhurji', 80.00)}>Add to Cart</button>
                                </div>
                                <IonIcon className="detail-favorites" icon="bookmark-outline" />
                            </div>
                        </div>
                        <div className="detail-card">
                            <img className="detail-img" src={BatataBhaji} alt="Chapati" />
                            <div className="detail-desc">
                                <div className="detail-name">
                                    <h4>BatataBhaji</h4>
                                    {/* <p className="detail-sub">Lorem ajay</p> */}
                                    <p className="price">₹70.00</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart('BatataBhaji', 70.00)}>Add to Cart</button>
                                </div>
                                <IonIcon className="detail-favorites" icon="bookmark-outline" />
                            </div>
                        </div>
                        <div className="detail-card">
                            <img className="detail-img" src={Rice} alt="Chapati" />
                            <div className="detail-desc">
                                <div className="detail-name">
                                    <h4>Rice</h4>
                                    {/* <p className="detail-sub">Lorem ajay</p> */}
                                    <p className="price">₹50.00</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart('Rice', 50.00)}>Add to Cart</button>
                                </div>
                                <IonIcon className="detail-favorites" icon="bookmark-outline" />
                            </div>
                        </div>
                        <div className="detail-card">
                            <img className="detail-img" src={chicken} alt="Chapati" />
                            <div className="detail-desc">
                                <div className="detail-name">
                                    <h4>chicken</h4>
                                    {/* <p className="detail-sub">Lorem ajay</p> */}
                                    <p className="price">₹150.00</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart('chicken', 150.00)}>Add to Cart</button>
                                </div>
                                <IonIcon className="detail-favorites" icon="bookmark-outline" />
                            </div>
                        </div>
                        <div className="detail-card">
                            <img className="detail-img" src={dalkhichdi} alt="Chapati" />
                            <div className="detail-desc">
                                <div className="detail-name">
                                    <h4>dalkhichdi</h4>
                                    {/* <p className="detail-sub">Lorem ajay</p> */}
                                    <p className="price">₹100.00</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart('dalkhichdi', 100.00)}>Add to Cart</button>
                                </div>
                                <IonIcon className="detail-favorites" icon="bookmark-outline" />
                            </div>
                        </div>
                        <div className="detail-card">
                            <img className="detail-img" src={eggcurry} alt="Chapati" />
                            <div className="detail-desc">
                                <div className="detail-name">
                                    <h4>eggcurry</h4>
                                    {/* <p className="detail-sub">Lorem ajay</p> */}
                                    <p className="price">₹120.00</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart('eggcurry', 120.00)}>Add to Cart</button>
                                </div>
                                <IonIcon className="detail-favorites" icon="bookmark-outline" />
                            </div>
                        </div>
                        <div className="detail-card">
                            <img className="detail-img" src={friedrice} alt="Chapati" />
                            <div className="detail-desc">
                                <div className="detail-name">
                                    <h4>friedrice</h4>
                                    {/* <p className="detail-sub">Lorem ajay</p> */}
                                    <p className="price">₹110.00</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart('friedrice', 110.00)}>Add to Cart</button>
                                </div>
                                <IonIcon className="detail-favorites" icon="bookmark-outline" />
                            </div>
                        </div>
                        <div className="detail-card">
                            <img className="detail-img" src={eggfriedrice} alt="Chapati" />
                            <div className="detail-desc">
                                <div className="detail-name">
                                    <h4>eggfriedrice</h4>
                                    {/* <p className="detail-sub">Lorem ajay</p> */}
                                    <p className="price">₹130.00</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart('eggfriedrice', 130.00)}>Add to Cart</button>
                                </div>
                                <IonIcon className="detail-favorites" icon="bookmark-outline" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DelightService;
