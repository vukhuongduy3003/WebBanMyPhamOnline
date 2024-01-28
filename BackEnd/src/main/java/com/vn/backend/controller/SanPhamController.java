package com.vn.backend.controller;

import com.vn.backend.dto.SanPhamCreateRequest;
import com.vn.backend.dto.SanPhamDTO;
import com.vn.backend.dto.filter.SanPhamFilter;
import com.vn.backend.entity.DanhMuc;
import com.vn.backend.entity.SanPham;
import com.vn.backend.service.IDanhMucService;
import com.vn.backend.service.ISanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/sanPhams")
@Validated
public class SanPhamController {
    @Autowired
    private ISanPhamService service;

    @Autowired
    private IDanhMucService danhMucService;

    @GetMapping()
    public ResponseEntity<?> getAllSanPhams(
            Pageable pageable,
            SanPhamFilter filter,
            @RequestParam(required = false)
            String search) {
        Page<SanPhamDTO> entities = service.getAllSanPhams(pageable, filter, search);
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }

    @GetMapping("/danhMucs/{idDanhMuc}")
    public ResponseEntity<?> findSanPhamsByDanhMucId(@PathVariable Integer idDanhMuc, Pageable pageable) {
        Page<SanPhamDTO> entities = service.findSanPhamsByDanhMucId(idDanhMuc, pageable);
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createSanPham( @RequestBody SanPhamCreateRequest form) {
        DanhMuc danhMuc = danhMucService.getDanhMucByID(form.getIdDanhMuc());
        SanPham sanPham = new SanPham();
        sanPham.setTenSanPham(form.getTenSanPham());
        sanPham.setSoLuong(form.getSoLuong());
        sanPham.setGiaSanPham(form.getGiaSanPham());
        sanPham.setGiaSale(form.getGiaSale());
        sanPham.setHinhAnh(form.getHinhAnh());
        sanPham.setNgaySanXuat(form.getNgaySanXuat());
        sanPham.setNgayHetHan(form.getNgayHetHan());
        sanPham.setMoTa(form.getMoTa());
        sanPham.setTinhTrang(form.getTinhTrang());
        sanPham.setDanhMuc(danhMuc);
        form.setDanhMuc(danhMuc);
        service.createSanPham(sanPham);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getSanPhamByID(@PathVariable(name = "id") Integer id) {
        return new ResponseEntity<>(service.getSanPhamByID(id), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateSanPham(@PathVariable(name = "id") Integer id, @RequestBody SanPhamCreateRequest form) {
        DanhMuc danhMuc = danhMucService.getDanhMucByID(form.getIdDanhMuc());
        SanPham sanPham = new SanPham();
        sanPham.setTenSanPham(form.getTenSanPham());
        sanPham.setSoLuong(form.getSoLuong());
        sanPham.setGiaSanPham(form.getGiaSanPham());
        sanPham.setGiaSale(form.getGiaSale());
        sanPham.setHinhAnh(form.getHinhAnh());
        sanPham.setNgaySanXuat(form.getNgaySanXuat());
        sanPham.setNgayHetHan(form.getNgayHetHan());
        sanPham.setMoTa(form.getMoTa());
        sanPham.setTinhTrang(form.getTinhTrang());
        sanPham.setDanhMuc(danhMuc);
        form.setDanhMuc(danhMuc);
        form.setDanhMuc(danhMuc);
        service.updateSanPham(id, form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{ids}")
    public ResponseEntity<?> deleteSanPhams(@PathVariable(name = "ids") List<Integer> ids) {
        service.deleteSanPhams(ids);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }
}
