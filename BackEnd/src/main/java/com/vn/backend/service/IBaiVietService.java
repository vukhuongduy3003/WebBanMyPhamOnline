package com.vn.backend.service;

import com.vn.backend.dto.BaiVietForm;
import com.vn.backend.dto.filter.BaiVietFilter;
import com.vn.backend.entity.BaiViet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBaiVietService {
    Page<BaiViet> getAllBaiViets(Pageable pageable, BaiVietFilter filter, String search);

    void createBaiViet(BaiVietForm form);

    BaiViet getBaiVietByID(Integer id);

    void updateBaiViet(Integer id, BaiVietForm form);

    void deleteBaiViets(List<Integer> ids);
}
