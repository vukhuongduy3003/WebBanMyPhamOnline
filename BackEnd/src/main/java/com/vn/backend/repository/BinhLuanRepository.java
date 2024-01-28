package com.vn.backend.repository;

import com.vn.backend.dto.BinhLuanDTO;
import com.vn.backend.entity.BinhLuan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BinhLuanRepository extends JpaRepository<BinhLuan, Integer>, JpaSpecificationExecutor<BinhLuan> {
    @Query("SELECT bl.idBinhLuan, bl.noiDung, bl.user.fullName " +
            "FROM BinhLuan bl WHERE bl.sanPham.idSanPham = :idSanPham")
    List<Object[]> findBinhLuansByBinhLuanId(@Param("idSanPham") Integer idSanPham);
    void deleteByIdBinhLuanIn(List<Integer> ids);
}
