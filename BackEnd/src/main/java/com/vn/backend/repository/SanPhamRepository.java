package com.vn.backend.repository;

import com.vn.backend.entity.SanPham;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SanPhamRepository extends JpaRepository<SanPham, Integer>, JpaSpecificationExecutor<SanPham> {
    @Query("SELECT sp FROM SanPham sp WHERE sp.danhMuc.idDanhMuc = :idDanhMuc")
    List<SanPham> findSanPhamsByDanhMucId(@Param("idDanhMuc") Integer idDanhMuc);

    public void deleteByIdSanPhamIn(List<Integer> ids);
}
