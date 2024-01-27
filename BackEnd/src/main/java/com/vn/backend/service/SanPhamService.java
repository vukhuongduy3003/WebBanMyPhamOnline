package com.vn.backend.service;

import com.vn.backend.dto.filter.DanhMucFilter;
import com.vn.backend.dto.filter.SanPhamFilter;
import com.vn.backend.entity.DanhMuc;
import com.vn.backend.entity.SanPham;
import com.vn.backend.repository.DanhMucRepository;
import com.vn.backend.repository.SanPhamRepository;
import com.vn.backend.specification.BaiVietSpecificationBuilder;
import com.vn.backend.specification.DanhMucSpecificationBuilder;
import com.vn.backend.specification.SanPhamSpecificationBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SanPhamService implements ISanPhamService {

    @Autowired
    private SanPhamRepository repository;

    @Autowired
    private DanhMucRepository danhMucRepository;

    public Page<SanPham> getAllSanPhams(Pageable pageable, SanPhamFilter filter, String search) {

        SanPhamSpecificationBuilder specification = new SanPhamSpecificationBuilder(filter, search);

        return repository.findAll(specification.build(), pageable);
    }

    public List<SanPham> findSanPhamsByDanhMucId(Integer idDanhMuc) {
        return repository.findSanPhamsByDanhMucId(idDanhMuc);
    }

    public void createSanPham(SanPham form) {
        repository.save(form);
    }

    public SanPham getSanPhamByID(Integer id) {
        return repository.findById(id).get();
    }

    public void updateSanPham(Integer id, SanPham form) {
        SanPham entity = repository.findById(id).get();
        entity.setTenSanPham(form.getTenSanPham());
        entity.setSoLuong(form.getSoLuong());
        entity.setGiaSanPham(form.getGiaSanPham());
        entity.setGiaSale(form.getGiaSale());
        entity.setHinhAnh(form.getHinhAnh());
        entity.setNgaySanXuat(form.getNgaySanXuat());
        entity.setNgayHetHan(form.getNgayHetHan());
        entity.setMoTa(form.getMoTa());
        entity.setTinhTrang(form.getTinhTrang());
        entity.setDanhMuc(form.getDanhMuc());
        repository.save(entity);
    }

    @Transactional
    public void deleteSanPhams(List<Integer> ids) {
        repository.deleteByIdSanPhamIn(ids);
    }

    public DanhMuc findByIdDanhMuc(Integer id) {
        return danhMucRepository.findById(id).get();
    }

}
