package com.vn.backend.repository;

import com.vn.backend.dto.SanPhamDTO;
import com.vn.backend.entity.SanPham;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SanPhamRepository extends JpaRepository<SanPham, Integer>, JpaSpecificationExecutor<SanPham> {
    @Query("SELECT new com.vn.backend.dto.SanPhamDTO(sp.idSanPham, sp.tenSanPham, sp.soLuong, sp.giaSanPham, sp.giaSale, sp.hinhAnh, sp.ngaySanXuat, sp.ngayHetHan, sp.moTa, sp.tinhTrang, sp.danhMuc.idDanhMuc) FROM SanPham sp WHERE sp.danhMuc.idDanhMuc = :idDanhMuc")
    Page<SanPhamDTO> findSanPhamsByDanhMucId(@Param("idDanhMuc") Integer idDanhMuc, Pageable pageable);

    public void deleteByIdSanPhamIn(List<Integer> ids);
}
