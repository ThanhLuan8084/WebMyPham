import React from 'react'

export default function About() {
  return (
    <div id="coolmate-story">
      <section className="cs-banner">
        <div className="cs-banner__image">
          <img src="../Images/bannerabout.jpg" alt="Banner Mỹ Phẩm" />
        </div>
        <div className="cs-banner__content">
          <h1 className="cs-banner__heading">Câu chuyện về Mỹ Phẩm</h1>
          <p className="cs-banner__description">
            Hành trình mang vẻ đẹp tự nhiên và sự tự tin đến với mọi người phụ nữ, 
            qua những sản phẩm chăm sóc da và trang điểm chất lượng, an toàn và hiệu quả.
          </p>
        </div>
      </section>

      <section className="cs-about">
        <div className="container-medium">
          <div className="grid">
            <div className="grid__column four-twelfths">
              <div className="cs-about__content">
                <h2 className="cs-about__heading">
                  Bộ sưu tập mỹ phẩm của chúng tôi có gì đặc biệt? <br />
                </h2>
              </div>
              <div className="cs-about__image">
                <img src="../Images/aboutson1.jpg" alt="Bộ son cao cấp" />
              </div>
            </div>
            <div className="grid__column eight-twelfths">
              <div className="cs-about__description">
                <p>Son môi với bảng màu thời thượng, chất son mịn nhẹ, lên màu chuẩn.</p>
                <p>Phấn phủ giúp làn da mịn màng, kiểm soát dầu suốt cả ngày.</p>
                <p>Tẩy trang dịu nhẹ, làm sạch sâu mà vẫn giữ ẩm tự nhiên cho da.</p>
                <p>Cọ trang điểm được thiết kế chuyên nghiệp, giúp lớp makeup đều và mịn.</p>
                <p>Kẻ mắt lâu trôi, giúp đôi mắt thêm cuốn hút và sắc nét.</p>
                <p><a href="#" style={{ textDecoration: 'underline' }}>Khám phá bộ sưu tập chi tiết</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-caption">
        <div className="container-medium">
          <h2 className="cs-caption__heading">
            <span>“</span>
            Mỹ phẩm không chỉ giúp bạn đẹp hơn, mà còn là cách thể hiện cá tính và tình yêu bản thân.
            <span>“</span>
          </h2>
          <span className="cs-caption__author">Một người yêu làm đẹp</span>
        </div>
      </section>

      <section className="cs-story">
        <div className="container-medium">
          <div className="grid grid--mobile-rev">
            <div className="grid__column five-twelfths">
              <div className="cs-story__image">
                <img src="../Images/abouttrangdiem.jpg" alt="Chuyên viên trang điểm" />
                <span className="cs-services__alt">Chuyên viên trang điểm</span>
              </div>
            </div>
            <div className="grid__column seven-twelfths">
              <div className="cs-story__content">
                <div className="cs-story__heading">
                  Dịch vụ khách hàng trong ngành mỹ phẩm
                </div>
                <div className="ca-story__description">
                  <p>Chúng tôi mang đến trải nghiệm mua sắm tận tâm – từ tư vấn chọn sản phẩm phù hợp loại da, 
                     đến hướng dẫn chăm sóc và trang điểm chuyên nghiệp.</p>
                  <p>Không chỉ là bán hàng, chúng tôi còn tổ chức workshop làm đẹp, 
                     chia sẻ bí quyết skincare và makeup để khách hàng luôn tỏa sáng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-services">
        <div className="container-medium">
          <h2 className="cs-services__heading">
            Hướng tới vẻ đẹp bền vững và tự nhiên
          </h2>

          <div id="services1" className="grid grid--aligned-center">
            <div className="grid__column">
              <h3 className="cs-services__title">#1. Với khách hàng</h3>
              <div className="cs-services__description">
                <p>Cam kết mang đến sản phẩm an toàn, lành tính, được kiểm nghiệm da liễu 
                   và phù hợp với mọi loại da.</p>
              </div>
            </div>
            <div className="grid__column">
              <div className="cs-services__image">
                <img src="../Images/aboutskincare.jpg" alt="Sản phẩm dưỡng da" />
                <span className="cs-services__alt">Sản phẩm dưỡng da</span>
              </div>
            </div>
          </div>

          <div id="services2" className="grid grid--aligned-center">
            <div className="grid__column">
              <h3 className="cs-services__title">#2. Với nhân viên</h3>
              <div className="cs-services__description">
                <p>Xây dựng môi trường làm việc năng động, khuyến khích sáng tạo 
                   và không ngừng học hỏi về xu hướng làm đẹp mới.</p>
              </div>
            </div>
            <div className="grid__column">
              <div className="cs-services__image">
                <img src="../Images/aboutteam.jpg" alt="Đội ngũ tư vấn viên" />
                <span className="cs-services__alt">Đội ngũ tư vấn viên</span>
              </div>
            </div>
          </div>

          <div id="services3" className="grid grid--aligned-center">
            <div className="grid__column">
              <h3 className="cs-services__title">#3. Với đối tác</h3>
              <div className="cs-services__description">
                <p>Hợp tác cùng các thương hiệu uy tín, đảm bảo nguồn gốc rõ ràng 
                   và chất lượng sản phẩm đạt chuẩn quốc tế.</p>
              </div>
            </div>
            <div className="grid__column">
              <div className="cs-services__image">
                <img src="../Images/aboutbrand.jpg" alt="Thương hiệu đối tác" />
                <span className="cs-services__alt">Thương hiệu đối tác</span>
              </div>
            </div>
          </div>

          <div id="services4" className="grid grid--aligned-center">
            <div className="grid__column">
              <h3 className="cs-services__title">#4. Với môi trường</h3>
              <div className="cs-services__description">
                <p>Ưu tiên bao bì tái chế, nguyên liệu thiên nhiên 
                   và hướng tới mô hình mỹ phẩm xanh, thân thiện môi trường.</p>
              </div>
            </div>
          </div>

          <div id="services5" className="grid grid--aligned-center">
            <div className="grid__column">
              <h3 className="cs-services__title">#5. Với cộng đồng</h3>
              <div className="cs-services__description">
                <p>Lan tỏa tình yêu làm đẹp, hỗ trợ các chương trình cộng đồng 
                   và truyền cảm hứng về sự tự tin, yêu bản thân mỗi ngày.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
