import React, { useEffect, useState } from 'react'
import Testimonial from './Testimonial'

function Home() {

    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [scrolling, setScrolling] = useState([])
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };




    const loadData = async () => {
        setLoading(true)
        let url = await fetch(`http://localhost/wordpress-headless/server/wp-json/wp/v2/pages/?slug=home`);
        let data = await url.json()
        setResult(data)
        setLoading(false)
        console.log(data)


    }



    useEffect(() => {
        loadData()


        const scrollHandler = () => {
            let posY = window.scrollY;
            let positions = result.map((_, index) => posY + index * window.innerHeight);
            setScrolling(positions);
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [])
















    return (
        <>

            {
                loading ? <h1>Please wait loading........</h1> : result.map((ele) =>
                    <div className='home_wrapper' key={ele.id}>
                        <div className="page_outer home_section_outer">
                            <div className="page_inner home_section_inner">
                                <div className="home_slider_wrapper">
                                    <h1>{ele.acf.slider_heading_first}</h1>
                                    <h1>{ele.acf.slider_heading_second}</h1>
                                    <p>{ele.acf.slider_para}</p>
                                </div>
                            </div>
                        </div>


                        {/*about us section starts*/}

                        <div className="page_outer about_section_outer">
                            <div className="page_inner about_section_inner">
                                <div className="home_about_wrapper">
                                    <div className="home_about_left">
                                        <h1>{ele.acf.about_heading}</h1>
                                    </div>
                                    <div className="home_about_right">
                                        <p dangerouslySetInnerHTML={{ __html: ele.acf.about_para_first }}></p>
                                        <p dangerouslySetInnerHTML={{ __html: ele.acf.about_para_second }}></p>
                                    </div>


                                </div>
                            </div>

                        </div>


                        {/*about us section ends*/}


                        {/*transformation section starts*/}

                        <div className="page_outer transform_section_outer">
                            <div className="page_inner transform_section_inner">
                                <div className="home_transformation_wrapper">
                                    <div className="trans_flex">
                                        <div className="trans_left_section">
                                            <h1>{ele.acf.transformation_top_heading}</h1>

                                        </div>
                                        <div className="trans_right_section">


                                            {ele.acf.transformation_repeater.map((items, index) => {
                                                return <div className="trans_items" key={index}>
                                                    <div className="trans_number">
                                                        <ul className='transformation_wrapper'>
                                                            <li>
                                                                <h4>{items.transformation_num_first}</h4>
                                                            </li>
                                                            <li>
                                                                <a href="" className="trans_redirecttion">{items.transformation_sescription_first}</a>
                                                            </li>
                                                        </ul>
                                                        <ul className='transformation_wrapper'>
                                                            <li>
                                                                <h4>{items.transformation_num_second}</h4>
                                                            </li>
                                                            <li>
                                                                <a href="" className="trans_redirecttion">{items.transformation_sescription_second}</a>
                                                            </li>
                                                        </ul>
                                                        <ul className='transformation_wrapper'>
                                                            <li><h4>{items.transformation_num_third}</h4></li>
                                                            <a href="" className="trans_redirecttion">{items.transformation_sescription_third}</a>
                                                        </ul>
                                                        <ul className='transformation_wrapper'>
                                                            <li> <h4>{items.transformation_num_fourth}</h4></li>
                                                            <li> <a href="" className="trans_redirecttion">{items.transformation_sescription_fourth}</a></li>
                                                        </ul>
                                                        <ul className='transformation_wrapper'>
                                                            <li> <h4>{items.transformation_num_fifth}</h4></li>
                                                            <li><a href="" className="trans_redirecttion">{items.transformation_sescription_fifth}</a></li>
                                                        </ul>
                                                        <ul className='transformation_wrapper'>
                                                            <li> <h4>{items.transformation_num_sixth}</h4></li>
                                                            <li><a href="" className="trans_redirecttion">{items.transformation_sescription_sixth}</a></li>
                                                        </ul>

                                                        <ul className='transformation_wrapper'>
                                                            <li> <h4>{items.transformation_num_seventh}</h4></li>
                                                            <li> <a href="" className="trans_redirecttion">{items.transformation_sescription_seventh}</a></li>
                                                        </ul>
                                                        <ul className='transformation_wrapper'>
                                                            <li><h4>{items.transformation_num_eighth}</h4></li>
                                                            <li> <a href="" className="trans_redirecttion">{items.transformation_sescription_eight}</a></li>
                                                        </ul>
                                                        <ul className='transformation_wrapper'>
                                                            <li><h4>{items.transformation_num_ninth}</h4></li>
                                                            <li>  <a href="" className="trans_redirecttion">{items.transformation_sescription_ninth}</a></li>
                                                        </ul>

                                                    </div>


                                                </div>


                                            })


                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*transformation section starts*/}





                        {/*company section starts*/}
                        <div className="page_outer  company_section_outer">
                            <div className="page_inner company_section_inner">
                                <div className="home_company_wrapper">
                                    <div className="company_flex">
                                        <div className="company_left_section">
                                            <h1>{ele.acf.our_company_heading}</h1>
                                            <p>{ele.acf.our_company_para}</p>


                                        </div>
                                        <div className="company_right_section">


                                            {ele.acf.our_compnay_repeater.map((items, index) => {
                                                return <div className="company_items" key={index}>
                                                    <div className="company_scroll_wrapper">

                                                        <div className="company_faq_qrapper">
                                                            <div className="company_question">
                                                                <h4>{items.hosted_content_title}</h4>
                                                            </div>
                                                            <div className="company_answers">
                                                                <p>{items.hosted_content_description}</p>
                                                            </div>
                                                        </div>

                                                        <div className="company_faq_qrapper">
                                                            <div className="company_question">
                                                                <h4>{items.international_clients_title}</h4>
                                                            </div>
                                                            <div className="company_answers">
                                                                <p>{items.international_clients_description
                                                                }</p>
                                                            </div>
                                                        </div>

                                                        <div className="company_faq_qrapper">
                                                            <div className="company_question">
                                                                <h4>{items.discussion_title}</h4>
                                                            </div>
                                                            <div className="company_answers">
                                                                <p>{items.discussion_description}</p>
                                                            </div>
                                                        </div>


                                                        <div className="company_faq_qrapper">
                                                            <div className="company_question">
                                                                <h4>{items.customer_success_title}</h4>
                                                            </div>
                                                            <div className="company_answers">
                                                                <p>{items.customer_success_description}</p>
                                                            </div>
                                                        </div>

                                                        <div className="company_faq_qrapper">
                                                            <div className="company_question">
                                                                <h4>{items.self_learning_title}</h4>
                                                            </div>
                                                            <div className="company_answers">
                                                                <p>{items.self_learning_description}</p>
                                                            </div>
                                                        </div>

                                                        <div className="company_faq_qrapper">
                                                            <div className="company_question">
                                                                <h4>{items.scoping_discovery_project_name}</h4>
                                                            </div>
                                                            <div className="company_answers">
                                                                <p>{items.scoping_discovery_project_description}</p>
                                                            </div>
                                                        </div>



                                                    </div>

                                                </div>



                                            })


                                            }

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>






                        {/*company process section ends*/}




                        {/*our development process starts*/}
                        <div className="page_outer development_section_outer">
                            <div className="page_inner development_section_inner">
                                <div className="home_development_wrapper">
                                    <div className="development_flex">
                                        <div className={`development_left_section ${window.scrollY <= scrolling[0] ? 'sticky' : ''}`}>
                                            <h1>{ele.acf.our_development_heading}</h1>


                                        </div>
                                        <div className="development_right_section">


                                            {ele.acf.our_development_repeater.map((items, index) => {
                                                return <div className="development_items" key={index}>
                                                    <div className={`development_scroll_wrapper `}>



                                                        <div className={`development_scroll ${window.screenY <= scrolling[index] ? 'sticky' : ''}`} style={{ top: index * 100 + 'vh' }}>

                                                            <div className="develop_number">
                                                                <h4>{items.planning_number}</h4>
                                                            </div>
                                                            <div className="develop_heading">
                                                                <h4>{items.planning_title}</h4>
                                                            </div>
                                                            <div className="develop_para">
                                                                <p>{items.planning_description}</p>
                                                            </div>

                                                        </div>


                                                        <div className={`development_scroll ${window.screenY <= scrolling[index] ? 'sticky' : ''}`} style={{ top: index * 100 + 'vh' }}>

                                                            <div className="develop_number">
                                                                <h4>{items.design_number}</h4>
                                                            </div>
                                                            <div className="develop_heading">
                                                                <h4>{items.design_title}</h4>
                                                            </div>
                                                            <div className="develop_para">
                                                                <p>{items.design_description}</p>
                                                            </div>

                                                        </div>

                                                        <div className={`development_scroll ${window.screenY <= scrolling[index] ? 'sticky' : ''}`} style={{ top: index * 100 + 'vh' }}>

                                                            <div className="develop_number">
                                                                <h4>{items.development_number}</h4>
                                                            </div>
                                                            <div className="develop_heading">
                                                                <h4>{items.development_title}</h4>
                                                            </div>
                                                            <div className="develop_para">
                                                                <p>{items.development_description}</p>
                                                            </div>

                                                        </div>


                                                        <div className={`development_scroll ${window.screenY <= scrolling[index] ? 'sticky' : ''}`} style={{ top: index * 100 + 'vh' }}>

                                                            <div className="develop_number">
                                                                <h4>{items.testing_number}</h4>
                                                            </div>
                                                            <div className="develop_heading">
                                                                <h4>{items.testing_title}</h4>
                                                            </div>
                                                            <div className="develop_para">
                                                                <p>{items.testing_description}</p>
                                                            </div>

                                                        </div>

                                                        <div className={`development_scroll ${window.screenY <= scrolling[index] ? 'sticky' : ''}`} style={{ top: index * 100 + 'vh' }}>

                                                            <div className="develop_number">
                                                                <h4>{items.review_number}</h4>
                                                            </div>
                                                            <div className="develop_heading">
                                                                <h4>{items.review_title}</h4>
                                                            </div>
                                                            <div className="develop_para">
                                                                <p>{items.review_description}</p>
                                                            </div>

                                                        </div>


                                                        <div className={`development_scroll ${window.screenY <= scrolling[index] ? 'sticky' : ''}`} style={{ top: index * 100 + 'vh' }}>

                                                            <div className="develop_number">
                                                                <h4>{items.launch_number}</h4>
                                                            </div>
                                                            <div className="develop_heading">
                                                                <h4>{items.launch_title}</h4>
                                                            </div>
                                                            <div className="develop_para">
                                                                <p>{items.launch_description}</p>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                            })

                                            }


                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>



                        {/*our development process ends*/}


                        {/*testimonial section starts*/}

                        <div className="page_outer testimonial_section_outer">
                            <div className="page_inner testimonial_section_inner">
                                <div className="home_testimonial_wrapper">
                                    <div className="testimonial_flex">
                                        <div className="testimonial_left_section">
                                            <h1>testimonials
                                                from our
                                                valued clients</h1>
                                        </div>
                                        <div className="testimonial_right_section">
                                            <div className="testimonial_inner_flex">

                                                <Testimonial
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>






                        {/*testimonial section ends*/}



                        <div className="page_outer quote_section_outer">
                            <div className="page_inner quote_section_inner">
                                <div className="home_quote_wrapper">
                                    <div className="qoute_para">
                                        <p>{ele.acf.quote_para}</p>
                                    </div>
                                    <div className="quote_button">
                                        <button className="quote_redirection">
                                            get a quote
                                        </button>
                                    </div>


                                    </div>
                                    </div>
                                    </div>



                    </div>


                )
            }











        </>
    )
}

export default Home