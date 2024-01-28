package com.vn.backend.service;

import com.vn.backend.entity.HoaDonThanhToan;
import com.vn.backend.repository.HoaDonThanhToanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HoaDonThanhToanService implements IHoaDonThanhToanService {
    @Autowired
    private HoaDonThanhToanRepository repository;
    public void createHoaDonThanhToan(HoaDonThanhToan hoaDonThanhToan) {
        repository.save(hoaDonThanhToan);
    }
}
