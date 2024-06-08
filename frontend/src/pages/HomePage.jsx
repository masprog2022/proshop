//import axios from "axios";
//import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import { useGetProductsQuery } from "../slices/productApiSlice";

const HomePage = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetProductsQuery( { pageNumber });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message 
        variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          {" "}
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
             pages={data.pages}
             page={data.page}
          />

         

        </>
      )}
    </>
  );
};

export default HomePage;

// const [products, setProducts] = useState([]);

/*useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []); */
