import React from 'react';

const Testimonial = ({ name, title, desc, image }) => {
    return (
        <article className="testimonial">
            <div className="author mb-3">
                <img src={image} alt={name} />
                <div className="author-title">
                    <h6>{name}</h6>
                    <p>
                        <small>{title}</small>
                    </p>
                </div>
            </div>
            <p> {desc}</p>
        </article>
    );
};

export default Testimonial;
