import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetch() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const[idFromButton, setIdFromButton] = useState(1)

  const handleClick = () => {
    setIdFromButton(id)
  }
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`).then( res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [idFromButton])
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)}/>
      <button type='button' onClick={handleClick}>Fetch post title</button>
      <p>{post.title}</p>
      {/* <ul>
        {
          post.map(p => (
            <li key={p.id}> hello {p.title}</li>
          ))
        }
      </ul> */}
    </div>
  )
}

export default DataFetch