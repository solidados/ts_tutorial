import { useEffect, useState } from 'react';
import { IProduct } from '../models';
import axios, {AxiosError} from 'axios';

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    // const AxiosError = require('axios-error');

    function addProduct (product: IProduct){
        setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true) /* перед началом загрузки значение = true */
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=7')
            setProducts(response.data)
            setLoading(false) /* после окончания загрузки значение = false */
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return { products, error, loading, addProduct }
}