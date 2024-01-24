package com.vn.backend.service;

import com.vn.backend.dto.BaiVietForm;
import com.vn.backend.dto.filter.BaiVietFilter;
import com.vn.backend.entity.BaiViet;
import com.vn.backend.repository.BaiVietRepository;
import com.vn.backend.specification.BaiVietSpecificationBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class BaiVietService implements IBaiVietService {

    @Autowired
    private BaiVietRepository repository;

    public Page<BaiViet> getAllBaiViets(Pageable pageable, BaiVietFilter filter, String search) {

        BaiVietSpecificationBuilder specification = new BaiVietSpecificationBuilder(filter, search);

        return repository.findAll(specification.build(), pageable);
    }

    public void createBaiViet(BaiVietForm form) {
        repository.save(form.toEntity());
    }

    public BaiViet getBaiVietByID(Integer id) {
        return repository.findById(id).get();
    }

    public void updateBaiViet(Integer id, BaiVietForm form) {
        BaiViet entity = repository.findById(id).get();
        entity.setTieuDe(form.getTieuDe());
        entity.setAnhBaiViet(form.getAnhBaiViet());
        entity.setTomTat(form.getTomTat());
        entity.setNoiDung(form.getNoiDung());
        entity.setNgayViet(LocalDateTime.now());
        repository.save(entity);
    }

    @Transactional
    public void deleteBaiViets(List<Integer> ids) {
        repository.deleteByIdBaiVietIn(ids);
    }

}
