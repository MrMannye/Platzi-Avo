import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data)
      })
  }, [])

  return (
    <Layout>
      <Head>
        <title>Avocados</title>
        <meta property="og:title" content="Platzi Avocado" />
        <meta name="description" property='og:description' content="Pagina de Avocados con NextJS" />
        <meta name="description" property='og:image' content="/images/maluma.jpg" />
      </Head>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
