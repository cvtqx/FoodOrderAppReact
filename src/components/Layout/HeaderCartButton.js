import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';


const HeaderCartButton = props =>{
    const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);

    //use reduce (NOT items.length) to calculate the number of items in the cart because some items might have the same name but different amount
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    //update btn class if button is highlighted
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    //add animation to button when items are added to cart

    useEffect(() => { 
        if (items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);

        //add timer to remove the bump class from the button after 300 sec(which is the duration of animation (see css file))

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false)
        }, 300);
        
        //cleanup function to clear the timer
        return () => {
            clearTimeout(timer)
        };
        
    }, [items]);

        return (
        <button className = {btnClasses} onClick={props.onClick}> 
            <span className = {classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className = {classes.badge}>{numberOfCartItems}</span>
        </button>
        )
}

export default HeaderCartButton;