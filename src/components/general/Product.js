import React from "react";
import { Card, Button } from "antd";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Product = ({ product, description, uploadImages, link }) => {
  return (
    <div style={{ padding: "10px" }}>
      <Link to={link}>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta title={product.name} description={description} />
          <Link className="btn btn-primary" to={uploadImages}>
            Add Images
          </Link>
        </Card>
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: propTypes.object.isRequired,
  //description: propTypes.func.isRequired,
  buttonName: propTypes.string,
};

export default Product;
