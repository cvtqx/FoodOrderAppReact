import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';


const HeaderCartButton = props =>{

    const cartCtx = useContext(CartContext);

    //use reduce (NOT items.length) to calculate the number of items in the cart because some items might have the same name but different amount
    
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

        return (
        <button className = {classes.button} onClick={props.onClick}> 
            <span className = {classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className = {classes.badge}>{numberOfCartItems}</span>
        </button>
        )
}

export default HeaderCartButton;