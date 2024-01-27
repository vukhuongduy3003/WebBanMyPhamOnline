package com.vn.backend.repository;

import com.vn.backend.entity.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SanPhamRepository extends JpaRepository<SanPham, Integer>, JpaSpecificationExecutor<SanPham> {
    @Query("SELECT sp FROM SanPham sp WHERE sp.danhMuc.idDanhMuc = :idDanhMuc")
    List<SanPham> findSanPhamsByDanhMucId(@Param("idDanhMuc") Integer idDanhMuc);

    public void deleteByIdSanPhamIn(List<Integer> ids);
}
