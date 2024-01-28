package com.vn.backend.service;

import com.vn.backend.dto.BinhLuanDTO;
import com.vn.backend.dto.filter.BinhLuanFilter;
import com.vn.backend.entity.BinhLuan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBinhLuanService {
    List<BinhLuanDTO> findByIdSanPham(Integer id);

    void createBinhLuan(BinhLuan form);

    BinhLuan getBinhLuanByID(Integer id);

    void updateBinhLuan(Integer id, BinhLuan form);

    void deleteBinhLuans(List<Integer> ids);
}
