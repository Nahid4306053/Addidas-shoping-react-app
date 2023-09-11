const getLocalstroragedata = () =>{
    if(localStorage.getItem('cart')){
        return JSON.parse(localStorage.getItem('cart'));
    }     
    else{
        return[]
    }           
}
const saveDatatolist = (card_items) =>{
    const savedata = JSON.stringify(card_items);
    localStorage.setItem("cart" ,savedata);   
}
const addtols = (card_data) =>{
    saveDatatolist(card_data);               
}

export {getLocalstroragedata , addtols };