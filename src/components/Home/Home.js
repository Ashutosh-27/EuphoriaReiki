import React from 'react'
import { useState } from 'react';
import Footer from './Footer.js';
import Typewriter from 'typewriter-effect';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar.js';
import headimg1 from '../images/headimg1.jpg'

const Home = () => {

    const [Modal, setModal] = useState(false)

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/treatment`;
        navigate(path);
    }

    return (
        <>
            <div className='section1 header_poster-caption'>
                <section>
                    <Navbar />
                    <div className="header_caption">
                        <div className="header-content">
                            <div className="header_content-subtitle">Welcome to Euphoria Reikhi
                            </div>
                            <h1 className="header_content-title"><Typewriter
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString("Connect")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Heal')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Revive')
                                        .pauseFor(1000)
                                        .start();
                                }}
                            /></h1>

                            <div className='header_btns'>
                                <Link className="header_button_one" to="/treatment"><button>Treatments</button></Link>
                            </div>
                        </div>
                        <div className="head_images">
                            <img src={headimg1} alt='headimg'/>
                        </div>
                    </div>
                </section>
            </div>

            <div className="header-content2">
                <div className="header-content2_inner">
                    <div className="video"></div>
                    <div className="content">
                        <h2 className="title">You're good at something <br /> Let's monetize it.</h2>
                        <hr />
                        <div className="info">
                            Hellooooo! Myself Dipali, a Reiki Master Healer, provider of traditional Reiki service of Dr. MIKAU USUI and just passionate about helping people to transform their lives and connect to their inner self by overcoming negative aura afflicting their physical , emotional and spiritual health with the help of Reiki healing and let them experience  the  infinite bliss .

                        </div>
                    </div>

                </div>
            </div>


            <div className="section2">
                <div className="section2_inner">
                    <div className="sec2_head">
                        <h2>Contents</h2>
                    </div>
                    <div className="sec2_cards">
                        <div className='section2_card' id='sec2_card1'>
                            <div className='sec2_card-content' onClick={() => { setModal(true) }}>
                                <h2>What is Reiki</h2>
                                <span>You might be Enthusiastic to know about Reiki</span>
                                <button>Click to Preview</button>
                            </div>
                        </div>
                        <div className='section2_card' id='sec2_card2'>
                            <div className='sec2_card-content' onClick={ routeChange }>
                                <h2>Treatements</h2>
                                <span>You might be Enthusiastic to know about Reiki</span>
                                <button>Click to Preview</button>
                            </div>
                        </div>

                        <div className='section2_card' id='sec2_card3'>
                            <div className='sec2_card-content' onClick={() => { setModal(true) }}>
                                <h2>Distant Reiki</h2>
                                <span>You might be Enthusiastic to know about Reiki</span>
                                <button>Click to Preview</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`Modal1 ${(Modal) ? 'active' : 'inactive'}`}>
                    <div className={`modal1_content ${(Modal) ? 'active' : 'inactive'}`}>
                        <div className="close_modal">
                            <button onClick={() => { setModal(false) }}><i className="bi bi-x-lg"></i></button>
                        </div>
                        <p>Well many of you may have heard Reiki but do you really understand what Reiki means and what is its origin and why it is suggested as a complementary therapy by some of the medical practitioner? So lets us understand first the roots of the Reiki.

                        </p>

                        <p style={{ textAlign: "left" }}>Everywhere you will get this definition that, the term <strong>“Reiki” comes from the Japanese words “Rei”, which means Universal and “ki” which means Life force Energy</strong>. OK! That’s true though, but, as a layman its might hard for you to understand how this Universal Life Force Energy plays very vital role in our material and non-material life.

                        </p>

                        <p>Every creature on this planet is made of energy even non material things has energy which is actually sourced from Universal Life Force Energy and the mantra to stay healthy emotionally and physically is proper balance of this energy through nooks and corners of our body. Simply to give an example, as a kids we are always active and energetic  as this Universal energy is properly  balanced but as we grow old , we encounter  more stress which  hinders the smooth flow of this  life force energy which ultimately results in health illness where it can’t be reached upon .
                        </p>

                        <p style={{ textAlign: "left" }}>As a Reiki healer being conduit of this energy we remove these blockages, clear negative aura enlightens you with required Universal life force energy which as a result helps you to lessen the impact of stress, it also relieves tension from entire system helping  you to replenish and refocus embarking a striking unique balance in body, mind and spirit.<strong>It is also like with the onset of the Reiki treatment the body’s own healing mechanism starts functioning more efficiently. </strong>

                        </p>

                        <h1 className="title">Is Reiki harmful?</h1>
                        <p>
                            As a newbie to Reiki ,the question whether Reiki will cause any harm will definitely dwindled across your mind .But let me assure you that with Reiki you only earn benefits to rejuvenated the inner being and will  never cause harm to  anyone either. Reiki works recognising healers’ strong intention and emotion of healing only.
                        </p>
                    </div>
                </div>
            </div>








            <Footer />
        </>
    )
}

export default Home