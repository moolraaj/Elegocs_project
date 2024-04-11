import React, { useEffect, useState } from 'react'

function Home() {
     
const [result, setResult] = useState([])

const loadData=async()=>{
    let url = await fetch(`http://localhost/wordpress-headless/server/wp-json/wp/v2/pages?home`);
    let data=await url.json()
    setResult(data)
    console.log(data)

}

useEffect(()=>{
    loadData()
},[])
    return (
        <>
           
              {
                result.map((ele)=>{
                    return<>
                    <div className="home-slider-wrapper">
                        <h1>{ele.acf.slider_heading_first}</h1>
                        <h1>{ele.acf.slider_heading_second}</h1>
                        <p>{ele.acf.slider_para}</p>
                    </div>
                    </>
                })
              }       


          
        </>
    )
}

export default Home