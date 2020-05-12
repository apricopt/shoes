import React , {useState , createContext} from 'react';



export const CartContext = createContext();


export const CartProvider = (props) => {
    const [cart , setCart] = useState(
       { userID : "abcd123",
        product : [
        {
            productId: "harry potter",
            productName: "50$",
            productPrice: 454,
            productAmount: 232,
            productQuantity: 2,
            totalAmount: 343 ,
            contact: "",
            paid: true       

        } ],

        address: "here and there" ,
        grandTotal: 435,
        totalCarted: 0,
        sidebarStatus : false,
    }

      
    );






    return(
        <CartContext.Provider value={[cart , setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}