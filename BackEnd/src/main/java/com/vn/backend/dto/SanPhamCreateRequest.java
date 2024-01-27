package com.vn.backend.dto;

import com.vn.backend.entity.SanPham;

public class SanPhamCreateRequest extends SanPham {
    public int getIdDanhMuc() {
        return idDanhMuc;
    }

    public void setIdDanhMuc(int idDanhMuc) {
        this.idDanhMuc = idDanhMuc;
    }

    private int idDanhMuc;
}
