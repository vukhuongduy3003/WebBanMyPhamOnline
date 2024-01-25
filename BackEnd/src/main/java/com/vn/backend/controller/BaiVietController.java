package com.vn.backend.controller;

import com.vn.backend.dto.filter.BaiVietFilter;
import com.vn.backend.entity.BaiViet;
import com.vn.backend.dto.BaiVietForm;
import com.vn.backend.service.IBaiVietService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/baiViets")
@Validated
public class BaiVietController {

    @Autowired
    private IBaiVietService service;

    @GetMapping()
    public ResponseEntity<?> getAllBaiViets(
            Pageable pageable,
            BaiVietFilter filter,
            @RequestParam(required = false)
            String search) {
        Page<BaiViet> entities = service.getAllBaiViets(pageable, filter, search);
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createBaiViet(@RequestBody BaiVietForm form) {
        service.createBaiViet(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getBaiVietByID(@PathVariable(name = "id") Integer id) {
        return new ResponseEntity<>(service.getBaiVietByID(id), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateBaiViet(@PathVariable(name = "id") Integer id, @RequestBody BaiVietForm form) {
        service.updateBaiViet(id, form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{ids}")
    public ResponseEntity<?> deleteBaiViets(@PathVariable(name = "ids") List<Integer> ids) {
        service.deleteBaiViets(ids);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }
}
