import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




const HomeCarousel = () => {
    // const UserImg = 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
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
                autoplayTimeout={3000}
                autoplayHoverPause
                autoplaySpeed={1000}
                center
            >
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
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter"></i>
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
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter"></i>
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
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter"></i>
                        </div>
                    </div>
                </div>




            </OwlCarousel>



        </div>
    )
}

export default HomeCarousel