const db = require('../config/config');

const Product = {

    getAll: ({page, pageSize}, callback) => {

        const sqlGet = page ?  `CALL GetProductsByPage(${page}, ${pageSize});` :  "SELECT * FROM san_pham";

        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

    getById: (ma_san_pham, callback) => {
        const sqlGet = "SELECT * FROM san_pham WHERE ma_san_pham = ?";
        db.query(sqlGet, [ma_san_pham], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

    getByIdDM: (ma_danh_muc, callback) => {
        const sqlGet = "SELECT * FROM san_pham WHERE ma_danh_Muc = ?";
        db.query(sqlGet, [ma_danh_muc], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },


create: (productData, callback) => {
  const {
    ten_san_pham,
    gia,
    mo_ta,
    anh_sanpham,
    ma_danh_muc,
    anhhover1,
    anhhover2,
    sale,
    thongbao,
    kich_thuoc,
    soluong,
    mau_sac
  } = productData;

  const sqlInsert = `
    INSERT INTO san_pham (
      ten_san_pham, 
      gia, 
      mo_ta, 
      anh_sanpham, 
      ma_danh_muc, 
      anhhover1, 
      anhhover2, 
      sale, 
      thongbao, 
      kich_thuoc, 
      soluong, 
      mau_sac
    ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    ten_san_pham,
    gia,
    mo_ta,
    anh_sanpham,
    ma_danh_muc,
    anhhover1,
    anhhover2,
    sale,
    thongbao,
    kich_thuoc,
    soluong,
    mau_sac
  ];

  db.query(sqlInsert, values, (error, result) => {
    if (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      return callback(error);
    }
    callback(null, result);
  });
},



update: (ma_san_pham, productData, callback) => {
    const {
        ten_san_pham,
        gia,
        anh_sanpham,
        anhhover1,
        ma_danh_muc,
        mo_ta,
        kich_thuoc,
        thongbao,
        mau_sac
    } = productData;

    const sqlUpdate = `
        UPDATE san_pham SET
            ten_san_pham = ?, 
            gia = ?, 
            anh_sanpham = ?, 
            anhhover1 = ?, 
            ma_danh_muc = ?,  
            mo_ta = ?,
            kich_thuoc = ?,
            thongbao = ?,
            mau_sac = ?
        WHERE ma_san_pham = ?
    `;

    const values = [
        ten_san_pham,
        gia,
        anh_sanpham,
        anhhover1,
        ma_danh_muc,
        mo_ta,
        kich_thuoc,
        thongbao,
        mau_sac,
        ma_san_pham
    ];

    db.query(sqlUpdate, values, (error, result) => {
        if (error) {
            console.error("Lỗi khi cập nhật sản phẩm:", error);
            return callback(error);
        }
        callback(null, result);
    });
},


    
    delete: (ma_san_pham, callback) => {
        const sqlDelete = "DELETE FROM san_pham WHERE ma_san_pham = ?";
        db.query(sqlDelete, [ma_san_pham], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

     searchByName: (searchTerm, callback) => {
        const sqlSearch = "SELECT * FROM san_pham WHERE ten_san_pham LIKE ?";
        const formattedSearchTerm = `%${searchTerm}%`;
        db.query(sqlSearch, [formattedSearchTerm], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

    searchByPriceAndName: (minPrice, maxPrice, id_danh_muc, callback) => {
        let sqlSearch = "SELECT * FROM san_pham WHERE gia BETWEEN ? AND ?";
        let queryParams = [minPrice, maxPrice];

    
        if (id_danh_muc && !isNaN(id_danh_muc)) {
            sqlSearch += " AND ma_danh_muc = ?";
            queryParams.push(id_danh_muc);
        }
    
        db.query(sqlSearch, queryParams, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    }
    
};

module.exports = Product;
