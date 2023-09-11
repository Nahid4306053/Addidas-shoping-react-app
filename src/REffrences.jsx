import React, { useEffect, useRef } from 'react'

export default function REffrences() {
  const myref = useRef(null);    
   useEffect(()=>{
      console.log(myref.current.attributes);              
   })                
  return (
    <div className="container  pb-lg">
         <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ex. Aliquid repellendus quidem nam, libero voluptatum harum, consequatur, optio nemo minima totam blanditiis enim ipsam reiciendis voluptatibus nostrum porro quo quia deleniti! Tenetur saepe pariatur, ipsum accusamus provident consectetur nisi temporibus similique iusto omnis labore et illum nihil incidunt magni!</p>  
         <ul className='mt-4 list-disc ml-4'>
        <li>The Great Gatsby - F. Scott Fitzgerald</li>
        <li>To Kill a Mockingbird - Harper Lee</li>
        <li>1984 - George Orwell</li>
        <li>Pride and Prejudice - Jane Austen</li>
        <li>The Catcher in the Rye - J.D. Salinger</li>
        <li >Harry Potter and the Sorcerer's Stone - J.K. Rowling</li>
        <li ref={myref} className='helow' typeof='' aria-disabled>The Lord of the Rings - J.R.R. Tolkien</li>
        <li>The Hitchhiker's Guide to the Galaxy - Douglas Adams</li>
        <li>The Alchemist - Paulo Coelho</li>
        <li>The Hunger Games - Suzanne Collins</li>
    </ul>
    </div> 
  ) 
}
