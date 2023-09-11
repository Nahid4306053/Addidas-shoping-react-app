import React, { useEffect, useState } from "react";
import Newscard from "./newscard";
import { getLocalstroragedata , addtols} from './Utils/Storecarditem'
export default function Newses({shareData}) { 
  const [news , setnews] = useState();
                
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json');
        const snapshort = await getData.json();
        setnews(snapshort)
      } catch (err) {
        console.log(err);
      }    
    };   
    fetchData();
  }, []); 

  const addtocard = (id) => {
    const olddata = getLocalstroragedata();
    const gotitem = olddata.find((ele) => ele.id === id); 
    if (gotitem) {   
      const qntsw = gotitem.qnt + 1;
      const cardtyitem = {
        id: id,
        qnt: qntsw,
      };
      const update = olddata.findIndex((element) => element.id === id);
       olddata.splice(update , 1 , cardtyitem)
      addtols(olddata);    
    } else {  
      const cardtyitem = {   
        id: id,
        qnt: 1,
      };    
      const update = [...olddata , cardtyitem]
      addtols(update);  
    }
    shareData(olddata)
  };
  
   
  return (      
    <div className="container">
      <div className="grid mb-14 gap-14 mt-28   lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {news ? news.map((ele, index)=>{
         return(
          <>
           <Newscard addtols={addtocard} key={index} product={ele}  />
          </>
         )
        })
         :
        <div className="col-span-full flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>}
      </div>
    </div>
  );
}
