function FoodList({name="noodles",price="100",quantity="10",image}){
    return(
        <div className="food">
       <h1>{name}</h1>
       <img src={image} alt="" />
       <h4>{price}</h4>
       <h5>{quantity}</h5>
       </div>
    );
}

export default FoodList