import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios"
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [food_list, setFoodlist] = useState([])
    const [cartitems, setcartitems] = useState({})
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")
    const addToCart = async (itemId) => {
        if (!cartitems[itemId]) {
            setcartitems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item)
                totalAmount += iteminfo.price * cartitems[item]
            }
        }
        return totalAmount;
    }
    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/get")
        setFoodlist(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get", {}, { headers: { token } })
        setcartitems(response.data.cartData);

    }
    useEffect(() => {

        async function loadData() {
            await fetchFoodList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    }, [])
    const contextvalue = {
        food_list,
        cartitems,
        addToCart,
        removeFromCart,
        setcartitems,
        getTotalCartAmount,
        url,
        token,
        setToken

    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;