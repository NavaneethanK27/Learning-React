import HTML from './assets/image1.png'  
import PropTypes from  'prop-types'

function Course({
    name="navanee",
    price="200",
    image=HTML,
    rating=5,

}){
   
    return(
       <div className="card">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
        <span>{rating}</span>
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