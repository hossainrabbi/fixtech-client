import React, { useState } from 'react';

const Service = ({ name, text, image }) => {
    const [seeMore, setSeeMore] = useState(false);

    return (
        <article className="service">
            <img src={image} alt={name} />
            <div className="service-info">
                <h5>{name}</h5>
                <p>
                    {seeMore ? `${text}` : `${text.substring(0, 50)}...`}
                    <button
                        className="btn read-more-btn"
                        onClick={() => setSeeMore(!seeMore)}
                    >
                        {seeMore ? 'Show Less' : 'Read more'}
                    </button>
                </p>
                <div className="text-center">
                    <button className="btn custom-btn">get Service</button>
                </div>
            </div>
        </article>
    );
};

export default Service;
