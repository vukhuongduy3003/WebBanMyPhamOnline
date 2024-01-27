package com.vn.backend.service;

import com.vn.backend.dto.filter.PhanHoiFilter;
import com.vn.backend.entity.PhanHoi;
import com.vn.backend.repository.DanhMucRepository;
import com.vn.backend.repository.PhanHoiRepository;
import com.vn.backend.specification.PhanHoiSpecificationBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PhanHoiService implements IPhanHoiService {
    @Autowired
    private PhanHoiRepository repository;

    public Page<PhanHoi> getAllPhanHois(Pageable pageable, PhanHoiFilter filter, String search) {
        PhanHoiSpecificationBuilder specification = new PhanHoiSpecificationBuilder(filter, search);
        return repository.findAll(specification.build(), pageable);
    }

    public void createPhanHoi(PhanHoi form) {
        repository.save(form);
    }

    public PhanHoi getPhanHoiByID(Integer id) {
        return repository.findById(id).get();
    }

    public void updatePhanHoi(Integer id, PhanHoi form) {
        PhanHoi entity = repository.findById(id).get();
        entity.setNoiDung(form.getNoiDung());
        entity.setDanhGia(form.getDanhGia());
        entity.setUser(form.getUser());
        repository.save(entity);
    }

    @Transactional
    public void deletePhanHois(List<Integer> ids) {
        repository.deleteByIdPhanHoiIn(ids);
    }
}
