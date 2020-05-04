import React, { createContext, useState } from 'react';
import { CartProvider } from './CartContext'
import { ProductProvider } from './Products'

export const GlobalContext = createContext();

export const GloabalProvider = props => {


    return (
        <GlobalContext.Provider value={"hello"}>
            <ProductProvider>
                <CartProvider>
                    {props.children}
                </CartProvider>
            </ProductProvider>
        </GlobalContext.Provider>
    )
}