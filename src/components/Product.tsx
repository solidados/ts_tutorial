import React, { useState } from "react"
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-blue-100' : 'bg-yellow-300'

    const btnClasses = ['py-1 px-10 border', btnBgClassName]

    return (
        <div className="wrapper">
            <div
                className="border py-2 px-4 rounded flex flex-col items-center mb-2">
                <p>{product.title}</p>
                <img src={product.image} className="w-1/6" alt={product.title} />


                <span className="font-bold">{product.price}</span>

                <button
                    className={btnClasses.join(' ')}
                    onClick={() => setDetails(prev => !prev)}
                >{details ? 'Hide details' : 'Show more'}</button>

                {details && <div>
                    <p>{product.description}</p>
                    <p>Rate: <span style={{
                        fontWeight: 900
                    }}>{product.rating.rate}</span></p>
                </div>}
            </div>
        </div>
    )
}