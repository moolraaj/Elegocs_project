import React from 'react'

function TransformPartner() {
  return (
     <>
     {/*transformation section starts*/}

     <div className="home_transformation_wrapper">
                            <div className="trans_left_section">
                                <h1>{ele.acf.transformation_top_heading}</h1>

                            </div>
                            <div className="trans_right_section">
                                <div className="trans_flex">

                                    {ele.acf.transformation_repeater.map((items, index) => {
                                        return <div className="trans_items" key={index}>
                                            <div className="trans_number">
                                                <h4>{items.transformation_num_first}</h4>
                                                <h4>{items.transformation_num_second}</h4>
                                                <h4>{items.transformation_num_third}</h4>
                                                <h4>{items.transformation_num_fourth}</h4>
                                                <h4>{items.transformation_num_fifth}</h4>
                                                <h4>{items.transformation_num_sixth}</h4>
                                                <h4>{items.transformation_num_seventh}</h4>
                                                <h4>{items.transformation_num_eighth}</h4>
                                                <h4>{items.transformation_num_ninth}</h4>
                                            </div>
                                            <div className="trans_description">
                                                <ul>
                                                    <li>{items.transformation_sescription_first}</li>
                                                    <li>{items.transformation_sescription_second}</li>
                                                    <li>{items.transformation_sescription_third}</li>
                                                    <li>{items.transformation_sescription_fourth}</li>
                                                    <li>{items.transformation_sescription_fifth}</li>
                                                    <li>{items.transformation_sescription_sixth}</li>
                                                    <li>{items.transformation_sescription_seventh}</li>
                                                    <li>{items.transformation_sescription_eight}</li>
                                                    <li>{items.transformation_sescription_ninth}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    })


                                    }
                                </div>
                            </div>
                        </div>

                        {/*transformation section starts*/}
     </>
  )
}

export default TransformPartner