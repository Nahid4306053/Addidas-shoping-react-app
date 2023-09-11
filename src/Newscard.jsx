import React from "react";

export default function Newscard({addtols,product}) {
  const { id ,name , seller , price , stock , ratings , img} = product;
  return (
    <div className="card cursor-pointer  bg-base-100 shadow-xl">
    <figure   className="relative bg-white h-96 px-10 pt-10">
      <img  src={img ? img : "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f8d89293c9cb4bf08d52adb100f95a3a_9366/Steel_Metal_Bottle_2L_Black_EX7302_01_standard.jpg"} alt="Shoes" className="rounded-xl h-56" />
     <div className="absolute bg-purple-900 px rounded-lg top-2 right-3 text-white">
      <p>{seller}</p>
     </div>
    </figure>
    <div className="card-body  ">
      <h2 className="card-title">{name}</h2>
       <div className="flex flex-wrap justify-start gap-5"> <span><strong>Prize:</strong> ${price}</span>
      <span><strong>Stock:</strong> {stock}</span></div>
      <div className="card-actions"> 
        <button onClick={()=>addtols(id)} className="btn  rounded-none mt-2  btn-primary">Add to Cart</button>
      </div>
    </div> 
  </div>
  );
}
