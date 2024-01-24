package com.vn.backend.repository;

import com.vn.backend.entity.BaiViet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface BaiVietRepository extends JpaRepository<BaiViet, Integer>, JpaSpecificationExecutor<BaiViet> {
    public void deleteByIdBaiVietIn(List<Integer> ids);
}
