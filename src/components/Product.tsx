import React from "react"
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{ product.title }</p>
            <span className="font-bold">{ product.price  }</span>
            <p className="px-2 py-5 text-center font-s">{ product.description }</p>
        </div>
    )
}