package com.vn.backend.service;

import com.vn.backend.entity.GioHang;
import com.vn.backend.repository.GioHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GioHangService implements IGioHangService {
    @Autowired
    private GioHangRepository repository;
    public void createGioHang(GioHang gioHang) {
        repository.save(gioHang);
    }
}
