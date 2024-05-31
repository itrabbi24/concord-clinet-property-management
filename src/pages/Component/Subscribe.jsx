
const Subscribe = () => {
    return (
        <div>

            <div className="container relative lg:mt-4 mt-16 lg:pt-24 pt-16 animate__animated animate__bounceInRight">
                <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('/map.png')] bg-no-repeat bg-center bg-cover"></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Trusted by more than 10K users</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span className="counter-value" data-target="1548">1548</span>+</h1>
                        <h5 className="counter-head text-lg font-medium">Properties Sell</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span className="counter-value" data-target="25">25</span>+</h1>
                        <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span className="counter-value" data-target="9">9</span>+</h1>
                        <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                    </div>
                </div>
            </div>


            <section className="subscribe-section bg-color-3 mt-4 rounded-lg animate__animated animate__backInUp">
                <div className="pattern-layer" style={{ backgroundImage: 'url(/subscribe.png)' }}></div>
                <div className="auto-container">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="text-column">
                            <div className="text">
                                <span>Subscribe</span>
                                <h2>Sign Up To Our Newsletter To Get The Latest News And Offers.</h2>
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-inner">
                                <form action="#" method="post" className="subscribe-form">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Enter your email" required autoComplete="off" />
                                        <button type="submit">Subscribe Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Subscribe;