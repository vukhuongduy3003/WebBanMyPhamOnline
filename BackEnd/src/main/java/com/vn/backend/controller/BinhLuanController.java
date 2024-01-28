package com.vn.backend.controller;

import com.vn.backend.dto.BinhLuanDTO;
import com.vn.backend.dto.filter.BinhLuanFilter;
import com.vn.backend.entity.BinhLuan;
import com.vn.backend.entity.SanPham;
import com.vn.backend.entity.User;
import com.vn.backend.service.IBinhLuanService;
import com.vn.backend.service.ISanPhamService;
import com.vn.backend.service.IUserService;
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
@RequestMapping("/api/v1/BinhLuans")
@Validated
public class BinhLuanController {

    @Autowired
    private IBinhLuanService service;

    @Autowired
    private ISanPhamService sanPhamService;

    @Autowired
    private IUserService userService;

    @GetMapping("/SanPhams/{idSanPham}")
    public ResponseEntity<?> findByIdSanPham(@PathVariable(name = "idSanPham") Integer idSanPham) {
        List<BinhLuanDTO> entities = service.findByIdSanPham(idSanPham);
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }

    @PostMapping("/SanPhams/{idSanPham}/Users/{id}")
    public ResponseEntity<?> createBinhLuan(@PathVariable(name = "idSanPham") Integer idSanPham, @PathVariable(name = "id") Integer id, @RequestBody BinhLuan form, Pageable pageable, BinhLuanFilter filter, @RequestParam(required = false) String search) {
        SanPham sanPham = sanPhamService.findByIdSanPham(idSanPham);
        User user = userService.findUserById(id);
        form.setSanPham(sanPham);
        form.setUser(user);
        service.createBinhLuan(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getBinhLuanByID(@PathVariable(name = "id") Integer id) {
        return new ResponseEntity<>(service.getBinhLuanByID(id), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateBinhLuan(@PathVariable(name = "id") Integer id, @RequestBody BinhLuan form) {
        service.updateBinhLuan(id, form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{ids}")
    public ResponseEntity<?> deleteBinhLuans(@PathVariable(name = "ids") List<Integer> ids) {
        service.deleteBinhLuans(ids);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }
}
