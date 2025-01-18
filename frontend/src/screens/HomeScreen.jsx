import { Col, Row } from "react-bootstrap";
// import products from "../../products.js";
import Product from "../components/Product.jsx";
import { useGetProductsQuery } from "../slices/prouctApiSlice.js";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate.jsx";

function HomeScreen() {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    pageNumber,
    keyword,
  });
  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.data.message || error.error}</Message>
      ) : (
        <>
          <Row>
            {data?.products?.map((product, i) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={i}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword} />
        </>
      )}
    </>
  );
}

export default HomeScreen;
