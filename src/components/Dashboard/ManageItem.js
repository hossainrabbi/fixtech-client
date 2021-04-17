import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ManageItem = ({ name, price }) => {
   return (
      <tr>
         <td>{name}</td>
         <td>${price}</td>
         <td>
            <button className="delete-btn text-danger">
               <FontAwesomeIcon icon={faTrash} />
            </button>
         </td>
      </tr>
   );
};

export default ManageItem;
