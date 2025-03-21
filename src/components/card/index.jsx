import "./styles.css";
import {Heart} from 'lucide-react';


export function Card({ imgUrl, name, description, price }) {
  return (
    <div className="card">
     
      <img src={imgUrl} alt={name} className="product-img" />
      <div className="fav-btn">
        <Heart size={18} color='#ff3536' fill="#ff3536" className="fav-icon"/>
      </div>
      

      <div className="products-details">
        <h1>{name}</h1>
        <p>{description}</p>
        <strong>{price}</strong>
      </div>
      <button className="checkout-btn" type="button">Comprar agora</button>
    </div>
  );
}
