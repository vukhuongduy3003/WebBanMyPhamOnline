package com.vn.backend.controller;

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
@RequestMapping("/api/v1")
@Validated
public class SanPhamController {
    @Autowired
    private ISanPhamService service;

    @Autowired
    private IDanhMucService danhMucService;

    @GetMapping("/danhMucs/{idDanhMuc}/sanPhams")
    public ResponseEntity<?> getAllSanPhamsByDanhMucId(
            Pageable pageable,
            SanPhamFilter filter,
            @PathVariable(value = "idDanhMuc") Integer idDanhMuc,
            @RequestParam(required = false)
            String search) {
        Page<SanPham> entities = service.getAllSanPhamsByDanhMucId(idDanhMuc, pageable, filter, search);
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }

//    @GetMapping("/sanPhams/{}")
//    public ResponseEntity<?> getSanPhamsByIdSanPham(
//            Pageable pageable,
//            SanPhamFilter filter,
//            @RequestParam(required = false)
//            String search) {
//        Page<SanPham> entities = service.getAllSanPhams(pageable, filter, search);
//        return new ResponseEntity<>(entities, HttpStatus.OK);
//    }

    @PostMapping("/danhMucs/{idDanhMuc}/sanPhams")
    public ResponseEntity<?> createSanPham(@PathVariable(value = "idDanhMuc") Integer idDanhMuc, @RequestBody SanPham form) {
        DanhMuc danhMuc = danhMucService.getDanhMucByID(idDanhMuc);
        form.setDanhMuc(danhMuc);
        service.createSanPham(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @GetMapping(value = "/sanPhams/{id}")
    public ResponseEntity<?> getSanPhamByID(@PathVariable(name = "id") Integer id) {
        return new ResponseEntity<>(service.getSanPhamByID(id), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateSanPham(@PathVariable(name = "id") Integer id, @RequestBody SanPham form) {
        service.updateSanPham(id, form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{ids}")
    public ResponseEntity<?> deleteSanPhams(@PathVariable(name = "ids") List<Integer> ids) {
        service.deleteSanPhams(ids);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }
}
