import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">{product.title}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Description:</h3>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
