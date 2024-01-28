package com.vn.backend.service;

import com.vn.backend.dto.SanPhamDTO;
import com.vn.backend.dto.filter.SanPhamFilter;
import com.vn.backend.entity.SanPham;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ISanPhamService {
    Page<SanPhamDTO> getAllSanPhams(Pageable pageable, SanPhamFilter filter, String search);

    Page<SanPhamDTO> findSanPhamsByDanhMucId(Integer idDanhMuc, Pageable pageable);

    SanPham findByIdSanPham(Integer id);

    void createSanPham(SanPham form);

    SanPham getSanPhamByID(Integer id);

    void updateSanPham(Integer id, SanPham form);

    void deleteSanPhams(List<Integer> ids);
}
