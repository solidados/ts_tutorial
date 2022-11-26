import React, { useState } from "react"
// import { isAsExpression } from "typescript"
import { IProduct } from "../models"
import Axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
    title: '',
    price: 23.5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quos!',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 4.2,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }
        productData.title = value

        const response = await Axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)

    }

    // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     setValue(event.target.value)
    // }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title"
                value={value}
                onChange={event => setValue(event.target.value)}
            // onChange={changeHandler}
            />

            {error && <ErrorMessage error={error} />}
            <button
                type="submit"
                className="py-2 px-4 border bg-yellow-300 hover:text-white">Create</button>
        </form>
    )
}