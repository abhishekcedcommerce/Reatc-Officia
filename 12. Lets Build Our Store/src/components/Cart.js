import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // only subscribe the smart portion of the store 
    const cartItems =useSelector((store) => store.cart.items);

    // it's not a good way to subscribe the redux store
    // const store = useSelector(store);
    // const cartItems = store.cart.items();


    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>

            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && (
                    <h1>Cart is Empty, Add few items in cart</h1>
                )}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}
export default Cart;