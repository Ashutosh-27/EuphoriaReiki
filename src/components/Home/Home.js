import React from 'react'
// import Cards from './Cards.js'
import HomeCarousel from './HomeCarousel.js'
import AOS from 'aos';


const Home = () => {
    AOS.init()
    return (
        <>
            <div className='section1 header_poster-caption'>
                <section>
                    <div className="header_caption">
                        <div className="header-content">
                            <h1 className="header_content-title">Connect ~ Heal ~ Revive</h1>
                            <div className="header_content-subtitle">Hellooooo! Myself Dipali, a Reiki Master Healer, provider of traditional Reiki service of Dr. MIKAU USUI and just passionate about helping people to transform their lives and connect to their inner self  by overcoming negative aura afflicting their physical , emotional and spiritual health with the help of Reiki healing and let them experience  the  infinite bliss </div>
                            <div className='header_btns'>
                                <a className="header_button_one" href="https://thethirstysoul.com/1-1-treatments/"><button>Treatments</button></a>
                                <a className="header_button_two" href="https://thethirstysoul.com/reiki-and-magnified-healing-courses/"><button>Courses</button></a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <div className='header_form_container'>
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
                </div> */}
            </div>


            <div className="section2">
                <div className="section2_inner">

                    <h1 className='section2_title'>What is reiki</h1>

                    <p>Well many of you may have heard Reiki but do you really understand what Reiki means and what is its origin and why it is suggested as a complementary therapy by some of the medical practitioner? So lets us understand first the roots of the Reiki.

                    </p>

                    <p style={{ textAlign: "left" }}>Everywhere you will get this definition that, the term <strong>“Reiki” comes from the Japanese words “Rei”, which means Universal and “ki” which means Life force Energy</strong>. OK! That’s true though, but, as a layman its might hard for you to understand how this Universal Life Force Energy plays very vital role in our material and non-material life.

                    </p>

                    <p>Every creature on this planet is made of energy even non material things has energy which is actually sourced from Universal Life Force Energy and the mantra to stay healthy emotionally and physically is proper balance of this energy through nooks and corners of our body. Simply to give an example, as a kids we are always active and energetic  as this Universal energy is properly  balanced but as we grow old , we encounter  more stress which  hinders the smooth flow of this  life force energy which ultimately results in health illness where it can’t be reached upon .
                    </p>

                    <p style={{ textAlign: "left" }}>As a Reiki healer being conduit of this energy we remove these blockages, clear negative aura enlightens you with required Universal life force energy which as a result helps you to lessen the impact of stress, it also relieves tension from entire system helping  you to replenish and refocus embarking a striking unique balance in body, mind and spirit.<strong>It is also like with the onset of the Reiki treatment the body’s own healing mechanism starts functioning more efficiently. </strong>

                    </p>

                    <h1 className="section2_title">Is Reiki harmful?</h1>
                    <p>
                        As a newbie to Reiki ,the question whether Reiki will cause any harm will definitely dwindled across your mind .But let me assure you that with Reiki you only earn benefits to rejuvenated the inner being and will  never cause harm to  anyone either. Reiki works recognising healers’ strong intention and emotion of healing only.
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
                    <div className="sec3_part part1">
                        <h3>Conditions Reiki can Treat</h3>
                        <span>At physical and emotional level Reiki can treat the following illnesses:</span>
                        <div className="cards_container">
                            <div className="card card1" data-aos="zoom-out-right">
                                <ul>
                                    <li> Acidity</li>
                                    <li>Migraines;</li>
                                    <li>Asthma;</li>
                                    <li>Skin conditions;</li>
                                    <li>Flu/Colds;</li>
                                    <li>Ulcers;</li>
                                    <li>Diabetes</li>
                                    <li>Arthritis;</li>
                                </ul>

                            </div>

                            <div className="card card2" data-aos="zoom-out-left">
                                <ul>
                                    <li>Pregnancy;</li>
                                    <li>Back problems;</li>
                                    <li>Low Self Esteem;</li>
                                    <li>Poor Self Confidence;</li>
                                    <li>Grief;</li>
                                    <li>Anxiety;</li>
                                    <li>Depression;</li>
                                    <li>and many more~</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="sec3_part part2">
                        <h3>
                            Do You Need a Reiki Treatment?
                        </h3>

                        <div className="cards_container">
                            <div className="card card1" data-aos="fade-right" data-aos-offset="300" vdata-aos-easing="ease-in-sine">
                                <ul>
                                    <li>Ask yourself the following:</li>
                                    <li>Are you sick and tired of being tired and sick?</li>
                                    <li>Is your mind or body stressed?</li>
                                    <li>Are you feeling run down?</li>
                                    <li>Does your body feel like it needs to be nourished?</li>
                                    <li>Do you need to listen to your inner knowing?</li>
                                    <li>Do you feel like your head is in the clouds?</li>

                                </ul>

                            </div>

                            <div className="card card2" data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-delay="70"
    data-aos-duration="1000">
                                <ul>
                                    <li>Are you looking to reduce those nagging aches and pains?</li>
                                    <li>Do you have a racing mind from all those thoughts going around your head?</li>
                                    <li>Would you like a good night’s sleep?</li>
                                    <li>When was the last time you were deeply relaxed?</li>
                                    <li>Do you feel mentally or physically exhausted?</li>
                                    <li>Do you wish for some time just to relax?</li>
                                    <li>Are you looking for some inner peace?</li>
                                    <li>Would you like to connect to your own body?</li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    
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
                    <h2 className='section4_title'>Direct and Distance Healing</h2>

                    <p>In Direct Healing session we place our hands directly on affected area of your body so that energy flowing through our hands can get imbibed in your affected part. The flow of energy and duration is depends on your requirement of recovery. Most of the people think healing treatments are ‘in ‘ person’ form of only. </p>

                    <p><strong>Have you ever heard that the benefit of this healing treatment can be taken even from distance?</strong><br />
                        Let me enrich your knowledge with other form of Reiki treatment i.e Distance reiki Yes! Reiki treatment can be obtained even from distance and can be given to  to anyone across any corner of the world. If you are unable to make it in person for a reiki treatment, you can still receive a distance / remote healing session. It’s the exact same as receiving it in person so it means you can get the support you need</p>

                    <p>It is possible because energy is not confined and can transcend time and space so it is easily transmitted anywhere. Although at first it may be difficult to trust but, there are many instances where  people have actually benefitted and  have yielded good results <strong>These services can also be offered for the wellbeing of relatives or friends who may not be aware of the Reiki or its benefits and can help them to bring balance in their physical and emotional health </strong> . Just to narrate a simple example  myself have cured one of my relatives ‘chronic breathlessness and asthmatic trauma with distant Reiki in three sessions without being asked to be in a receptive position . Of course the time required for result to be achieved depends on nature of your problem as well as illness also.
                    </p>

                    <p>Learn how to shift your perspective and live from a place of love, compassion and gratitude.&nbsp; Appreciate the world around you and let nature nourish your body, mind and soul. Become aware of and break through your subconscious limitations. Restore balance, harmony and flow in you and your life.</p>

                    <p>Normally for physical or emotional issues at least for 21 to 45 days Reiki Sessions are required.<strong>However, Reiki can work magically even in lesser period as I explained earlier about my relative.</strong>
                    </p>

                    <div className="benefits_content">
                        <div className='benefits_content-inner'>


                            <div className="img_container">
                                <div className='heading_content'>
                                    <h4>Benefits of a Distant <br></br>Reiki</h4>
                                    <span>Distant healing offers the exact same benefits of an in person treatment. Yet, it means you have access to the benefits of a healing session whether you</span>
                                </div>
                            </div>
                            <div className='ul_container'>
                                <ul>
                                    <li>In a different country or don’t live nearby,</li>
                                    <li>Close but without transport,</li>
                                    <li>Housebound through illness etc,</li>
                                    <li>Working long and unsocial hours,</li>
                                    <li>Looking for support while you are under going surgery / treatment,</li>
                                    <li>Are looking for support around something that has unexpectedly happened</li>
                                    <li>You feel that you need healing and cannot wait for my next free appointment</li>

                                </ul>
                            </div>
                        </div>
                    </div>


                    <p>With distant reiki I can also help you to clean aura of your house, can bring balance in relationship with your loving ones, can also help your pets to come out of physical illness they are facing.</p>

                    <p>
                        Please note that you do not need to be into spirituality to enjoy the benefits of reiki. It can be requested for adults, children and babies.  Reiki can also foster significant help in coping with highly stressful situations such as surgery, exams, court cases etc, as well as reducing the side-effects of invasive treatments and accelerating recovery from serious illness or surgery.
                    </p>

                </div>
            </div>


            <div className="section5">
                <div className="section5_inner">
                    <h2 className='section5_title'>When Can You Have a Reiki Treatment?</h2>
                    <div className="section5_carousel-container">
                        <HomeCarousel />
                    </div>
                </div>
            </div>


            <section className='section6'>
                <div className="chakras_section">
                    <img src="./chakras2.jpg" alt='om' className='chakras_img' />
                    <div className='content_container'>
                        <h3 className='chakras_title'>Chakra Balancing:</h3>
                        <span className='chakras_span'>
                            <p>
                                We have 114 chakras (energy centers) in our Body out of which 7 are main Chakras (viz. Root Chakra, Sacral Chakra, Solar Plexus, Heart Chakra, Throat Chakra, Third Eye Chakra and Crown Chakra), balancing these 7 Chakras can benefit you in following ways:
                            </p>
                        </span>
                        <ul>
                            <li>Improved overall health and well being.</li>
                            <li>Greater and faster ability to heal your mental, physical, spiritual and emotional issues.</li>
                            <li>Increased openness, memory, concentration and awareness.</li>
                            <li>Positive outlook in terms of understanding, perception of behaviors and thought process.</li>
                            <li>Heightened creativity and better resourcefulness because of better perception.</li>
                            <li>Sense of self-worth, self-esteem and self- confidence.</li>
                            <li>Improved and deeper sleep, better control over your emotions and improved patience.</li>

                        </ul>
                        <span className='chakras_span'>
                            <p>
                                If you wish to balance 7 core chakras (energy centers) of your body and finding it difficult to achieve even after practicing various methods like meditation, changing eating habits etc., I can make 21 days package for you to balance it with the help of Reiki.
                            </p>
                        </span>
                    </div>
                </div>

                <div className="testimonials_section">
                    <div className="testimonial_section-inner">
                        <h3 className='testimonial_heading'>Testimonials</h3>
                        <div className="testimonials_cards">
                            <div className="testimonial_card">
                                <div className="card_img">
                                    <img src='./user.png' alt='user' />
                                </div>
                                <div className="card_body">
                                    <div className="username">Nami</div>
                                    <div className="review">
                                        <p>I believe if I can work through the heavy energy that there will be clarity about everything else. When I left you I saw light everywhere, my attention was drawn to trees.</p>
                                    </div>
                                    <div className="fonts_icos">
                                        <i class="bi bi-facebook"></i>
                                        <i class="bi bi-instagram"></i>
                                        <i class="bi bi-twitter"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial_card">
                                <div className="card_img">
                                    <img src='./user.png' alt='user' />
                                </div>
                                <div className="card_body">
                                    <div className="username">Nami</div>
                                    <div className="review">
                                        <p>I believe if I can work through the heavy energy that there will be clarity about everything else. When I left you I saw light everywhere, my attention was drawn to trees.</p>
                                    </div>
                                    <div className="fonts_icos">
                                        <i class="bi bi-facebook"></i>
                                        <i class="bi bi-instagram"></i>
                                        <i class="bi bi-twitter"></i>
                                    </div>
                                </div>
                            </div>


                            <div className="testimonial_card">
                                <div className="card_img">
                                    <img src='./user.png' alt='user' />
                                </div>
                                <div className="card_body">
                                    <div className="username">Nami</div>
                                    <div className="review">
                                        <p>I believe if I can work through the heavy energy that there will be clarity about everything else. When I left you I saw light everywhere, my attention was drawn to trees.</p>
                                    </div>
                                    <div className="fonts_icos">
                                        <i class="bi bi-facebook"></i>
                                        <i class="bi bi-instagram"></i>
                                        <i class="bi bi-twitter"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="sensation_section">
                    <div className="sensation_inner">
                        <h3>How you may feel during and after Reiki session:</h3>
                        <div className='span1'>
                            <p>During session people feel warm sensation, or tingling or even piercing. These are common experiences, some people may feel overwhelming emotions as well  while others don’t sense during session anything but experiences the good result of it.
                            </p>
                        </div>

                        <div className='span2'>
                            <p>
                                After session people mostly feels refreshed and rejuvenated, sometimes they may experience more tiredness, but nothing to worry as this is not any adverse reaction but body’s natural healing response towards the treatment. People commonly report a sense of calm and mental clarity and sleeping well after Reiki.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            <footer>
                <div className="footer_inner">
                    <div className='part1'>
                        <div className="img_container">
                        <img src='./user.png' alt='user'/>
                        </div>
                        
                        <div className='content'>
                            So I encourage you all to take benefits of my Reiki services and transform yourself to positivity , healthy and blissful life .
                        </div>
                    </div>
                    <div className="part2">
                        <h4>For consultation please prebook and reach <br/> out to me on.</h4>
                        <ul>
                            <li><i class="bi bi-whatsapp"></i> +91 xxxxx xxxxx </li>
                            <li> <i class="bi bi-instagram"></i> pitaleDipali</li>
                            <li><i class="bi bi-envelope"></i> pitaledipali@gamil.com</li>
                            <li><i class="bi bi-twitter"></i> Dipali Pitale</li>
                        </ul>
                    </div>
                </div>
                <div className="copy_right">
                    <h5>All copyrights reserved - Dipali Pitale</h5>
                </div>
            </footer>
        </>
    )
}

export default Home