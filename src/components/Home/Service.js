import React from 'react';

const Service = ({
    name,
    description,
    price,
    imageURL,
    statusBtn,
    btnName,
}) => {
    return (
        <article className="service mb-4">
            <img src={imageURL} alt={name} />
            <div className="service-info">
                <h6>{name}</h6>
                <p>{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">${price}</h6>
                    <button className={`btn custom-btn ${statusBtn}`}>
                        {btnName}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Service;
