package com.vn.backend.repository;

import com.vn.backend.entity.DanhMuc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface DanhMucRepository extends JpaRepository<DanhMuc, Integer>, JpaSpecificationExecutor<DanhMuc> {
    public void deleteByIdDanhMucIn(List<Integer> ids);
}
