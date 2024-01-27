package com.vn.backend.service;

import com.vn.backend.dto.filter.PhanHoiFilter;
import com.vn.backend.entity.PhanHoi;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IPhanHoiService {
    Page<PhanHoi> getAllPhanHois(Pageable pageable, PhanHoiFilter filter, String search);

    void createPhanHoi(PhanHoi form);

    PhanHoi getPhanHoiByID(Integer id);

    void updatePhanHoi(Integer id, PhanHoi form);

    void deletePhanHois(List<Integer> ids);
}
