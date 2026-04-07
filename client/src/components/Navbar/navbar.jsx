import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../until/userContext';
import { LoadData } from '../../until/cartactive';

export default function Navbar() {
    const { user, logoutUser } = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        logoutUser();
        navigate('/');
        var list = JSON.parse(localStorage.getItem("cart")) || [];
        list = [];
            localStorage.setItem("cart", JSON.stringify(list));
            LoadData();
      };
  return (

      <Fragment>
      <header className="site-header">
        
        <div className="topbar" style={{display: 'block'}}>
            <a href="">Ưu đãi giảm 20% khi đặt mỹ phẩm từ 200k  </a>
            <a href="Allsanpham.html"> " Mua ngay "</a>

        </div>
        <div className="header">
            <div className="header-inner">

                <div className="header__logo">
                    <Link to="/">
                        <img src="../Images/pngtree-skin-care-logo-png-image_5774040.png" alt="logo-coolmate"/>
                    </Link>

                </div>
                <div className="header__navbar hide-on-mobile-tablet">

                <ul className="header__navbar-list">

                <li className="header__navbar-product">
                    <li className="header__navbar-item">
                    <Link to="/product" className="header__navbar-link">
                        Bộ sưu tập mỹ phẩm<i className="fas fa-chevron-down" style={{ marginLeft: '4px' }}></i>
                    </Link>
                    </li>
                    <div className="header__navbar-product-menu-wrap">
                    <div className="header__navbar-product-menu">

                        <div className="header__navbar-product-col">
                        <a href="" className="header__navbar-product-heading">Sản phẩm nổi bật</a>
                        <ul>
                            <li>
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Son lì cao cấp</p>
                                <p className="header__navbar-product-item-link-content">Bền màu, mịn môi cả ngày</p>
                            </a>
                            </li>
                            <li>
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Phấn phủ kiềm dầu</p>
                                <p className="header__navbar-product-item-link-content">Cho làn da mịn màng tự nhiên</p>
                            </a>
                            </li>
                            <li>
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Tẩy trang dịu nhẹ</p>
                                <p className="header__navbar-product-item-link-content">Làm sạch sâu mà không khô da</p>
                            </a>
                            </li>
                            <li>
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Combo chăm sóc da <span className="hot-tag">HOT</span></p>
                                <p className="header__navbar-product-item-link-content">Đầy đủ bước skincare cơ bản</p>
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div className="header__navbar-product-col">
                        <a href="" className="header__navbar-product-heading">Danh mục sản phẩm</a>
                        <ul>
                            <li><a href="">Trang điểm</a></li>
                            <li><a href="">Chăm sóc da</a></li>
                            <li><a href="">Nước hoa</a></li>
                            <li><a href="">Phụ kiện làm đẹp</a></li>
                        </ul>
                        </div>

                        <div className="header__navbar-product-col">
                        <a href="" className="header__navbar-product-heading">Xu hướng</a>
                        <ul>
                            <li className="header__navbar-product-item">
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Son kem lì Velvet Luxe <span className="new-tag">New</span></p>
                            </a>
                            </li>
                            <li className="header__navbar-product-item">
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Serum dưỡng sáng Vitamin C</p>
                            </a>
                            </li>
                            <li className="header__navbar-product-item">
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Kem nền che khuyết điểm <span className="sale-tag">Hot</span></p>
                            </a>
                            </li>
                            <li className="header__navbar-product-item">
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Nước hoa hồng thiên nhiên</p>
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div className="header__navbar-product-col">
                        <a href="" className="header__navbar-product-heading">Nhu cầu</a>
                        <ul>
                            <li className="header__navbar-product-item"><a href="">Trang điểm hàng ngày</a></li>
                            <li className="header__navbar-product-item"><a href="">Dưỡng da ban đêm</a></li>
                            <li className="header__navbar-product-item"><a href="">Chống nắng & bảo vệ da</a></li>
                            <li className="header__navbar-product-item"><a href="">Quà tặng làm đẹp</a></li>
                        </ul>
                        </div>

                        <div className="header__navbar-product-col">
                        <a href="" className="header__navbar-product-heading">Khuyến mãi</a>
                        <ul>
                            <li className="header__navbar-product-item">
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Giảm 20% toàn bộ son môi</p>
                                <p className="header__navbar-product-item-link-content">Áp dụng cuối tuần</p>
                            </a>
                            </li>
                            <li className="header__navbar-product-item">
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Mua 1 tặng 1 mặt nạ dưỡng da</p>
                                <p className="header__navbar-product-item-link-content">Duy nhất thứ 4 hàng tuần</p>
                            </a>
                            </li>
                            <li className="header__navbar-product-item">
                            <a href="" className="header__navbar-product-item-link">
                                <p className="header__navbar-product-item-link-name">Combo dưỡng ẩm <span className="hot-tag">HOT</span></p>
                                <p className="header__navbar-product-item-link-content">Chỉ từ 299K</p>
                            </a>
                            </li>
                        </ul>
                        </div>

                    </div>
                    </div>
                </li>

                <li className="header__navbar-product">
                    <Link to="" className="header__navbar-link">
                    Son môi
                    <i className="fas fa-chevron-down" style={{ marginLeft: '4px' }}></i>
                    </Link>
                </li>

                <li className="header__navbar-item">
                    <Link to="" className="header__navbar-link">
                    Dưỡng da
                    <i className="fas fa-chevron-down" style={{ marginLeft: '4px' }}></i>
                    </Link>
                </li>

                <li className="header__navbar-item navbar-item--about-coolmate">
                    <Link to="/about" className="header__navbar-link">Về chúng tôi <i className="fas fa-chevron-down" style={{ marginLeft: '4px' }}></i></Link>
                    <div className="navbar-item--about-coolmate__menu-wrap">
                    <div className="about-coolmate__menu-inner">
                        <a href="index.html">Thương hiệu mỹ phẩm & Làm đẹp</a>
                        <div className="row">
                        <div className="col p-3">
                            <a href="" className="about-motorbike__menu-inner-item">
                            <p className="about-motorbike__menu-item-name">Trang điểm</p>
                            <p className="about-motorbike__menu-item-content">
                                Khám phá các sản phẩm trang điểm cao cấp: son, phấn, kem nền, kẻ mắt...
                            </p>
                            </a>
                        </div>
                        <div className="col p-3">
                            <a href="" className="about-motorbike__menu-inner-item">
                            <p className="about-motorbike__menu-item-name">Chăm sóc da</p>
                            <p className="about-motorbike__menu-item-content">
                                Bộ sản phẩm dưỡng ẩm, chống lão hóa và phục hồi làn da tự nhiên.
                            </p>
                            </a>
                        </div>
                        <div className="col p-3">
                            <a href="" className="about-motorbike__menu-inner-item">
                            <p className="about-motorbike__menu-item-name">Nước hoa & body</p>
                            <p className="about-motorbike__menu-item-content">
                                Hương thơm quyến rũ, giúp bạn tự tin và nổi bật trong mọi khoảnh khắc.
                            </p>
                            </a>
                        </div>
                        <div className="col p-3">
                            <a href="" className="about-motorbike__menu-inner-item">
                            <p className="about-motorbike__menu-item-name">Combo chăm sóc toàn diện</p>
                            <p className="about-motorbike__menu-item-content">
                                Set mỹ phẩm cho da và tóc – lựa chọn hoàn hảo cho bản thân hoặc làm quà tặng.
                            </p>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>

                <li className="header__navbar-item">
                    <Link to="/chatai" className="header__navbar-link">AI Tư Vấn</Link>
                </li>

                <li className="header__navbar-item">
                    <Link to="" className="header__navbar-link">Khuyến Mãi Mới</Link>
                </li>
                </ul>

                </div>

                <div className="header__actions">
                    <div className="header__actions-search">
                        <a className="header__actions-link">
                            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                        </a>
                    </div>
                    <div className="header__actions-account">
                    <Link to="/DangNhap" className="header__actions-link">
                        <i className="fa-solid fa-user fa-xl"></i>
                    </Link>
                    <div className="dropdown-menu">
                        {/* Hiển thị thông tin người dùng hoặc "Tên tài khoản" nếu không có người dùng */}
                        {user ? (
                            <>
                                <a href="" className="dropdown-item">
                                    <i className="fas fa-user"></i> {' '}
                                    {user.name}
                                </a>
                                <Link to="/donhang" className="dropdown-item">
                                    <i className="fas fa-shopping-bag"></i> Đơn hàng
                                </Link>
                                <a href="" className="dropdown-item" onClick={handleLogout}>
                                    <i className="fas fa-sign-out-alt"></i> Đăng xuất
                                </a>
                            </>
                        ) : (
                            <>
                                <Link to="/DangNhap" className="dropdown-item">
                                    <i className="fas fa-sign-in-alt"></i> Đăng nhập
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                    <div className="header__actions-cart-icon">
                        <span className="header__actions-cart-notify">0</span>
                        <Link to="/cart" className="header__actions-link">
                            <i className="fa-solid fa-bag-shopping fa-xl"></i>
                        </Link>
                        <div className="mini-cart-wrap">
                            <div className="mini-cart">
                                <div className="mini-cart-head">
                                    <span><span className="added-product"></span>  sản phẩm</span>
                                    <a href="Cart-page.html">Xem tất cả</a>
                                </div>
                                <ul className="mini-cart__list">
                                    
                                </ul>
                            </div>
                        </div>
                        

                    </div>

                </div>
            </div>
            <div className="search" style= {{ display: 'none'}}>
                <div className="search__inner">
                    <input placeholder="Tìm kiếm sản phẩm..." className="search__input" type="text"/>
                    <img className="search__img" style= {{width: '20px'}}  src="/Images/icon-search.svg" alt=""/>
                </div>
            </div>
        </div>

    </header>
      </Fragment>
  )
}
