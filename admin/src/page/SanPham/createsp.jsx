import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialState = {
  ten_san_pham: "",
  gia: "",
  mo_ta: "",
  anh_sanpham: "",
  ma_danh_muc: "",
  anhhover1: "",
  anhhover2: "",
  sale: "",
  thongbao: "",
  kich_thuoc: "",
  soluong: "",
  mau_sac: ""
};

export default function Createsp() {
  const [state, setState] = useState(initialState);
  const [danhmucList, setDanhmucList] = useState([]);
  const navigate = useNavigate();

  const { ten_san_pham, gia, mo_ta, anh_sanpham, ma_danh_muc, anhhover1, anhhover2,
          sale, thongbao, kich_thuoc, soluong, mau_sac } = state;

  useEffect(() => {
    axios.get("http://localhost:5000/api/getalldm")
      .then((response) => setDanhmucList(response.data))
      .catch((error) => {
        console.error(error);
        toast.error("Lỗi khi lấy danh mục!");
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) setState({ ...state, [fieldName]: `/images/${file.name}` });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ten_san_pham || !gia || !mo_ta || !anh_sanpham || !ma_danh_muc || !soluong || !mau_sac) {
      toast.error("Vui lòng nhập đầy đủ thông tin bắt buộc!");
      return;
    }

    axios.post("http://localhost:5000/api/createsp", state)
      .then(() => {
        toast.success("Thêm sản phẩm thành công!");
        setTimeout(() => navigate("/Indexsp"), 500);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Đã xảy ra lỗi khi thêm sản phẩm!");
      });
  };

  return (
    <div>
      <h3 className="mb-0">Thêm sản phẩm</h3>
      <hr />
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="ten_san_pham"
              value={ten_san_pham}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Tên sản phẩm"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="gia"
              value={gia}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Giá"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="file"
              name="anh_sanpham"
              onChange={(e) => handleFileChange(e, "anh_sanpham")}
              className="form-control"
              placeholder="Ảnh sản phẩm"
            />
          </div>
          <div className="col">
            <select
              name="ma_danh_muc"
              value={ma_danh_muc}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="">Chọn danh mục</option>
              {danhmucList.map((dm) => (
                <option key={dm.ma_danh_muc} value={dm.ma_danh_muc}>
                  {dm.ten_danh_muc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="mau_sac"
              value={mau_sac}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Màu sắc"
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="soluong"
              value={soluong}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Số lượng"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="file"
              name="anhhover1"
              onChange={(e) => handleFileChange(e, "anhhover1")}
              className="form-control"
              placeholder="Ảnh hover 1"
            />
          </div>
          <div className="col">
            <input
              type="file"
              name="anhhover2"
              onChange={(e) => handleFileChange(e, "anhhover2")}
              className="form-control"
              placeholder="Ảnh hover 2"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="sale"
              value={sale}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Giảm giá (VD: 20%)"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="thongbao"
              value={thongbao}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Thông báo (VD: Sản phẩm mới)"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="kich_thuoc"
              value={kich_thuoc}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Kích thước"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <textarea
              name="mo_ta"
              value={mo_ta}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Mô tả sản phẩm"
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Thêm</button>
          </div>
        </div>
      </form>
    </div>
  );
}
