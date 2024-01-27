package com.vn.backend.service;

import com.vn.backend.dto.filter.SanPhamFilter;
import com.vn.backend.entity.SanPham;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ISanPhamService {
    Page<SanPham> getAllSanPhams(Pageable pageable, SanPhamFilter filter, String search);

    List<SanPham> findSanPhamsByDanhMucId(Integer idDanhMuc);

    void createSanPham(SanPham form);

    SanPham getSanPhamByID(Integer id);

    void updateSanPham(Integer id, SanPham form);

    void deleteSanPhams(List<Integer> ids);
}
