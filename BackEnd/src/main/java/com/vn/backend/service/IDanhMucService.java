package com.vn.backend.service;

import com.vn.backend.dto.filter.DanhMucFilter;
import com.vn.backend.entity.DanhMuc;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IDanhMucService {
    Page<DanhMuc> getAllDanhMucs(Pageable pageable, DanhMucFilter filter, String search);

    void createDanhMuc(DanhMuc form);

    DanhMuc getDanhMucByID(Integer id);

    void updateDanhMuc(Integer id, DanhMuc form);

    void deleteDanhMucs(List<Integer> ids);
}
