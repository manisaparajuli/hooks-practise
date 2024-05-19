import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetch() {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then( res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <input type="text" />
      <ul>
        {
          post.map(p => (
            <li key={p.id}> hello {p.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default DataFetch