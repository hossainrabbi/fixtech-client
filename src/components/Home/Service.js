import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const Service = ({ _id, name, description, price, imageURL }) => {
   const history = useHistory();
   const [isAdmin, setIsAdmin] = useState(false);
   const [loggend, setLoggend] = useContext(UserContext);

   const handleServiceClick = (id) => {
      history.push(`/dashboard/book/${id}`);
   };

   useEffect(() => {
      axios
         .get(`http://localhost:8000/admin?email=${loggend.email}`)
         .then((res) => {
            setIsAdmin(res.data);
         })
         .catch((err) => console.log(err));
   }, [loggend.email]);

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
                  disabled={isAdmin && true}
               >
                  get Service
               </button>
            </div>
         </div>
      </article>
   );
};

export default Service;
