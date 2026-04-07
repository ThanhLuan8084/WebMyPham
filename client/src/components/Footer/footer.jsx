import React, { Fragment } from 'react';

export default function Footer() {
  return (
    <Fragment>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-top-left">
              <ul>
                <li className="footer-top-left__heading"><a href="">Danh mục nổi bật</a></li>
                <li><a href="">Son môi cao cấp</a></li>
                <li><a href="">Phấn phủ kiềm dầu</a></li>
                <li><a href="">Kem nền trang điểm</a></li>
                <li><a href="">Tẩy trang & chăm sóc da</a></li>
                <li><a href="">Cọ & dụng cụ makeup</a></li>
                <li><a href="">Kẻ mắt & mascara</a></li>
                <li><a href="">Bộ sưu tập giới hạn</a></li>
                <li><a href="">Quà tặng & combo ưu đãi</a></li>
              </ul>
              <ul>
                <li className="footer-top-left__heading"><a href="">Dịch vụ khách hàng</a></li>
                <li><a href="">Hỏi đáp - FAQs</a></li>
                <li><a href="">Chính sách đổi trả</a></li>
                <li><a href="">Liên hệ hỗ trợ</a></li>
                <li><a href="">Đặt hàng & giao nhanh</a></li>
                <li><a href="">Ưu đãi thành viên</a></li>
                <li><a href="">Chính sách vận chuyển</a></li>
                <li><a href="">Chính sách bảo mật</a></li>
                <li className="footer-top-left__heading mg-top30"><a href="">Tin tức & Làm đẹp</a></li>
                <li><a href="">Câu chuyện thương hiệu</a></li>
                <li><a href="">Blog làm đẹp</a></li>
                <li><a href="">Cộng đồng yêu mỹ phẩm</a></li>
              </ul>
              <ul>
                <li className="footer-top-left__heading"><a href="">Tài liệu - Tuyển dụng</a></li>
                <li><a href="">Hướng dẫn đặt hàng online</a></li>
                <li><a href="">Tuyển dụng nhân viên</a></li>
                <li className="footer-top-left__heading mg-top30"><a href="">Về Chúng Tôi</a></li>
                <li><a href="">Giới thiệu thương hiệu</a></li>
                <li><a href="">Đội ngũ chuyên gia làm đẹp</a></li>
                <li><a href="">Chương trình hợp tác đại lý</a></li>
                <li><a href="">Hệ thống cửa hàng</a></li>
              </ul>
              <ul>
                <li className="footer-top-left__heading"><a href="">Địa chỉ liên hệ</a></li>
                <li><a href="">Chi nhánh Hà Nội: Số 123, Đường Láng</a></li>
                <li><a href="">Đống Đa, Hà Nội</a></li>
                <li><a href="">Chi nhánh TP.HCM: Số 456</a></li>
                <li><a href="">Nguyễn Trãi, Quận 5</a></li>
                <li><a href="">TP. Hồ Chí Minh</a></li>
              </ul>
            </div>

            <div className="footer-top-right">
              <h3 className="footer-top-right__heading">Chúng tôi luôn lắng nghe bạn!</h3>
              <p className="footer-top-right__content">
                Chúng tôi luôn trân trọng mọi ý kiến đóng góp để mang đến trải nghiệm mua sắm mỹ phẩm và chăm sóc sắc đẹp tốt nhất cho bạn mỗi ngày.
              </p>
              <div className="btn btn--feedback">Gửi Ý Kiến</div>
              <div className="footer-contact">
                <div className="footer-contact__icon">
                  <img src="../Images/icon-hotline.svg" alt="" />
                </div>
                <a href="">
                  <p className="footer-conttact__body">
                    Hotline: 1900 1234
                  </p>
                </a>
              </div>
              <div className="footer-contact">
                <div className="footer-contact__icon">
                  <img src="../Images/icon-email.svg" alt="" />
                </div>
                <a href="">
                  <p className="footer-conttact__body">
                    Email: support@beautystore.vn
                  </p>
                </a>
              </div>
              <div className="footer-society">
                <a href=""><img src="../Images/icon-facebook.svg" alt="" /></a>
                <a href=""><img src="../Images/icon-instar.svg" alt="" /></a>
                <a href=""><img src="../Images/icon-youtube.svg" alt="" /></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              @ CÔNG TY TNHH BEAUTY STORE VIỆT NAM  
              Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.
            </p>
            <div className="footer-certificate">
              <a href="">
                <img className="footer-certificate__img" src="../Images/handle_cert.png" alt="" />
              </a>
              <a href="">
                <img className="footer-certificate__img" src="../Images/dmca_protected_15_120.png" alt="" />
              </a>
              <a href="">
                <img className="footer-certificate__img" src="../Images/bep-info.png" alt="" />
              </a>
              <a href="">
                <img className="footer-certificate__img" src="../Images/logoSaleNoti.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}
