package com.vn.backend.service;

import com.vn.backend.dto.SanPhamDTO;
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
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SanPhamService implements ISanPhamService {

    @Autowired
    private SanPhamRepository repository;

    private SanPhamDTO convertToDTO(SanPham sanPham) {
        SanPhamDTO dto = new SanPhamDTO();
        dto.setIdSanPham(sanPham.getIdSanPham());
        dto.setTenSanPham(sanPham.getTenSanPham());
        dto.setSoLuong(sanPham.getSoLuong());
        dto.setGiaSanPham(sanPham.getGiaSanPham());
        dto.setGiaSale(sanPham.getGiaSale());
        dto.setHinhAnh(sanPham.getHinhAnh());
        dto.setNgaySanXuat(sanPham.getNgaySanXuat());
        dto.setNgayHetHan(sanPham.getNgayHetHan());
        dto.setMoTa(sanPham.getMoTa());
        dto.setTinhTrang(sanPham.getTinhTrang());
        dto.setIdDanhMuc(sanPham.getDanhMuc().getIdDanhMuc());
        return dto;
    }

    public Page<SanPhamDTO> getAllSanPhams(Pageable pageable, SanPhamFilter filter, String search) {
        SanPhamSpecificationBuilder specification = new SanPhamSpecificationBuilder(filter, search);

        Page<SanPham> sanPhamPage = repository.findAll(specification.build(), pageable);

        List<SanPhamDTO> sanPhamDTOList = sanPhamPage.getContent().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());

        return new PageImpl<>(sanPhamDTOList, pageable, sanPhamPage.getTotalElements());
    }


    public Page<SanPhamDTO> findSanPhamsByDanhMucId(Integer idDanhMuc, Pageable pageable) {
        return repository.findSanPhamsByDanhMucId(idDanhMuc, pageable);
    }

    public SanPham findByIdSanPham(Integer id) {
        return repository.findById(id).get();
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
}
