

const CtaSection = () => {
    return (
<div>
    <section className="cta-section bg-color-2 rounded-lg mt-8 animate__animated animate__backInRight">
        <div className="pattern-layer" style={{ backgroundImage: 'url(/shape-2.png)' }}></div>

        <div className="auto-container">
            <div className="inner-box flex flex-col md:flex-row items-center md:justify-between">
                <div className="text text-left mb-4 md:mb-0">
                    <h2>Looking to Buy a New Property or <br />Sell an Existing One?</h2>
                </div>
                <div className="btn-box text-left md:text-right">
                    <a href="#" className="theme-btn btn-three mb-2 md:mb-0 md:mr-2">Rent Properties</a>
                    <a href="#" className="theme-btn btn-one">Buy Properties</a>
                </div>
            </div>
        </div>
    </section>
</div>


    );
};

export default CtaSection;