package com.vn.backend.service;

import com.vn.backend.dto.filter.DanhMucFilter;
import com.vn.backend.entity.DanhMuc;
import com.vn.backend.repository.DanhMucRepository;
import com.vn.backend.specification.DanhMucSpecificationBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DanhMucService implements IDanhMucService {

    @Autowired
    private DanhMucRepository repository;

    public Page<DanhMuc> getAllDanhMucs(Pageable pageable, DanhMucFilter filter, String search) {

        DanhMucSpecificationBuilder specification = new DanhMucSpecificationBuilder(filter, search);

        return repository.findAll(specification.build(), pageable);
    }

    public void createDanhMuc(DanhMuc form) {
        repository.save(form);
    }

    public DanhMuc getDanhMucByID(Integer id) {
        return repository.findById(id).get();
    }

    public void updateDanhMuc(Integer id, DanhMuc form) {
        DanhMuc entity = repository.findById(id).get();
        entity.setTenDanhMuc(form.getTenDanhMuc());
        entity.setThuTu(form.getThuTu());
        repository.save(entity);
    }

    @Transactional
    public void deleteDanhMucs(List<Integer> ids) {
        repository.deleteByIdDanhMucIn(ids);
    }

}
