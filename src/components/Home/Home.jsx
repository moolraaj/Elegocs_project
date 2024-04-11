import React, { useEffect, useState } from 'react'

function Home() {
     
const [result, setResult] = useState([])

const loadData=async()=>{
    let url=await fetch(process.env.REACT_APP_HOME_PAGE_URL + "/wp-json/wp/v2/pages")
    let data=await url.json()
    setResult(data)
    console.log(data)

}

useEffect(()=>{
    loadData()
},[])
    return (
        <>
            <div className="home-outer">
                <div className="home-inner">
                    <div className="slider-section">
                        <div className="headlines">
                            <h1>Mastering technology </h1>
                            <h1> tomorrow’s Challenges </h1>
                            <p>Eligo Creative Services App & Web Design, Development Company</p>
                        </div>
                        <div className="innovation">
                            <h1>INNOVATION</h1>
                        </div>
                    </div>
                </div>
            </div>


            {
                result.map((ele)=>{
                    
                    return(
                        <>
                            <h1>{ele.title.rendered}</h1>
                            <h1>{ele.acf.page_description}</h1>
                        </>
                    )

                })
            }
        </>
    )
}

export default Home