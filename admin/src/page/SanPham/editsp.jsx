import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const initiaState = {
    ten_san_pham: "",
    gia: "",
    anh_sanpham: "",
    ma_danh_muc: "",
    mo_ta: "",
    kich_thuoc: "",
    mau_sac: "",
    anhhover1:""
};

export default function Editsp() {

  const [state, setState] = useState(initiaState);
  const [danhmucList, setdanhmucList] = useState([]);  // state lưu danh sách 

  const [file, setFile] = useState(null);

const {
  ten_san_pham,
  gia,
  ma_danh_muc,
  mo_ta,
  kich_thuoc,
  thongbao,
  anhhover1,
  anh_sanpham,
  mau_sac
} = state;


  useEffect(() => {
    // Gọi API để lấy danh sách các khoa
    axios.get("http://localhost:5000/api/getalldm")
        .then((response) => {
            setdanhmucList(response.data);
        })
        .catch((error) => {
            console.error(error);
            toast.error("Lỗi khi lấy danh sách khoa");
        });
}, []);

  const {ma_san_pham} = useParams();

  const navigate = useNavigate();

  console.log(state)

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/getsp/${ma_san_pham}`)
    .then((resp) => setState({...resp.data[0]}));
  },[ma_san_pham]);
  
  const handleInputChange = (e) =>{
    const{name, value} = e.target;
    setState({...state,[name]:value});
  }

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setFile(file);
    setState({ ...state, [type]: `/images/${file.name}` });
};
;
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra bắt buộc các trường quan trọng
    if (!state.ten_san_pham || !state.gia  || !state.anh_sanpham || !state.ma_danh_muc ) {
      return toast.error("Vui lòng nhập đầy đủ thông tin");
    }

    if (window.confirm("Bạn có muốn cập nhật thông tin?")) {
      axios.put(`http://localhost:5000/api/updatesp/${ma_san_pham}`, state)
        .then(() => {
          toast.success("Cập nhật sản phẩm thành công!");
          navigate("/Indexsp");
        })
        .catch(err => toast.error(err.response?.data || "Lỗi khi cập nhật sản phẩm"));
    }
  };

  return (
    <div>
      <h3 class="mb-0">Cập nhật sản phẩm</h3>
      <hr />
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <div class="row">
              <div class="col mb-3">
                  <label class="form-label">Tên sản phẩm</label>
                  <input type="text" name="ten_san_pham" class="form-control" onChange={handleInputChange} placeholder="Tên sản phẩm" value={ten_san_pham || "" }/>
              </div>
              <div class="col mb-3">
                  <label class="form-label">Giá tiền</label>
                  <input type="text" name="gia" class="form-control" onChange={handleInputChange} placeholder="Giá tiền" value={gia || ""} />
              </div>
          </div>
          
        <div className="row">
          <div className="col mb-3">
            <label className="form-label">Thông báo</label>
            <input
              type="text"
              name="thongbao"
              className="form-control"
              onChange={handleInputChange}
              value={state.thongbao || ""}
            />
          </div>
          <div className="col mb-3">
            <label className="form-label">Kích cỡ</label>
            <input
              type="text"
              name="kich_thuoc"
              className="form-control"
              onChange={handleInputChange}
              value={state.kich_thuoc || ""}
            />
          </div>
        </div>
          <div className='row'>
              

              <div class="col mb-3">
                  <label class="form-label">Màu sắc</label>
                  <input type="text" name="mau_sac" class="form-control" onChange={handleInputChange} placeholder="Màu sắc" value={mau_sac || ""} />
              </div>
               <div class="col mb-3">
                  <label class="form-label">Mã danh mục</label>
                           
                        <select
                            name="ma_danh_muc"
                            value={ma_danh_muc}
                            onChange={handleInputChange}
                            className="form-control"
                        >
                            <option value="">Chọn danh mục</option>
                            {danhmucList.map((danh_muc) => (
                                <option key={danh_muc.ma_danh_muc} value={danh_muc.ma_danh_muc}>
                                    {danh_muc.ten_danh_muc}
                                </option>
                            ))}
                        </select>
            
              </div>
          </div>

          <div className='row'>
              <div class="col mb-3">
                  <label class="form-label">Mô tả</label>
                  <textarea type="text" name="mo_ta" class="form-control" onChange={handleInputChange} placeholder="Mô tả" value={mo_ta || ""} />
              </div>
          </div>

          <div className="row">
              <img style={{borderRadius: '10px', marginLeft: '10px'}} src={state.anh_sanpham} width="150" height="180" className="img img-responsive" />
              <div className="col mb-3">
                <label className="form-label">Ảnh sản phẩm</label>
                <input
                  type="file"
                  name="anh_sanpham"
                  className="form-control"
                  onChange={(e) => handleFileChange(e, 'anh_sanpham')}
                  placeholder="Ảnh sản phẩm"
                  readOnly
                />
              </div>
            </div>

            <div className="row">
              <img style={{borderRadius: '10px', marginLeft: '10px'}} src={state.anhhover1} width="150" height="180" className="img img-responsive" />
              <div className="col mb-3">
                <label className="form-label">Ảnh sản phẩm hover</label>
                <input
                  type="file"
                  name="anhhover1"
                  className="form-control"
                  onChange={(e) => handleFileChange(e, 'anhhover1')}
                  placeholder="Ảnh sản phẩm hover"
                  readOnly
                />
              </div>
            </div>

          <div class="row">
              <div class="d-grid">
                  <button style={{marginLeft: '10px', marginTop: '30px'}} class="btn btn-warning">Cập nhật</button>
              </div>
          </div>
      </form>
    </div>
  )
}
