import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Home</h1>
      <div className="row">
        {products.slice(0, 4).map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description.substring(0, 50)}...
                </p>
                <p className="card-text">Price: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
