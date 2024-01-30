
export const CartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newList = [...state.cartItems];
            const existingItemIndex = newList.findIndex(item => item.idSanPham === action.payload.idSanPham);
            
            if (existingItemIndex >= 0) {
              const existingItem = newList[existingItemIndex];
              if(existingItem.qty < existingItem.soLuong) {
                  newList[existingItemIndex] = { ...existingItem, qty: existingItem.qty + 1 };
              }
            } else {
              const product = {
                ...action.payload,
                qty: 1,
              };
              console.log('ADD_TO_CART', { product });
              newList.push(product);
            }
            
            console.log(newList);
            localStorage.setItem('cartItems', JSON.stringify(newList));
            
            return {
              ...state,
              cartItems: newList,
            };
        }            
        
        case 'DELETE_TO_CART': {
            let newList = [...state.cartItems]
            const exists = newList.find(item => item.idSanPham === action.payload.idSanPham)
            if (exists.qty === 1) {
                newList = newList.filter((item) => item.idSanPham !== exists.idSanPham)
            }else{
                newList = newList.map((item) => item.idSanPham === action.payload.idSanPham ? { ...exists, qty: exists.qty - 1 } : item)
            }
    
            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList
            };
        }
            
        case 'DELETE_QTY_PRODUCT': {
            let newList = [...state.cartItems]
            
            newList = newList.filter((item) => item.idSanPham !== action.payload.idSanPham)
            
            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList
            };
        }

        case 'CART_EMTY':{
            return {...state, cartItems: []}
        }
        default:
            return state;
    }

}

