package com.vn.backend.controller;

import com.vn.backend.dto.ChiTietDTO;
import com.vn.backend.dto.HoaDonDTO;
import com.vn.backend.repository.ChiTietGioHangRepository;
import com.vn.backend.repository.HoaDonThanhToanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/donHangs")
@Validated
public class DonHangController {
    @Autowired
    private HoaDonThanhToanRepository repository;

    @Autowired
    private ChiTietGioHangRepository chiTietGioHangRepository;

    List<ChiTietDTO> mapToChiTietDTO(List<Object[]> results) {
        List<ChiTietDTO> chiTietDTOList = new ArrayList<>();
        for (Object[] result : results) {
            ChiTietDTO chiTietDTO = new ChiTietDTO();
            chiTietDTO.setIdSanPham((Integer) result[0]);
            chiTietDTO.setTenSP((String) result[1]);
            chiTietDTO.setSoLuongMua((Integer) result[2]);
            chiTietDTO.setDonGia((Integer) result[3]);
            chiTietDTOList.add(chiTietDTO);
        }
        return chiTietDTOList;
    }

    List<HoaDonDTO> mapToHoaDonDTO(List<Object[]> results) {
        List<HoaDonDTO> hoaDonDTOs = new ArrayList<>();
        for (Object[] result : results) {
            HoaDonDTO hoaDonDTO = new HoaDonDTO();
            hoaDonDTO.setIdHoaDon((Integer) result[0]);
            hoaDonDTO.setId((Integer) result[1]);
            List<Object[]> objects = chiTietGioHangRepository.findByIdGioHang((Integer) result[2]);
            hoaDonDTO.setChiTietDTOList(mapToChiTietDTO(objects));
            hoaDonDTO.setSoTienThanhToan((Integer) result[3]);
            hoaDonDTO.setTrangThaiThanhToan((Integer) result[4]);
            hoaDonDTO.setNgayThanhToan((LocalDateTime) result[5]);
            hoaDonDTOs.add(hoaDonDTO);
        }
        return hoaDonDTOs;
    }

    @GetMapping()
    public ResponseEntity<?> getAllHoaDons() {
        List<Object[]> entities = repository.getHoaDons();
        return new ResponseEntity<>(mapToHoaDonDTO(entities), HttpStatus.OK);
    }

    @GetMapping("/users/{idUser}")
    public ResponseEntity<?> getAllHoaDons(@PathVariable(name = "idUser") Integer idUser) {
        List<Object[]> entities = repository.getHoaDons();
        List<HoaDonDTO> hoaDonDTOList = mapToHoaDonDTO(entities);
        List<HoaDonDTO> results = new ArrayList<>();
        for (HoaDonDTO h : hoaDonDTOList) {
            if (Objects.equals(h.getId(), idUser))
                results.add(h);
        }
        return new ResponseEntity<>(results, HttpStatus.OK);
    }
}
