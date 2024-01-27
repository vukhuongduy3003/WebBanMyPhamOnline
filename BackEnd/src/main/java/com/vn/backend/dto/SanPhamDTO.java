package com.vn.backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class SanPhamDTO {
    private int idSanPham;
    private String tenSanPham;
    private Integer soLuong;
    private Integer giaSanPham;
    private Integer giaSale;
    private String hinhAnh;
    private LocalDate ngaySanXuat;
    private LocalDate ngayHetHan;
    private String moTa;
    private Integer tinhTrang;
    private Integer idDanhMuc;
}
