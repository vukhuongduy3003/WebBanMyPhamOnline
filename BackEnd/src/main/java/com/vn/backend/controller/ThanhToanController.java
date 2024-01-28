package com.vn.backend.controller;

import com.vn.backend.dto.ChiTietDonHangDTO;
import com.vn.backend.dto.ThanhToanCreateRequest;
import com.vn.backend.entity.*;
import com.vn.backend.repository.GioHangRepository;
import com.vn.backend.repository.SanPhamRepository;
import com.vn.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/thanhToan")
@Validated
public class ThanhToanController {
    @Autowired
    private IGioHangService gioHangService;
    @Autowired
    private IChiTietGioHangService chiTietGioHangService;
    @Autowired
    private IHoaDonThanhToanService hoaDonThanhToanService;
    @Autowired
    private IUserService userService;
    @Autowired
    private GioHangRepository gioHangRepository;
    @Autowired
    private SanPhamRepository sanPhamRepository;
    @PostMapping
    public ResponseEntity<?> createThanhToan(@RequestBody ThanhToanCreateRequest form) {
        GioHang gioHang = new GioHang();
        User user = userService.findUserById(form.getId());
        gioHang.setUser(user);
        gioHang.setNgayTao(LocalDateTime.now());
        gioHang.setTrangThaiThanhToan(form.getTrangThaiThanhToan());
        gioHangService.createGioHang(gioHang);

        GioHang gioHang1 = gioHangRepository.findGioHangWithMaxId();
        for(ChiTietDonHangDTO s : form.getSanPhams()) {
            ChiTietGioHang chiTietGioHang = new ChiTietGioHang();
            chiTietGioHang.setGioHang(gioHang1);
            SanPham sanPham = sanPhamRepository.findById(s.getIdSanPham()).get();
            chiTietGioHang.setSanPham(sanPham);
            chiTietGioHang.setSoLuongMua(s.getSoLuongMua());
            chiTietGioHangService.createChiTietGioHang(chiTietGioHang);
        }

        HoaDonThanhToan hoaDonThanhToan = new HoaDonThanhToan();
        hoaDonThanhToan.setGioHang(gioHang1);
        hoaDonThanhToan.setUser(user);
        hoaDonThanhToan.setNgayThanhToan(LocalDateTime.now());
        hoaDonThanhToan.setSoTienThanhToan(form.getSoTienThanhToan());
        hoaDonThanhToanService.createHoaDonThanhToan(hoaDonThanhToan);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }
}
