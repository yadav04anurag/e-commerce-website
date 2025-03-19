import React, { useContext ,useEffect,useState} from 'react'
import Tittle from "../components/Tittle";
import { Shopcontext } from '../context/shopcontext';
function CartTotal({data}) {
    const {currency,delivery_fee,getCartAmount}=useContext(Shopcontext);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
      const fetchTotal = async () => {
        const total = await getCartAmount(); // Ensure `getCartAmount()` is async-safe
        setCartTotal(total);
      };
    
      fetchTotal();
    }, [data]); // Recalculate when cart changes
    
    return (
      <div className="w-full">
        <div className="text-2xl">
          <Tittle text1={'CART'} text2={'TOTALS'} />
        </div>
    
        <div className="flex flex-col gap-2 mt-2 text-sm">
          {/* Subtotal */}
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{currency}{cartTotal.toFixed(2)}</p>
          </div>
    
          <hr />
    
          {/* Shipping Fee */}
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{currency}{delivery_fee.toFixed(2)}</p>
          </div>
    
          <hr />
    
          {/* Total */}
          <div className="flex justify-between">
            <b>Total</b>
            <b>{currency}{(cartTotal + delivery_fee).toFixed(2)}</b>
          </div>
        </div>
      </div>
    );
}

export default CartTotal