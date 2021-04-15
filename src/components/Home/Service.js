import React, { useState } from 'react';

const Service = ({ name, text, price, image }) => {
    const [seeMore, setSeeMore] = useState(false);

    return (
        <article className="service">
            <img src={image} alt={name} />
            <div className="service-info">
                <h6>{name}</h6>
                <p>
                    {seeMore ? `${text}` : `${text.substring(0, 50)}...`}
                    <button
                        className="btn read-more-btn"
                        onClick={() => setSeeMore(!seeMore)}
                    >
                        {seeMore ? 'Show Less' : 'Read more'}
                    </button>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">${price}</h6>
                    <button className="btn custom-btn">get Service</button>
                </div>
            </div>
        </article>
    );
};

export default Service;
