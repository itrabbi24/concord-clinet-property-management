import { FaRegBuilding } from "react-icons/fa";
import { FaBuildingColumns, FaBuildingShield } from "react-icons/fa6";
import { RiBuilding2Line } from "react-icons/ri";
import { LiaBuilding } from "react-icons/lia"



const Category = () => {
    return (
        <>



            <section className="category-section centred text-center">
                <div className="auto-container">
                    <div className="inner-container wow slideInLeft animated animated"
                        style={{
                            visibility: 'visible',
                            animationDuration: '1500ms',
                            animationDelay: '0ms',
                            animationName: 'slideInLeft'
                        }}
                    >

                        <div className="category-list grid grid-cols-1 lg:grid-cols-5">
                            <div className="category-block-one mb-4">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <FaRegBuilding />
                                    </div>
                                    <h5 className="icon-box-title">Residential</h5>
                                    <span>52</span>
                                </div>
                            </div>
                            <div className="category-block-one mb-4">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <FaBuildingColumns />
                                    </div>
                                    <h5 className="icon-box-title">Commercial</h5>
                                    <span>20</span>
                                </div>
                            </div>
                            <div className="category-block-one mb-4">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <FaBuildingShield />
                                    </div>
                                    <h5 className="icon-box-title">Apartment</h5>
                                    <span>35</span>
                                </div>
                            </div>
                            <div className="category-block-one mb-4">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <RiBuilding2Line />
                                    </div>
                                    <h5 className="icon-box-title">Industrial</h5>
                                    <span>10</span>
                                </div>
                            </div>
                            <div className="category-block-one mb-4">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <LiaBuilding />
                                    </div>
                                    <h5 className="icon-box-title">Building Code</h5>
                                    <span>27</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default Category;