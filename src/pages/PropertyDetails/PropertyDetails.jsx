import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Subscribe from "../Component/Subscribe";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const PropertyDetails = () => {
    const { id } = useParams(); //ID from the URL

    const [propertyData, setPropertyData] = useState(null);
    const idInt = parseInt(id);

    useEffect(() => {
        fetch('/FakeData.json')
            .then(response => response.json())
            .then(data => {
                const foundProperty = data.find(property => property.id === idInt);
                document.title = foundProperty.estate_title;
                setPropertyData(foundProperty); // Set the found property data
            })
            .catch(error => console.error('Error fetching data: ', error))
    }, [idInt]);

    console.log(propertyData);

    return (
        <div>
            <Header></Header>
            <section className="page-title-two bg-color-1 text-center">
                <div className="pattern-layer">
                    <div className="pattern-1 md:hidden" style={{ backgroundImage: "url(/shape-3.png)" }}></div>
                    <div className="pattern-2 md:hidden" style={{ backgroundImage: "url(/shape-4.png)" }}></div>
                </div>
                <div className="auto-container">
                    <div className="content-box text-center">
                        <h1 className="text-2xl md:text-4xl">Property Details</h1>
                    </div>
                </div>
            </section>



            {propertyData && (
                <div className="flex justify-center animate__animated  animate__lightSpeedInRight">
                    <div className="card w-full md:w-6/12 bg-base-100 shadow-xl mt-4 p-4">
                        <figure><img src={propertyData.image} alt={propertyData.estate_title} /></figure>
                        <div className="card-body">
                            <div className="mb-5">
                                <b className="card-title">
                                    {propertyData.estate_title}
                                    <div className="badge badge-secondary">{propertyData.status}</div>
                                    <h3 className="text-lg md:text-xl">{propertyData.price}</h3>
                                </b>
                                <br />
                                <p>{propertyData.description}</p>
                            </div>
                            <hr className="my-5" />
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className="card-actions mb-4 md:mb-0"><b>Location:</b> {propertyData.location}</div>
                                <div className="card-actions"><b>Facilities:</b> {propertyData.facilities.join(', ')}</div>
                            </div>
                            <hr className="my-5" />
                            <div className="other-info">
                                <h4>Other Information:</h4>
                                <br />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ lineHeight: '2' }}>
                                    <ul>
                                        <li><b>Bedrooms:</b> {propertyData.other_info.bedrooms}</li>
                                        <li><b>Bathrooms:</b> {propertyData.other_info.bathrooms}</li>
                                        <li><b>Year Built:</b> {propertyData.other_info.year_built}</li>
                                    </ul>
                                    <ul>
                                        <li><b>Garage:</b> {propertyData.other_info.garage}</li>
                                        <li><b>Area:</b> {propertyData.area}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}






            <Subscribe></Subscribe>
            <Footer></Footer>
        </div >
    );
};

export default PropertyDetails;