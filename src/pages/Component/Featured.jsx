import { MdOutlineElectricBolt } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
    const [propertyData, setPropertyData] = useState([]);
    const [displayLimit, setDisplayLimit] = useState(3); // by default load 3 data

    useEffect(() => {
        fetch('/FakeData.json')
            .then(response => response.json())
            .then(data => setPropertyData(data))
            .catch(error => console.error('Error fetching data: ', error))
    }, []);

    const handleLoadMore = () => {
        setDisplayLimit(propertyData.length);
    };

    return (
        <section className="feature-section sec-pad bg-color-1 rounded-lg">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <h5>Features</h5>
                    <h2 className="mb-6">Featured Property</h2>
                    <p>A featured property is a paid real estate listing that's shown in a way <br /> that's different from other listings.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {propertyData.slice(0, displayLimit).map(property => (
                        <div
                            key={property.id}
                            className="feature-block-one wow fadeInUp animated animated"
                            data-wow-delay="300ms"
                            data-wow-duration="1500ms"
                            style={{
                                visibility: 'visible',
                                animationDuration: '1500ms',
                                animationDelay: '300ms',
                                animationName: 'fadeInUp'
                            }}
                        >
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image" style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                        <img src={property.image} alt={property.estate_title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </figure>
                                    <div className="batch"><MdOutlineElectricBolt className="mt-3 text-xl" /></div>
                                    <span className="category">Featured</span>
                                </div>
                                <div className="lower-content h-full">
                                    <div className="title-text mt-4">
                                        <h4>
                                            <Link to={`/property-details/${property.id}`} className="font-bold">{property.estate_title}</Link>
                                        </h4>
                                    </div>
                                    <div className="price-box flex">
                                        <div className="price-info text-left">
                                            <h6>Start From</h6>
                                            <h4 className="text-green-500 font-bold">{property.price}</h4>
                                        </div>
                                    </div>
                                    <p>{property.description}</p>
                                    <ul className="more-details flex text-left mb-10">
                                        <li className="flex items-center">
                                            <div className="flex items-center mr-1"> {property.other_info.bedrooms} Beds</div>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex items-center mr-1"> {property.other_info.bathrooms} Baths</div>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex items-center mr-1">{property.area}</div>
                                        </li>
                                    </ul>
                                    <div className="btn-box mt-auto">
                                    <Link to={`/property-details/${property.id}`} className="theme-btn btn-one">View Property</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {displayLimit !== propertyData.length && (
                    <div className="more-btn text-center mt-6"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                        style={{
                            visibility: 'visible',
                            animationDuration: '1500ms',
                            animationDelay: '300ms',
                            animationName: 'fadeInUp'
                        }}
                    >
                        <button onClick={handleLoadMore} className="theme-btn btn-one">Load More</button>
                    </div>
                )}
            </div>
        </section >
    );
};

export default Featured;
