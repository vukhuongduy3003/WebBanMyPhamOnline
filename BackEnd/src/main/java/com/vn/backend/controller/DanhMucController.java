package com.vn.backend.controller;

import com.vn.backend.dto.filter.DanhMucFilter;
import com.vn.backend.entity.DanhMuc;
import com.vn.backend.service.IDanhMucService;
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
@RequestMapping("/api/v1/danhMucs")
@Validated
public class DanhMucController {
    @Autowired
    private IDanhMucService service;

    @GetMapping()
    public ResponseEntity<?> getAllDanhMucs(
            Pageable pageable,
            DanhMucFilter filter,
            @RequestParam(required = false)
            String search) {
        Page<DanhMuc> entities = service.getAllDanhMucs(pageable, filter, search);
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createDanhMuc(@RequestBody DanhMuc form) {
        service.createDanhMuc(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getDanhMucByID(@PathVariable(name = "id") Integer id) {
        return new ResponseEntity<>(service.getDanhMucByID(id), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateDanhMuc(@PathVariable(name = "id") Integer id, @RequestBody DanhMuc form) {
        service.updateDanhMuc(id, form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{ids}")
    public ResponseEntity<?> deleteDanhMucs(@PathVariable(name = "ids") List<Integer> ids) {
        service.deleteDanhMucs(ids);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }
}
