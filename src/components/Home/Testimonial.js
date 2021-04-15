import React from 'react';

const Testimonial = ({ name, title, desc, image }) => {
    return (
        <article>
            <img src={image} alt="" />
        </article>
    );
};

export default Testimonial;
