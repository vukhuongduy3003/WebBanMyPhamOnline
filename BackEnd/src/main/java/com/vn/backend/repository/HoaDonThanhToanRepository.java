package com.vn.backend.repository;

import com.vn.backend.entity.HoaDonThanhToan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HoaDonThanhToanRepository extends JpaRepository<HoaDonThanhToan, Integer> {
    @Query("SELECT hdtt.idHoaDon, hdtt.gioHang.idGioHang, hdtt.user.id, hdtt.soTienThanhToan, gh.trangThaiThanhToan, hdtt.ngayThanhToan FROM HoaDonThanhToan hdtt, GioHang gh WHERE gh.idGioHang = hdtt.gioHang.idGioHang")
    List<Object[]> getHoaDons();
}
