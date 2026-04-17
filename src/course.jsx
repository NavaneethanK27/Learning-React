import { useState } from 'react';
import HTML from './assets/image1.png'  
import PropTypes from  'prop-types'

function Course({
    name="navanee",
    price="200",
    image=HTML,
    rating=5,
    ondelete,
}){
    function cclick(discount){
       console.log(name,"purshed",discount,"discount",)
       setpurshase(true);
       console.log(purshase);
    }
    
    const [purshase,setpurshase]=useState(false);
    return(
        name &&
        <div className="card">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
        <span>{rating}</span>
        <button onClick={()=>cclick(30)}>buy</button>
        <p>{purshase?"Already purshase":"not"}</p>
        <button onClick={ondelete}>Delete</button>
       </div>
    );
}

Course.propTypes={
    name : PropTypes.string,
    rating : PropTypes.number,
    show : PropTypes.bool,
    price : PropTypes.string,
    image :PropTypes.string
}


export default Course