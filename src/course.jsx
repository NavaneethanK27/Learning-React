import HTML from './assets/image1.png'  
const course1="HTML"
function Course({
    name="navanee",
    price="200",
    image=HTML
}){

    return(
       <div className="card">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
       </div>
    );
}

Course.defaultProps = {
   name : "navanee",
   price: "200",
   image :  HTML
}


export default Course