import React from 'react'
import {useRouter} from 'next/router';

function ProductItem() {
    const {query: {id}} = useRouter();
    return (
        <div className=''>
            Esta la pagina de prueba del producto {id} xd
            
        </div>
    )
}

export default ProductItem
