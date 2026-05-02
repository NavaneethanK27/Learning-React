function FoodList({name="noodles",price="100",quantity="10",image}){
    return(
        <di className="food">
       <h1>{name}</h1>
       <img src={image} alt="" />
       <h4>{price}</h4>
       <h5>{quantity}</h5>
       </di>
    );
}

export default FoodList