import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className="relative">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper">


                <SwiperSlide>
                    <div className="relative">
                        <img src="/02.jpg" alt="" className="rounded-lg" />
                        <div className="absolute inset-0">
                            <div className="bg-black/60 p-96 rounded-lg">
                                <div className="text-white lg:text-left text-center absolute lg:bottom-32 bottom-5 lg:left-10 left-5 rounded-lg animate__animated animate__backInLeft">
                                    <h1 className="lg:text-4xl text-xl font-bold lg:mb-4 text-white">We will help you find <br />
                                        your <b className='text-green-500'>Wonderful</b> home</h1>
                                    <p className="text-sm">A great platform to buy, sell and rent your properties without any
                                        <br />    agent or commissions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="/01.jpg" alt="" className="rounded-lg" />
                        <div className="absolute inset-0">
                            <div className="bg-black/60 p-96 rounded-lg">
                                <div className="text-white lg:text-left text-center absolute lg:bottom-32 bottom-5 lg:left-10 left-5 rounded-lg animate__animated animate__backInLeft">
                                    <h1 className="lg:text-4xl text-xl font-bold lg:mb-4 text-white">We will help you find <br />
                                        your <b className='text-green-500'>Wonderful</b> home</h1>
                                    <p className="text-sm">A great platform to buy, sell and rent your properties without any
                                        <br />    agent or commissions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="/03.jpg" alt="" className="rounded-lg" />
                        <div className="absolute inset-0">
                            <div className="bg-black/60 p-96 rounded-lg">
                                <div className="text-white lg:text-left text-center absolute lg:bottom-32 bottom-5 lg:left-10 left-5 rounded-lg animate__animated animate__backInLeft">
                                    <h1 className="lg:text-4xl text-xl font-bold lg:mb-4 text-white">We will help you find <br />
                                        your <b className='text-green-500'>Wonderful</b> home</h1>
                                    <p className="text-sm">A great platform to buy, sell and rent your properties without any
                                        <br />    agent or commissions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>


    );
}
