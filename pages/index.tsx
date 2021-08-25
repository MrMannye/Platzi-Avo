import React, { useState, useEffect} from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/api/avo')
    .then(response => response.json())
    .then(response => {
      setProductList(response.data);
    })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      <ul>
        {
          productList.map(key => {
            return(
                <li>{key.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default HomePage
