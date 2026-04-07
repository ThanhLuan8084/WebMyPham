import React, { Fragment, useEffect, useState } from 'react'
import Payment from '../../until/detail';
import AddProduct from '../../until/cart';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Details() {
    Payment();
    AddProduct();

    const [sanpham ,setData] = useState({});
    const [allsanPhamSoSanh, setallSanPhamSoSanh] = useState(null);
    const [sanPhamSoSanh, setSanPhamSoSanh] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    
    console.log(sanPhamSoSanh)


    const{ma_san_pham} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/getsp/${ma_san_pham}`)
        .then((resp) => setData({...resp.data[0]}));
    },[ma_san_pham]);

    const loadData = async() =>{
        const response = await axios.get("http://localhost:5000/api/getallsp");
        setallSanPhamSoSanh(response.data);
    };

    useEffect(()=>{
        loadData();
    },[]);


    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };  

  return (
    <Fragment>
        <main>
            <div class="container1">
            <div class="container-product-single">
                    <div class="imgs">
                        <div class="link-page">
                            <a href="./index.html" class="link-page__homepage">Trang chủ</a>
                            <span>/</span>
                            <a href="./product-detail.html" class="link-page__currentPage">Sản phẩm</a>
                        </div>
                        <div class="index-img">
                            <div class="index-img__item active"></div>
                            <div class="index-img__item"></div>
                            <div class="index-img__item"></div>
                        </div>
                        <div class="product-single-img">
                            <img class="product-img__main" src={sanpham.anh_sanpham} alt=""/>
                            <div class="product-img__option">
                                <div  class="product-img__option-item active">
                                    <img src={sanpham.anh_sanpham} alt=""/>
                                </div>
                                <div  class="product-img__option-item active">
                                    <img src={sanpham.anhhover1} alt=""/>
                                </div>
                                <div class="product-img__option-item">
                                    <img src={sanpham.anhhover2} alt=""/>
    
                                </div>                                                   
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <h1 class="content__heading">{sanpham.ten_san_pham}</h1>
                        <div class="review-rating">
                            <p class="review-label">
                                Đã bán(web): 15
                            </p>  
                                              
                        </div>

                        <p class="content__price">{formatCurrency(sanpham.gia)}</p>
                        <div class="content__discount">{sanpham.thongbao}</div>
                       
                        <div class="content__size">

                            <div class="product-single__actions">
                                <div class="quantity">
                                    
                                    <button class="btn-decrease">-</button>
                                    <span>1</span>
                                    <button class="btn-increase">+</button>
                                </div>
                                <div class="btn btn-addCart">
                                    Thêm vào giỏ hàng
                                </div>
                            </div>
                        </div>
                        <div class="product-single__policy">
                            <div class="product-policy__item">
                              <div class="product-policy__icon">
                                <img src="https://www.coolmate.me/images/icons/icon3.svg" alt=""/>
                              </div>
                              <p>Đặt món cực nhanh chỉ với số điện thoại</p>
                            </div>
                            <div class="product-policy__item">
                              <div class="product-policy__icon">
                                <img src="https://www.coolmate.me/images/icons/icon4.svg" alt=""/>
                              </div>
                              <p>Miễn phí giao hàng cho đơn trên 200k</p>
                            </div>
                            <div class="product-policy__item">
                              <div class="product-policy__icon">
                                <img src="https://www.coolmate.me/images/icons/icon5.svg" alt=""/>
                              </div>
                              <p>Được đổi món khác nếu không vừa ý</p>
                            </div>
                            <div class="product-policy__item">
                              <div class="product-policy__icon">
                                <img src="https://www.coolmate.me/images/icons/icon2.svg" alt=""/>
                              </div>
                              <p>Hotline 1900.xxx.xxx hỗ trợ 9h - 22h hàng ngày</p>
                            </div>
                            <div class="product-policy__item">
                              <div class="product-policy__icon">
                                <img src="https://www.coolmate.me/images/icons/icon1.svg" alt=""/>
                              </div>
                              <p>Hoàn tiền 100% nếu món ăn bị hỏng/nguội</p>
                            </div>
                            <div class="product-policy__item">
                              <div class="product-policy__icon">
                                <img src="https://www.coolmate.me/images/icons/icon6.svg" alt=""/>
                              </div>
                              <p>Giao hàng trong 30-45 phút (tùy khu vực)</p>
                            </div>
                          </div>
                    </div>
                </div>
  <div class="feedback">
    <div class="review-title">
      <p class="quantity-review">1.245 Đánh giá</p>
      <div class="quantity-star">
        <span>4.9 / 5</span>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>

    <div class="review-fillter">
      <div class="review-fillter__rating">
        <select name="" id="">
          <option value="">Đánh giá</option>
          <option value="1">1 sao</option>
          <option value="2">2 sao</option>
          <option value="3">3 sao</option>
          <option value="4">4 sao</option>
          <option value="5">5 sao</option>
        </select>
      </div>
      <div class="review-filter__image">
        <select name="" id="">
          <option value="">Ảnh</option>
          <option value="true">Có ảnh</option>
          <option value="false">Không ảnh</option>
        </select>
      </div>
      <div class="review-filter__replied">
        <select name="" id="">
          <option value="">Phản hồi</option>
          <option value="true">Đã phản hồi</option>
          <option value="false">Chưa phản hồi</option>
        </select>
      </div>
    </div>

    <div class="feedback-content">
      <div class="row no-gutters">

        <div class="col p-6">
          <div class="feedback-item">
            <div class="feedback-item__rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star disabled"></i>
            </div>
            <div class="feedback-item__body">
              <b class="feedback-userName">Trần Minh Quân</b>
              <i class="feedback-product-type">Kem dưỡng ẩm ban đêm Luminous Care</i>
              <p class="feedback-of-custom">
                Chất kem mịn, thấm nhanh, không nhờn rít. Dùng 1 tuần thấy da mềm hơn rõ rệt, mùi hương dễ chịu.
              </p>
              <p class="feedback-time">08.09.2023</p>
            </div>
          </div>
        </div>

        <div class="col p-6">
          <div class="feedback-item">
            <div class="feedback-item__rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="feedback-item__body">
              <b class="feedback-userName">Nguyễn Văn Thắng</b>
              <i class="feedback-product-type">Serum Vitamin C Glow Essence</i>
              <p class="feedback-of-custom">
                Serum thấm nhanh, da sáng và đều màu chỉ sau 2 tuần. Không gây kích ứng, mùi thơm nhẹ rất dễ chịu.
              </p>
              <p class="feedback-time">08.09.2023</p>
            </div>
          </div>
        </div>

        <div class="col p-6">
          <div class="feedback-item">
            <div class="feedback-item__rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star disabled"></i>
            </div>
            <div class="feedback-item__body">
              <b class="feedback-userName">Phạm Ngọc Hà</b>
              <i class="feedback-product-type">Son lì Velvet Matte</i>
              <p class="feedback-of-custom">
                Màu son lên chuẩn, giữ lâu khoảng 5 tiếng. Chất son mịn, không khô môi nhưng hơi khó tẩy trang một chút.
              </p>
              <p class="feedback-time">08.09.2023</p>
            </div>
          </div>
        </div>

        <div class="col p-6">
          <div class="feedback-item">
            <div class="feedback-item__rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="feedback-item__body">
              <b class="feedback-userName">Lê Nhật Tân</b>
              <i class="feedback-product-type">Sữa rửa mặt tinh chất trà xanh</i>
              <p class="feedback-of-custom">
                Rửa sạch sâu nhưng không khô da, mùi trà xanh dịu nhẹ. Dùng buổi sáng rất sảng khoái. Da giảm dầu thấy rõ.
              </p>
              <p class="feedback-time">08.09.2023</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="feedback-page">
      <i class="fa-solid fa-angle-left btn-page-left"></i>
      <span>1/19</span>
      <i class="fa-solid fa-angle-right btn-page-right"></i>
    </div>
  </div>



            </div>
        </main>
    </Fragment>
  );
}
