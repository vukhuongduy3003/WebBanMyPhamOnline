package com.vn.backend.service;

import com.vn.backend.entity.ChiTietGioHang;
import com.vn.backend.repository.ChiTietGioHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChiTietGioHangService implements IChiTietGioHangService {
    @Autowired
    private ChiTietGioHangRepository repository;
    public void createChiTietGioHang(ChiTietGioHang chiTietGioHang) {
        repository.save(chiTietGioHang);
    }
}
