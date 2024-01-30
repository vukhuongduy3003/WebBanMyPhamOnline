package com.vn.backend.repository;

import com.vn.backend.entity.ChiTietGioHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChiTietGioHangRepository extends JpaRepository<ChiTietGioHang, Integer> {
    @Query("SELECT ct.sanPham.idSanPham, ct.sanPham.tenSanPham, ct.soLuongMua, (ct.sanPham.giaSanPham - ct.sanPham.giaSale) FROM ChiTietGioHang ct WHERE ct.gioHang.idGioHang = :id")
    List<Object[]> findByIdGioHang(Integer id);
}
