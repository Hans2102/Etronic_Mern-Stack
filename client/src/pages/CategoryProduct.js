import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
const CategoryProduct = () => {
  const params = useParams();
  const [cart, setCart] = useCart();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);
  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center">Danh mục - {category?.name}</h4>
        <h6 className="text-center">{products?.length} Sản phẩm </h6>
        <div className="row ">
          <div className="col-md-12">
            <div className="d-flex flex-wrap justify-content-center">
              {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <Link to={`/product/${p.slug}`}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  </Link>
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-price">
                        {p.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </h5>
                    </div>
                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                    className="btn btn-dark ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Thêm vào giỏ hàng thành công");
                    }}
                  >
                    Thêm vào giỏ hàng
                  </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Xem thêm"}
              </button>
            )}
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
