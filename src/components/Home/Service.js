import React from 'react';
import { useHistory } from 'react-router';

const Service = ({ _id, name, description, price, imageURL, btnName }) => {
   const history = useHistory();

   const handleServiceClick = (id) => {
      history.push(`/dashboard/book/${id}`);
   };

   return (
      <article className="service mb-4">
         <img src={imageURL} alt={name} />
         <div className="service-info">
            <h6>{name}</h6>
            <p>{description}</p>
            <div className="d-flex justify-content-between align-items-center">
               <h6 className="mb-0">${price}</h6>
               <button
                  className="btn custom-btn"
                  onClick={() => handleServiceClick(_id)}
               >
                  get Service
               </button>
            </div>
         </div>
      </article>
   );
};

export default Service;
