import React, { Fragment, useEffect, useState } from 'react'
import ActiveCart, { LoadData } from '../../until/cartactive';
import axios from "axios";
import { useUser } from '../../until/userContext';


export default function Cartpage() {

    ActiveCart();

    var list = JSON.parse(localStorage.getItem("cart")) || [];

    const { user } = useUser();
    const [coupons, setCoupons] = useState([]);
    const [updateTotalTrigger, setUpdateTotalTrigger] = useState(0);
    const [selectedPayment, setSelectedPayment] = useState("BuyLate");

    const [state, setState] = useState({
        
        ten_khach_hang: '',
        sdt: '',
        dia_chi: '',
        tinh_thanh: '',
        quan_huyen: '',
        phuong_xa: '',
        ghi_chu: '',
        tong_tien:0
    });
         
    const { ten_khach_hang, sdt, dia_chi, tinh_thanh, quan_huyen, phuong_xa, ghi_chu,tong_tien } = state;
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };

    const handlePayment = (e) =>{
        e.preventDefault();

    if(window.confirm("Xác nhận lại thông tin đơn hàng , xác nhận đặt hàng ?")){
           if (!user) {
            alert("Vui lòng đăng nhập để đặt dịch vụ!");
            return; // Dừng thực thi hàm nếu chưa đăng nhập
        }

    const paymentMethod = selectedPayment;
    if(paymentMethod === "BuyLate"){
        const orderData = {
            ma_khach_hang: user.id, // Thay đổi giá trị này thành ID của khách hàng
            ngay_dat_hang: new Date().toISOString().slice(0, 10), // Lấy ngày hiện tại
            tong_tien: tong_tien, // Tổng tiền
            trang_thai: 1,
            ten_khach: ten_khach_hang,
            dia_chi: `${dia_chi}, ${phuong_xa}, ${quan_huyen}, ${tinh_thanh}`,
            ghi_chu: ghi_chu,
            sdt: sdt,
            loai_thanh_toan:paymentMethod,
            trang_thai_thanh_toan:1,
        
            chi_tiet_don_hang: list.map(item => ({
              ma_san_pham: Number(item.id),
              ten_san_pham: item.name, 
              so_luong: item.quantity,
              gia: item.price,
              anh_sanpham:item.img
            }))
        }
        console.log(orderData)
        axios.post("http://localhost:5000/api/addOrder", orderData)
        .then( () => {setState({ten_khach_hang :"",sdt:"",dia_chi:"",tinh_thanh:"",phuong_xa:"",quan_huyen:"",ghi_chu:""})
            list = [];
            localStorage.setItem("cart", JSON.stringify(list));
            const vocher = {coupon_name: "novoucher", value: 0}
            localStorage.setItem("coupons", JSON.stringify([]));
            const savedCoupons = JSON.parse(localStorage.getItem('coupons')) || [];
            setCoupons(savedCoupons);
            localStorage.setItem("voucher_sale", JSON.stringify(vocher));
            LoadData();
          alert("Bạn đã đặt hàng thành công");

        })
        .catch(error => {
          console.error(error);
          alert("Đã có lỗi xảy ra, vui lòng thử lại sau");
        });
    }

    else if(paymentMethod === "VnPay"){
        console.log('ok')
        const orderData = {
            ma_khach_hang: user.id, // Thay đổi giá trị này thành ID của khách hàng
            ngay_dat_hang: new Date().toISOString().slice(0, 10), // Lấy ngày hiện tại
            tong_tien: tong_tien, // Tổng tiền
            trang_thai: 1,
            ten_khach: ten_khach_hang,
            dia_chi: `${dia_chi}, ${phuong_xa}, ${quan_huyen}, ${tinh_thanh}`,
            ghi_chu: ghi_chu,
            sdt: sdt,
            loai_thanh_toan:paymentMethod,
            trang_thai_thanh_toan:2,
        
            chi_tiet_don_hang: list.map(item => ({
              ma_san_pham: Number(item.id),
              ten_san_pham: item.name, 
              so_luong: item.quantity,
              gia: item.price,
              anh_sanpham:item.img
            }))
        }

        //Lưu tạm đơn hàng vào localStorage
                localStorage.setItem("pending_order", JSON.stringify(orderData));

                //Tạo link thanh toán VNPay
                axios.post('http://localhost:5000/api/create_payment_url', {
                    amount: tong_tien,
                    language: "vn"
                })
                .then(res => {
                    const paymentUrl = res.data.url;
                    if (paymentUrl) {
                        window.location.href = paymentUrl;
                    } else {
                        alert('Không tạo được link thanh toán VNPay');
                    }
                })
                .catch(error => {
                    console.error(error);
                    alert('Lỗi khi gọi API thanh toán VNPay');
                });

                const vocher = {coupon_name: "novoucher", value: 0}
                localStorage.setItem("coupons", JSON.stringify([]));
                const savedCoupons = JSON.parse(localStorage.getItem('coupons')) || [];
                setCoupons(savedCoupons);
                localStorage.setItem("voucher_sale", JSON.stringify(vocher));
                LoadData();
    }
  }
}    
    useEffect(() => {
        const tongTienElement = document.querySelector('.btn-pay--price');
        if (tongTienElement) {
          const value = tongTienElement.innerText || tongTienElement.textContent;
          const numberValue = parseInt(value.replace(/[^\d]/g, ''), 10); // Loại bỏ các ký tự không phải số và chuyển đổi sang số nguyên
          setState((prevState) => ({ ...prevState, tong_tien: numberValue }));
        }
    }, [updateTotalTrigger]);
    console.log(tong_tien)


    useEffect(() => {
        // Load phiếu giảm giá từ localStorage
        const savedCoupons = JSON.parse(localStorage.getItem('coupons')) || [];
        setCoupons(savedCoupons);
        const vocher = {coupon_name: "novoucher", value: 0}
        localStorage.setItem("voucher_sale", JSON.stringify(vocher));
     }, []);

    useEffect(() => {
        const savedCoupons = JSON.parse(localStorage.getItem('coupons')) || [];
        setCoupons(savedCoupons);
        const savedVoucher = JSON.parse(localStorage.getItem('voucher_sale')) || { coupon_name: "novoucher", value: 0 };
        // Kiểm tra xem voucher có sẵn không và giữ lại
        if (savedVoucher) {
            // Gọi hàm LoadData nếu cần để cập nhật lại trạng thái
            LoadData();
        }
    }, []);
    
    const handleSelectCoupon = (coupon) => {
        const voucherData = {
            coupon_name: coupon.coupon_name,
            value: coupon.value,
        };
        localStorage.setItem("voucher_sale", JSON.stringify(voucherData));
        LoadData();
        setUpdateTotalTrigger(prev => prev + 1);
    };
    
    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value); // Cập nhật giá trị state
    };

  return (
    <Fragment>
        <div className="main">

                {/* <!-- Phần container --> */}
                <div className="cartPage-container">
                    <form className="info">
                        <div className="info-header">
                            <h2>Thông tin vận chuyển</h2>
                        </div>
                        <div className="row info-body">
                            <div className="col p-6">
                                <input className="input-name"name="ten_khach_hang" onChange={handleInputChange} value={ten_khach_hang} placeholder="Họ tên" type="text" />
                            </div>
                            <div className="col p-6">
                                <input className="input-phone" name="sdt" onChange={handleInputChange} value={sdt} placeholder="Số điện thoại" type="text"/>
                            </div>
                            <div className="col p-12">
                                <input className="input-adress" name="dia_chi" onChange={handleInputChange} value={dia_chi} placeholder="Địa chỉ" type="text"/>
                            </div>
                            <div className="adress col p-4">
                                <select onChange={handleInputChange} value={tinh_thanh} name="tinh_thanh">
                                    <option value="">Chọn Tỉnh/Thành Phố</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                </select>
                                </div>

                                <div className="adress col p-4">
                                <select onChange={handleInputChange} value={quan_huyen} name="quan_huyen">
                                    <option value="">Chọn Quận/Huyện</option>
                                    <option value="Ba Đình">Ba Đình</option>
                                    <option value="Hoàn Kiếm">Hoàn Kiếm</option>
                                    <option value="Đống Đa">Đống Đa</option>
                                    <option value="Cầu Giấy">Cầu Giấy</option>
                                    <option value="Thanh Xuân">Thanh Xuân</option>
                                    <option value="Hai Bà Trưng">Hai Bà Trưng</option>
                                    <option value="Hoàng Mai">Hoàng Mai</option>
                                    <option value="Long Biên">Long Biên</option>
                                    <option value="Hà Đông">Hà Đông</option>
                                    <option value="Tây Hồ">Tây Hồ</option>
                                    <option value="Nam Từ Liêm">Nam Từ Liêm</option>
                                    <option value="Bắc Từ Liêm">Bắc Từ Liêm</option>
                                    <option value="Gia Lâm">Gia Lâm</option>
                                </select>
                                </div>

                                <div className="adress col p-4">
                                <select onChange={handleInputChange} value={phuong_xa} name="phuong_xa">
                                    <option value="">Chọn Phường/Xã</option>
                                    <option value="Phường Cát Linh">Phường Cát Linh</option>
                                    <option value="Phường Láng Hạ">Phường Láng Hạ</option>
                                    <option value="Phường Dịch Vọng">Phường Dịch Vọng</option>
                                    <option value="Phường Mai Dịch">Phường Mai Dịch</option>
                                    <option value="Phường Khương Trung">Phường Khương Trung</option>
                                    <option value="Phường Thanh Xuân Bắc">Phường Thanh Xuân Bắc</option>
                                    <option value="Phường Bách Khoa">Phường Bách Khoa</option>
                                    <option value="Phường Vĩnh Tuy">Phường Vĩnh Tuy</option>
                                    <option value="Phường Giáp Bát">Phường Giáp Bát</option>
                                    <option value="Phường Hoàng Liệt">Phường Hoàng Liệt</option>
                                    <option value="Phường Thượng Thanh">Phường Thượng Thanh</option>
                                    <option value="Phường Gia Thụy">Phường Gia Thụy</option>
                                    <option value="Xã Đông Ngạc">Xã Đông Ngạc</option>
                                    <option value="Xã An Khánh">Xã An Khánh</option>
                                </select>
                                </div>

                            <div className="col p-12">
                                <input onChange={handleInputChange} value={ghi_chu} name="ghi_chu" className="input-adress" placeholder="Ghi chú thêm" type="text"/>
                            </div>
                        </div>
                        <div className="payments">
                            <h2 className="payments">Hình thức thanh toán
                            </h2>
                            <div className={`payments-item ${(selectedPayment === "BuyLate") ? "active" : ""}`}>
                                    <input
                                    type="radio"
                                    className="check"
                                    name="paymentMethod" // Group name cho các radio
                                    value="BuyLate"
                                    onClick={handlePaymentChange}
                                    />
                                    <img style={{height:'25px',width:'25px',marginRight:"60px"}} src="https://sohala.vn/upload/news/thanh-toan-khi-nhan-hang-6272.jpg" alt="" />
                                    <p className="payments-item__text">Thanh toán sau</p>
                                </div>

                                {/* VNPay */}
                                <div className={`payments-item ${(selectedPayment === "VnPay") ? "active" : ""}`}>
                                    <input
                                    type="radio"
                                    className="check"
                                    name="paymentMethod" // Group name phải giống nhau
                                    value="VnPay"
                                    onClick={handlePaymentChange}
                                    />
                                    <img
                                    style={{ width: "25px" }}
                                    src="https://mcdn.coolmate.me/image/October2024/mceclip0_81.png"
                                    alt=""
                                    />
                                    <div className="payments-item__text">
                                    <p>Thẻ ATM / Internet Banking</p>
                                    <p>Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card) VNPay QR</p>
                                    </div>
                                </div>
                            <p style={{paddingLeft: '5px'}}>Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu thêm <a style={{fontWeight:'700'}} href="">tại đây</a>.</p>
                            <button type="submit" onClick={handlePayment} className="btn-pay">Thanh toán <span className="btn-pay--price"></span>(<span className="type-payment">ZaloPay</span>)</button>
                        </div>
                    </form>

                    {/* <!-- tạo khuôn đổ dữ liệu --> */}
                    <div className="list-product">
                        <div className="list-product__inner">
                            <h2>Giỏ hàng</h2>
                            <div className="list-product__item">
                                    <div className="list-product__item-img">
                                    <img src="https://media.coolmate.me/uploads/March2022/tshirtxcool-4-copy_160x181.jpg" alt=""/>
                                    </div>

                                    <div className="list-product__item-content">
                                    <div className="list-product__item-name">Áo thun cổ tròn Excool</div>
                                    <div className="list-product__item-type">Đen/L</div>
                                    <div style={{display:'flex', justifyContent: 'flex-start', margin: '28px 0 6px'}} className="">
                                        <div className="single-product-color single-product-select">
                                            <span>Đen</span>
                                            <i className="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div className="single-product-size single-product-select">
                                            <span>L</span>
                                            <i className="fa-solid fa-angle-down"></i>
                                        </div >                          
                                    </div>
                                    <div style={{display:'flex',justifyContent: 'space-between',alignItems: 'center'}}>  
                                        <div className="quantity-product">
                                            <button>
                                                <svg data-v-0d8807a2="" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g data-v-0d8807a2=""><line data-v-0d8807a2="" stroke-width="1.5" id="svg_6" y2="8" x2="10" y1="8" x1="5" stroke="#000000" fill="none"></line></g></svg>
                                            </button>
                                            <span>1</span>
                                            <button>
                                                <svg data-v-0d8807a2="" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g data-v-0d8807a2=""><line data-v-0d8807a2="" stroke-width="1.5" y2="8" x2="12.9695" y1="8" x1="3.0305" stroke="#000000" fill="none"></line> <line data-v-0d8807a2="" stroke-width="1.5" transform="rotate(90, 8, 8)" y2="8" x2="13" y1="8" x1="3" stroke="#000000" fill="none"></line></g></svg>
                                            </button>
                                        </div>
                                        <div className="product-price">
                                            <div className="product-new-price">254.000đ</div>
                                            <div className="product-old-price">299.000đ</div>
                                        </div>
                                    </div>
                                    <div className="list-product__close">
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                                </div>
                                
                                
                            </div>   
                        <div className='cart-viewing-users mgt--10'>
                            <i>
                                <span>Có </span>
                                <b>5</b>
                                <span> người đang thêm cùng sản phẩm giống bạn vào giỏ hàng.</span>
                            </i>
                        </div>
                          <div className='discount-block'>
                             <div className="coupon-container">
                             {coupons.map((coupon, index) => (
                                <div className="coupon-card" key={index}>
                                    <div className="coupon-header">
                                        <span className="coupon-code">{coupon.coupon_name}</span>
                                        <span className="coupon-remaining">(Còn {coupon.remaining_count})</span>
                                    </div>
                                    <div className="coupon-description">
                                        <p>{coupon.description}</p>
                                        <p style={{ display: "none" }}>{coupon.value}</p>
                                    </div>
                                    <div className="coupon-footer">
                                        <span>HSD: {coupon.expiry_date}</span>
                                        <a href="#" className="coupon-conditions">{coupon.conditions}</a>
                                    </div>
                                    <div className="coupon-radio">
                                        <input onClick={() => handleSelectCoupon(coupon)} type="radio" name="coupon-select" />   
                                    </div>
                                </div>
                            ))}
                            </div>  
                              <div className='discount-box'>
                                    <input data-v-48bbe076 type="text"  placeholder='Nhập mã giảm giá'/>
                                    <button data-v-48bbe076 disabled = "disabled"> Áp dụng</button>
                              </div>
                              <div className='discount-block'>
                                <p className='discount-heading mb-4'>
                                    Sử dụng Voucher

                                    <span>
                                        <img src="https://mcdn.coolmate.me/image/April2023/mceclip0_92.png" alt="" />
                                        <button className='text-gray-light cursor-pointer btn-gray'>Nhập mã</button>
                                    </span>
                                </p>
                              </div>
                              
                        </div>
                        <div style={{    marginTop: '10px'}} className="cost-detail">
                            <span>Tạm tính</span>
                            <span className="tamTinh"></span>
                        </div>
                        <div className="cost-detail">
                            <span>Giảm giá</span>
                            <span className="sale-off">0đ</span>
                        </div>
                        <div className="cost-detail">
                            <span>Phí giao hàng</span>
                            <span className="delever-cost">Miễn phí</span>
                        </div>
                        <div className="total">
                            <span>Tổng</span>
                            <span className="total__price"></span>
                        </div>        
                        </div>
                       
                    </div>
                    
                </div>
    </Fragment>
  );
}
