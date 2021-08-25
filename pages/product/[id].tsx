import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState("");


  useEffect(() => {
    fetch(`/api/avo/${query.id}`)
    .then(res => res.json())
    .then(response => {
      setProduct(response);
    })
  }, [query.id])

  return (
    <section>
      <h1>Página producto: {product.name}</h1>
    </section>
  )
}

export default ProductPage
