import axios from 'axios'
import { useEffect, useState } from 'react'

const App = ()=>{

  const [title,setTitle] = useState('')
  const[description,setDescription ] = useState('')

  const handleBtn=async()=>{
    await axios.post('http://localhost:8080/',({
      title: title,
      description: description
    }))
  }

  return(
    <>
      <input type="text" onChange={e=>{setTitle(e.target.value)}} placeholder='title'/>
      <input type="text" onChange={e=>{setDescription(e.target.value)}} placeholder='description'/>
      <button onClick={handleBtn}>Submit</button>

      <GetData/>
    </>
  )
}

const GetData= ()=>{

  const [handleTitle,setHandleTitle] = useState([])

useEffect(()=>{
  const anotherGet =async()=>{
    const data =await axios.get('http://localhost:8080/getData')
    setHandleTitle(data.data)
    console.log(data.data)
  }
  anotherGet()
},[])

  return(
    <>{
       handleTitle.map((item)=>{
        return(
          <>
             <p>{item.title}</p>
             <p>{item.description}</p>
          </>
        )
       })
     } </>
  )
}

export default App