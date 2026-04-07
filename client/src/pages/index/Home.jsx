import React, { Fragment, useEffect, useState } from 'react'
import Silde from '../../components/slider/silde';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import AddProduct from '../../until/cart';
import { useUser } from '../../until/userContext';
export default function Home() {
    AddProduct();
    const [data,setData] = useState([]);
    const {user} = useUser();

const coupons = [
  {
    coupon_name: "SON50K",
    discount_amount: 50,
    remaining_count: 100,
    description: "Giảm ngay 50.000đ cho đơn son môi từ 300.000đ",
    value: 50000,
    expiry_date: "15-07-2025"
  },
  {
    coupon_name: "SKINCARE100K",
    discount_amount: 100,
    remaining_count: 80,
    description: "Ưu đãi 100.000đ cho đơn hàng mỹ phẩm dưỡng da từ 600.000đ",
    value: 100000,
    expiry_date: "25-07-2025"
  },
  {
    coupon_name: "MAKEUP20%",
    discount_amount: 20,
    remaining_count: 50,
    description: "Giảm 20% cho tất cả sản phẩm trang điểm",
    value: 20000, // có thể lưu theo % hoặc quy đổi ra tiền
    expiry_date: "30-07-2025"
  },
  {
    coupon_name: "COMBO150K",
    discount_amount: 150,
    remaining_count: 30,
    description: "Giảm ngay 150.000đ khi mua combo chăm sóc da toàn diện từ 800.000đ",
    value: 150000,
    expiry_date: "10-08-2025"
  }
];

    const handleSaveCoupon = (coupon) => {
        console.log('đã click')
        if(!user){
            console.log('ko lưu đk')
            toast.error(`Hãy đăng nhập để lưu mã giảm giá!`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else{ 
            if(coupon.remaining_count === 0){
                toast.error(`Mã giảm giá này đã hết số lượng!`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
            }
            const savedCoupons = JSON.parse(localStorage.getItem("coupons")) || [];
            savedCoupons.push({ ...coupon, id_user:user.id });
            localStorage.setItem("coupons", JSON.stringify(savedCoupons));
            toast.success(`Mã giảm giá "${coupon.coupon_name}" đã được lưu!`, {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    };

    const loadData = async() =>{
        const response = await axios.get("http://localhost:5000/api/top5products");
        setData(response.data);
    };

    useEffect(()=>{
        loadData();

    },[]);

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };  

      
  return (
        <Fragment>
            <div className="main">
                <Silde/>
                <section id="section-discounts">
                    <div className="container">
                    <div className="section-discounts-wrapper">
                    <div className="homepage-coupon-card">
                        {coupons.map((coupon, index) => (
                        <div key={index} className="coupon-card-item">
                        <div className="coupon-card-item-top">
                            <div className="description-amount">
                            <div className="coupon-card-limit">(Còn {coupon.remaining_count} lượt)</div>
                            <p>Giảm {coupon.discount_amount}K</p>
                            </div>
                            <div className="description-info">
                            <p>{coupon.description}</p>
                            <p style={{ display: "none" }}>{coupon.value}</p>
                            </div>
                        </div>
                        <div className="coupon-card-item-bottom">
                            <span className="coupon-card-coupon">{coupon.coupon_name}</span>
                            <span
                            className="btn btnluuma"
                            onClick={() => handleSaveCoupon(coupon)}
                            style={{ cursor: "pointer" }}
                            >
                            Lưu mã
                            </span>
                        </div>
                        </div>
                    ))}

                    </div>
                    </div>
                </div>
                </section>
                <section className="homepage-search">
                    <div className="container-medium">
                        <div className="homepage-search-wrapper">
                            <h2 className="homepage-search-heading"> Bạn tìm gì hôm nay? </h2>
                            <div className="homepage-search-inner">
                                <form action="/spotlight" method="GET">
                                    <input type="text" name="keyword" placeholder="Hãy thử bắt đầu với son môi ?" className="homepage-search-control"/>
                                    <button className="homepage-search-submit">
                                        <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="homepage-search-content">
                                <p className="home-search-description"> Từ khóa nổi bật ngày hôm nay</p>
                                <div className="homepage-search-buttons">
                                    <a href="#" className="homepage-search-button">Son môi</a>
                                    <a href="#" className="homepage-search-button">Kem dưỡng da</a>
                                    <a href="#" className="homepage-search-button">Sữa rửa mặt</a>
                                    <a href="#" className="homepage-search-button">Nước hoa</a>
                                    <a href="#" className="homepage-search-button">Mặt nạ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                <div className="container1">
                <div className="homepage-product__heading">Sản phẩm được yêu thích</div>
                    <div className="product-type">
                        <div className="row">
                            {/* Sản phẩm mẫu */}
                            

                            {/* Render sản phẩm từ dữ liệu */}
                            {data.map((item) => (
                                <div key={item.ma_san_pham} className="col p-2-4">
                                    <div id={`${item.ma_san_pham}`} className="product">
                                        <div className="product-img-wrap" style={{ marginBottom: '8px' }}>
                                            <Link to={`/detail/${item.ma_san_pham}`} className="product-img product-img--small">
                                                <img className="product-img-1" src={item.anh_sanpham} alt="" />
                                                <img className="product-img-2" src={item.anhhover1} alt="" />
                                            </Link>
                                            <div className="product-size">
                                                <p>Thêm nhanh vào giỏ hàng +</p>
                                                <div className="btn btn--size">Thêm vào giỏ hàng</div>
                                            </div>
                                        </div>
                                        <div className='product-grid__reviews'>
                                            <div className='reviews-rating'>
                                                <div className='reviews-rating__vote'>5.0</div>
                                                <div className='reviews-rating__star'></div>
                                                <div className='reviews-rating__number'>({item.total_quantity})</div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div style={{ display: 'none' }} className="product-content__option ">
                                                <div className="product-content__option-item-wrap active">
                                                    <span data={item.mau_sac}></span>
                                                </div>
                                            </div>
                                            <a className="product-name">{item.ten_san_pham}</a>
                                            <div className="product-price-wrap">
                                                <div className="product-price">{formatCurrency(item.gia)}</div>
                                            </div>
                                            <div className="product-discount">
                                                {item.thongbao}
                                            </div>
                                            <div className="sale-tag product-tag">{item.sale}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                </section>
                <section className="homepage-basic">
                    <div className="homepage-basic__wrapper">
                        <div className="homepage-basic__content">
                            <h2>
                                Đặt mỹ phẩm nhanh nhận ngàn ưu đãi
                            </h2>

                            <a href="#" className="btn-primary"> Mua ngay</a>
                        </div>
                        <div className="homepage-basic__image">
                            <a href="#">
                                <picture style={{width: '100%'}}>
                                    <img  style={{width: '100%'}} src="../Images/bookproduct.jpg" alt=""/>
                                </picture>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="homepage-care-and-share">
                    <div className="container--full">
                        <div className="homepage-care-and-share__inner">
                            <a href="#">
                                <div className="homepage-care-and-share__image">
                                    <picture>
                                        <img src="../Images/care and share.png" alt=""/>
                                    </picture>
                                </div>
                                <div className="homepage-care-and-share__content">
                                    <picture>
                                        <img src="https://mcdn.coolmate.me/image/March2023/mceclip8.png" alt=""/>
                                    </picture>
                                    <h2>
                                        Góp phần mang lại <br/> cuộc sống tươi đẹp 
                                        <br className="mobile--hidden"/>
                                        hơn cho tụi nhỏ
                                    </h2>
                                    <div className="btn--primary"> Tìm hiểu thêm về Care&Share</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </section>

           <section className="homepage-hashtag">
            <div className="container--full">
                <div className="homepage-hashtag__inner">
                    <p className="homepage-hashtag__left">
                        Các sản phẩm chăm sóc da và trang điểm cao cấp, từ son môi quyến rũ đến kem dưỡng ẩm mịn màng!
                        <br/>
                        Hơn 5 triệu khách hàng tin dùng và yêu thích – Tự tin tỏa sáng mỗi ngày!
                    </p>
                    <p className="homepage-hashtag__title">#MyPhamChinhHang</p>
                    <p className="homepage-hashtag__right">
                        Mua sắm dễ dàng chỉ với vài cú click
                        <br/>
                        Trải nghiệm vẻ đẹp tự nhiên với son, kem dưỡng, sữa rửa mặt và nhiều sản phẩm khác
                    </p>
                </div>
            </div>
        </section>


                <section className="homepage-service">
                    <div className="container--full">
                        <div className="homepage-service__grid">
                            <div className="homepage-service__item">
                                <div className="infomation-card">
                                    <a href="#" className="infomation-card">
                                        <div className="infomation-card__thumbnail">
                                            <img src="../Images/aboutmipham.jpg" alt=""/>
                                        </div>
                                        <div className="infomation-card__buttons">
                                            <span className="infomation-card__title">Câu chuyện về chúng tôi </span>
                                            <span className="infomation-card__button">
                                                <i className="fa-solid fa-arrow-up fa-rotate-45"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="homepage-service__item">
                                <div className="infomation-card">
                                    <a href="#" className="infomation-card">
                                        <div className="infomation-card__thumbnail">
                                            <img src="../Images/dichvuhailong100.png" alt=""/>
                                        </div>
                                        <div className="infomation-card__buttons">
                                            <span className="infomation-card__title">Dịch vụ hài lòng 100% </span>
                                            <span className="infomation-card__button">
                                                <i className="fa-solid fa-arrow-up fa-rotate-45"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="homepage-service__list">
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Giao hàng tận nơi  
                                    <br />
                                    nhanh chóng chỉ trong 30 phút
                                </p>
                            </div>
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Sản phẩm đa dạng
                                    <br />
                                    son môi, cọ, phấn phủ...
                                </p>
                            </div>
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Ưu đãi hấp dẫn  
                                    <br />
                                    freeship và giảm giá hằng ngày
                                </p>
                            </div>
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Nguyên liệu đảm bảo  
                                    <br />
                                    an toàn & chất lượng cao
                                </p>
                            </div>
                        </div>
        
                    </div>
                </section>
                
            </div>
        </Fragment>
  );
}
