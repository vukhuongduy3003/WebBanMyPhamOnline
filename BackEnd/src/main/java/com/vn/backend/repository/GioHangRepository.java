package com.vn.backend.repository;

import com.vn.backend.entity.GioHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface GioHangRepository extends JpaRepository<GioHang, Integer> {
    @Query("SELECT g FROM GioHang g WHERE g.idGioHang = (SELECT MAX(g2.idGioHang) FROM GioHang g2)")
    GioHang findGioHangWithMaxId();
}
