'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'


const ProductList = () => {
    const searchParam = useSearchParams()
    // console.log("Client > ", searchParam);
    const product = searchParam.get('product')
    const brand = searchParam.getAll('brand')
    const price = searchParam.get('price')
    const processor = searchParam.get('processor')
    const generation = searchParam.get('generation')
    // console.log("Product : ", product , ", Brand : ", brand, ", Price : ", price, ", Processor : ", processor, ", Generation : ", generation);
    
    
    
    return (
        <div>
            {/* <h1>Client</h1> */}
        </div>
    )
}

export default ProductList