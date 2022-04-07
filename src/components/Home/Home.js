import React from 'react'
import Cards from './Cards.js'
import HomeCarousel from './HomeCarousel.js'

const Home = () => {
    return (
        <>
            <div className='section1 header_poster-caption'>
                <section>
                    <div className="header_caption">
                        <div className="header-content">
                            <h1 className="header_content-title">Journey within: </h1>
                            <span className="header_content-subtitle">Nourish. Connect. Grow.</span>
                            <div className='header_btns'>
                                <a className="header_button_one" href="https://thethirstysoul.com/1-1-treatments/"><button>Treatments</button></a>
                                <a className="header_button_two" href="https://thethirstysoul.com/reiki-and-magnified-healing-courses/"><button>Courses</button></a>
                            </div>

                        </div>
                    </div>


                </section>
                <div className='header_form_container'>
                    <div>
                        <div className='form_text_container'>
                            <div className="form_text_inner">
                                <p>
                                    <span style={{ color: "#ffffff" }}>Join the Thirsty Soul Community<br />
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className='header_form'>
                            <form>
                                <input type='text' className='input_name' placeholder='name' />
                                <input type='text' className='input_email' placeholder='email' />
                                <button className='header_form_btn'>SignUP</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section2">
                <div className="section2_inner">

                    <h1 className='section2_title'>Welcome</h1>

                    <p>I’m Roseleen, a
                        <a href="/">Shamanic Healing Facilitator</a>
                        who works with people who are seeking to reconnect to their inner wisdom, embrace the natural rhythms of life and are ready transform their lives. With over 14 years of experiencing leading trainings and sessions, I hold deep healing containers for you to meet yourself.
                    </p>

                    <p style={{ textAlign: "left" }}>This is a place to begin the journey of cultivating your life from the inside out. A space for you to go inward, to heal, reclaim your truth and empower yourself.
                    </p>

                    <p>Healing / Spirituality is not somewhere else or something reserved for those ‘woo-hoo’ types, but is right here in our ordinary everyday life. Healing is for everyone. My past experience as an Accountant / Auditor enables me to make the mystical grounded, practical and also experiential and personal to you as there is no one fits all approach.

                    </p>

                    <p style={{ textAlign: "left" }}>As a guide &amp; teacher for those who wish to train and grow in the art of healing, I offer an embodied approach, bringing healing into everyday living as we are called at this time to ground into ourselves and place in this world.
                    </p>

                    <p style={{ textAlign: "left" }}>Through my
                        <a href="/" target="_blank" rel="noopener noreferrer">1-1 Sessions</a>,
                        <a href="/">Reiki Trainings</a>, <a href="/">Walking the Celtic Wheel</a> &amp;
                        <a href="/">Reiki Sanctuary</a>,
                        and retreats I invite you to experience healing for yourself.
                    </p>

                </div>
            </div>


            <div className="section3">
                <div className='top_wavy'>
                    <div className="custom-shape-divider-bottom-1649262176">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>



                <div className='section3_main'>
                    <h3>My Offerings</h3>
                    <Cards />
                </div>


                <div className='bottom_wavy'>
                    <div className="custom-shape-divider-top-1649262009">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>

            </div>



            <div className="section4">
                <div className="section4_inner">
                    <h2 className='section4_title'>We have lost touch with our natural way of being, our true nature</h2>

                    <p>We’re surrounded in a culture of constant&nbsp;busyness and there is so much pressure to keep busy, to keep up, to have more, do more and be more that we judge, doubt, push and compare ourselves, in an attempt to find happiness and peace.</p>

                    <p>As a result, life at this fast pace is emotionally, mentally and physcially exhausting and usually unfulfilling. Our focus ends up on the ever growing to-do lists and reponsibilities that we lose sight of what it truly means to live and to be in our true nature. What is means to be connected to the things that truly matter.</p>

                    <p><strong>Through my offerings it’s my intention to gently guide and support you to reconnect with yourself </strong>in addition to your intuition and your inner wisdom; connections between your bodies, minds and soul; connections to other people, a sense of belonging and community ; connections to living things, to nature, to the universe and the natural cycle of life.</p>

                    <p>Learn how to shift your perspective and live from a place of love, compassion and gratitude.&nbsp; Appreciate the world around you and let nature nourish your body, mind and soul. Become aware of and break through your subconscious limitations. Restore balance, harmony and flow in you and your life.</p>

                    <p><strong>My mission is to empower individuals to know that they can access their ‘best teacher’ within. </strong>True change comes from within and when we learn to truly listen to ourselves, we are empowered to make choices that support us in our day to day life.</p>

                    <p>As a Life Coach, <a title="Reiki" href="https://thethirstysoul.com/reiki/">Reiki Master &amp; Teacher</a> , <a href="https://thethirstysoul.com/1-1-treatments/shamanic-healing/">Shamanic Practitioner</a> and <a title="Magnified Healing" href="https://thethirstysoul.com/magnified-healing/">Magnified Healing </a>practitioner as well as a qualified Chartered Accountant, I have a practical approach but also know that there are just some things that our ‘minds’ cannot heal and that is the beauty of energy healing.</p>
                </div>
            </div>


            <div className="section5">
                <div className="section5_inner">
                    <h2 className='section5_title'>Testimonials</h2>
                    <div className="section5_carousel-container">
                        <HomeCarousel />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home