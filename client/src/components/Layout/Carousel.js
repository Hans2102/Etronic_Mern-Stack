import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div id="productCarousel" className="carousel slide carousel-full-width" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#productCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#productCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#productCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner font-SamsungOne darkened">
                <div className="carousel-item active">
                    <img src="https://images.samsung.com/is/image/samsung/assets/vn/2208/pfs/01-hd02-B4-kv-pc-1440x640.jpg?imwidth=1366" className="d-block w-100" />
                    <div className="carousel-caption">
                        <h5>Tuần lễ vàng</h5>
                        <p>Điện thoại giá chỉ từ 2.090.000đ</p>
                        <p><Link to="/category/dien-thoai" className="rounded-pill px-4 btn btn-light">Mua ngay</Link></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/tablets/matepad-pro-12-6-plp.jpg" className="d-block w-100" />
                    <div className="carousel-caption">
                        <h5>Ra mắt máy tính bảng thế hệ mới</h5>
                        <p>Thiết kế mỏng nhẹ | Màn hình sắc nét | Hiệu năng đỉnh</p>
                        <p><Link to="/category/tablet" className="rounded-pill px-4 btn btn-light">Mua ngay</Link></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://aws-obg-image-lb-1.tcl.com/content/dam/brandsite/region/vietnam/homepage/key-feature-tab/tivi-c845_pc_vn.jpg" className="d-block w-100" />
                    <div className="carousel-caption">
                        <h5>TV Qled UHD 4K</h5>
                        <p>Siêu màn hình - Đỉnh trải nghiệm</p>
                        <p><Link to="/category/tv" className="rounded-pill px-4 btn btn-light">Mua ngay</Link></p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    )
}

export default Carousel