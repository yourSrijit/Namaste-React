import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearItem, removeItem } from '../redux/cartSlice';
import { ITEM_IMG_CDN_URL } from '../utils/constant';
import { toast } from 'react-toastify';

const Cart = () => {
    const dispatch=useDispatch();
    const cartItem=useSelector((store)=> store.cart.items);
    const [price,setPrice] =useState(0);

    // console.log(cartItem);                                   //⭐⭐⭐⭐

    //    //⭐⭐⭐⭐
    
    // if(localStorage.getItem("cart")){
    //     let getPreviousElementsLS=JSON.parse(localStorage.getItem("cart"));
    //     getPreviousElementsLS.map((res)=>{
    //         dispatch(addItem(res))
    //     })
    // }    

    // if(cartItem.length >0)
    // localStorage.setItem("cart",JSON.stringify(cartItem));
   

    // let getItemFromLocalStoarage=JSON.parse(localStorage.getItem("cart"));
    // console.log(getItemFromLocalStoarage);

    const handelTotalPrice=()=>{
        let ans=0;
        cartItem.map((item)=>{
            ans+=item?.price || 35900;
        })
        setPrice(ans/100);
    }  
    const handelRemove=(id)=>{
        const removeCartItem=cartItem.filter((item)=> item.id !=id);
        dispatch(clearItem());

        removeCartItem.map((item)=>{

            dispatch(addItem(item))
        })
        handelTotalPrice();
    }


    useEffect(()=>{
        handelTotalPrice();
    })
    
   console.log();
    return  (
        <div className='cartPage-body'>

       <div className='cartPage'>
       
           {cartItem?.map((item,index)=>(
            <div className='cart-box' key={index}>
                <div className='cart-box-img'>
                {item?.imageId && (
                <img src={ITEM_IMG_CDN_URL + item?.imageId} alt={item?.name}/>
                )}
                <p>{item.name}</p>
                </div>
                {/* <div>
                    <button> + </button>
                    <button> - </button>
                </div> */} 
                <div>
                    <span>₹ { item?.price/100 || 35900/100} </span>
                    <button onClick={()=>{
                    toast.success(`1 Item removed `, {
                    position:"bottom-right",
                    autoClose: 700
                    });
                    handelRemove(item.id);
                    }}> Remove </button>
                </div>
            </div>
           ))}
           <hr className='border'></hr>
           <br></br>
            <div className='total'>
                {
                    cartItem.length==0? <span>Go to Home Page to add to cart</span>:
                     <span>Total amount</span>
                }
           
            <span>₹ { price}</span>
            </div>
            
        </div>

        </div>
    );
}

export default Cart;
