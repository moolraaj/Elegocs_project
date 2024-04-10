import { useEffect, useState } from 'react'

function Api() {
    const [result, setResult] = useState([])
    useEffect(()=>{
        
        let loadData=async()=>{
            let data=await fetch('https://www.eligocs.com/wp-json/wp/v2/posts')
            let resp=await data.json()
            setResult(resp)
            console.log(resp)
        }
        loadData()
    },[])


  return (
     <>
     <h1>this is a heading</h1>
     <h1>this is a second heading</h1>
     <h1>this is a third heading</h1>
     <h1>this is a wordpress app im working on </h1>
     <h1>this is a js course</h1>
     {
       result.map((ele)=>{
        return <ul key={ele.id}>
            <li>{ele.comment_status}</li>
        </ul>
       }) 
     }
     </>
  )
}

export default Api