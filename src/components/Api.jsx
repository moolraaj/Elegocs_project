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
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit maiores saepe laborum nemo quaerat totam excepturi quod, officia deserunt. Incidunt vero doloremque accusantium laboriosam non quae id ipsum aperiam fuga! Laborum dolores ipsa dolorum illo neque dolore debitis consectetur nulla numquam amet, expedita libero dignissimos eligendi tempora mollitia quas dolor natus, explicabo nostrum, illum ab quasi sunt. Iste rerum maiores error quasi exercitationem beatae perspiciatis dolorum nisi sapiente aliquam corporis reiciendis possimus adipisci, sunt, atque numquam. Iusto facilis tempore dolorum eos consectetur assumenda eius cum aperiam aliquam unde porro saepe, earum eum, architecto qui perspiciatis, quos consequatur officia aspernatur culpa. Quo vero eos accusamus mollitia quidem officia ea ullam minima eligendi quasi dolore facilis accusantium, atque possimus odio, nam voluptates asperiores! Aperiam harum iure velit suscipit qui doloremque quas! Non officiis fugit voluptas illum quos similique et repudiandae maiores explicabo, mollitia, odio optio aliquid fuga pariatur, incidunt placeat est? Tempora vel aut natus. Consequuntur ratione consectetur excepturi pariatur quas, nostrum, ex similique perferendis quod laborum fugiat, sapiente alias sint ut optio minus eaque veritatis! At rerum corporis consectetur? Laboriosam reiciendis repudiandae, praesentium ipsa inventore tempore assumenda eaque omnis earum sapiente quaerat officia sequi dolorem est nostrum nulla animi illo!z
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