import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




const HomeCarousel = () => {
    const UserImg = 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
    return (
        <div>
            <OwlCarousel className='owl-theme'
                loop
                nav
                navSpeed={500}
                margin={40}
                mouseDrag
                touchDrag
                autoWidth
                autoplay
                autoplayTimeout={4000}
                autoplayHoverPause
                autoplaySpeed={1000}
                center
            >
                <div className="testimonial_card">
                    <div className="card_img">
                        <img src={UserImg} alt='user'/>
                    </div>
                    <div className="card_body">
                        <h5 className="username">Jane</h5>
                        <div className="review">
                            <p>When I heard about ‘The Thirsty Soul’ from a friend, the name alone had me curious and interested. I had completed reiki level 1 the previous year with a different teacher and was on the lookout for a place to continue to level 2. After attending a women’s circle and also a reiki share evening with Roseleen I knew this was my route to level </p>
                        </div>
                    </div>
                </div>


                <div className="testimonial_card">
                    <div className="card_img">
                        <img src={UserImg} alt='user'/>
                    </div>
                    <div className="card_body">
                        <h5 className="username">Denial</h5>
                        <div className="review">
                            <p>After 4 sessions with her I feel so much better within myself, I have positive energy again, I feel motivated again & I feel so cleared of negativity. It has been such a powerful & positive experience for me. Roseleen is so welcoming & friendly and has a real talent to heal. I would definitely recommend her! </p>
                        </div>
                    </div>
                </div>

                <div className="testimonial_card">
                    <div className="card_img">
                        <img src={UserImg} alt='user'/>
                    </div>
                    <div className="card_body">
                        <h5 className="username">Shawn</h5>
                        <div className="review">
                            <p>Roseleen knows her stuff! I felt so comfortable in her company as she creates a wonderful calm environment for learning, healing and expanding as a person. Completing reiki 2 with Roseleen has given me a new confidence with my reiki </p>
                        </div>
                    </div>
                </div>

                <div className="testimonial_card">
                    <div className="card_img">
                        <img src={UserImg} alt='user'/>
                    </div>
                    <div className="card_body">
                        <h5 className="username">Brook</h5>
                        <div className="review">
                            <p>I have felt personally and seen with my fellow students.  Thank you Roseleen for such dedicated teaching, your continued support and guidance are greatly appreciated and I look forward to continuing my journey with you in the future.</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial_card">
                    <div className="card_img">
                        <img src={UserImg} alt='user'/>
                    </div>
                    <div className="card_body">
                        <div className="username">Nami</div>
                        <div className="review">
                            <p>I believe if I can work through the heavy energy that there will be clarity about everything else. When I left you I saw light everywhere, my attention was drawn to trees with lights and all manner of lights on the way home so I took it as a sign I am on the right path! I’m so grateful for your abilities, your time, authenticity and care.</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial_card">
                    <div className="card_img">
                        <img src={UserImg} alt='user'/>
                    </div>
                    <div className="card_body">
                        <h5 className="username">Jane</h5>
                        <div className="review">
                            <p>When I heard about ‘The Thirsty Soul’ from a friend, the name alone had me curious and interested. I had completed reiki level 1 the previous year with a different teacher and was on the lookout for a place to continue to level 2. After attending a women’s circle and also a reiki share evening with Roseleen I knew this was my route to level </p>
                        </div>
                    </div>
                </div>

            </OwlCarousel>



        </div>
    )
}

export default HomeCarousel