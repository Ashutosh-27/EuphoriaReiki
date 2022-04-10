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
                autoplayTimeout={4000}
                autoplayHoverPause
                autoplaySpeed={1000}
                center
            >
                <div className="section5_card">
                    <p>
                        1. Reiki does not have to be a stand-alone treatment. The beauty of reiki is that it can also be used:
                    </p>
                </div>


                <div className="section5_card">
                    <p>
                        2. When you are not ill but want a relaxing treatment; As a relaxation treatment
                    </p>
                </div>

                <div className="section5_card">
                    <p>
                        3. When you just want a pick me up or to boost your energy levels; Boost Energy Levels
                    </p>
                </div>

                <div className="section5_card">
                    <p>
                        4. When you just want a pick me up or to boost your energy levels; Boost Energy Levels
                        When you are on medication; While on medication

                    </p>
                </div>

                <div className="section5_card">
                    <p>
                        5. When you are going for surgery (before, during and after) Before ,During and After Surgery. When you are in hospital; When you are hospitalized

                    </p>
                </div>

                <div className="section5_card">
                    <p>
                        6. When you are pregnant or trying to become pregnant; or
                        with other complimentary therapies. Trying to conceive or with any alignment or with any  other complementary therapies
                    </p>
                </div>







            </OwlCarousel>



        </div>
    )
}

export default HomeCarousel