import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
const List = () => {
  const url = "http://localhost:3000";
  const [list, setList] = useState([]);

  const fetchList = async() => {

    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
      console.log(response.data);
    } else {
       alert("data can't be fetched")
    }
  }

 const removeFood = async (foodId) => {
  console.log(foodId);

  const response = await axios.delete(`${url}/api/food/remove`, {
    data: { id: foodId }
  });

   await fetchList();
   
   if (response.data.success) {
     alert(response.data.message);
   } else {
     alert(response.data.message);
   }
}

  useEffect(() => {
    fetchList();
  }, [])
  return (
      <div className='list add flex-col'>
      <p>All foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
       
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
               </div>
             )
        })}
      </div>
    </div>
  )
}

export default List