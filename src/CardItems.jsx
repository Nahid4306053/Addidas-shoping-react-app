import React, { useEffect, useState } from 'react'
import {getLocalstroragedata , addtols } from './Utils/Storecarditem'
export default function CardItems({shareData}) {
  const storedatas = getLocalstroragedata();
  const [getdatas , setDatas] = useState([]);
  

  const deleteitem = (id) => {
    const olddata = getLocalstroragedata();
    const update = olddata.findIndex((element) => element.id === id);
     olddata.splice(update , 1)
     addtols(olddata); 
     setDatas(getLocalstroragedata());   
     shareData(olddata);
  }
  useEffect(() => {  
    const fetchData = async () => {
      try {
        const getData = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json');
        const snapshort = await getData.json();
        const storeData = JSON.stringify(getLocalstroragedata());
        const finaldats = snapshort.filter((ele)=> storeData.includes(ele.id))
        setDatas(finaldats);   
      } catch (err) {  
        console.log(err);
      }    
    };        
    fetchData();    

  }, [deleteitem]); 
  return ( 
    <div className="container mt-20 mb-20">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-xl'>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product Img</th>
        <th>Product title</th>
        <th>Prize</th>
        <th>Stock</th>
        <th>Quntity</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {
        getdatas.length > 0 ? getdatas.map((ele ,index)=>{
          return(
            <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask  w-24 h-24">
                    <img src={ele.img  ? ele.img : "https://daisyui.com//tailwind-css-component-profile-2@56w.png"} />
                  </div>
                </div>
              </div>
            </td>
            <td> 
             {ele.name}
            </td>
            <td>${ele.price}</td>
            <td>{ele.stock}</td>
            <td>{storedatas.find((eles)=> eles.id === ele.id).qnt}</td>
            <th>
              <button onClick={()=>deleteitem(ele.id)} className="btn btn-ghost btn-xs bg-base-200">Delete</button>
            </th>
          </tr>
          )
        }) :"" 
       }   
    </tbody>  
  </table>
</div>
    </div>
  )
}
