import React, { useEffect, useState } from "react";
import { getLocalstroragedata } from "./Utils/Storecarditem";
import logo from './assets/logo.png'
import { Link } from "react-router-dom";
export default function Navbar({sharedData}) {
  const [getotlaItem , settotlaItem] = useState(getLocalstroragedata());
  useEffect(()=>{
   if(sharedData){
    settotlaItem(getLocalstroragedata());
   }
  },[sharedData])  
  return (
    <header className="bg-base-300 z-50 top-0 shadow-lg shadow-[#00000098] fixed w-full">  
      <div className="drawer"> 
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="container w-full navbar ">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-4xl font-bold "><Link className="flex" to="/"><img className="h-12" src={logo} alt="" /> Shoping</Link></div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                <Link to="/"><a>Home</a></Link>
                </li>
                <li>
                  <Link to="/cart"><a>Cart</a></Link>
                </li>
              </ul>
            </div>
            <Link to='/cart'><div className="relative ">   
              <span className="absolute rounded-lg -right-2 -top-2  bg-purple-950 text-[10px] font-bold min-h-[20px] min-w-[20px] flex justify-center items-center">{getotlaItem.length > 9 ? getotlaItem.length : `0${getotlaItem.length}`}</span>   
              <div className="">
              <i class="fa-solid fa-cart-shopping"></i> 
              </div>   
            </div></Link>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Etertainment</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}