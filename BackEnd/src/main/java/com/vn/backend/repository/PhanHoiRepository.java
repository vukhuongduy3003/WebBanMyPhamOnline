package com.vn.backend.repository;

import com.vn.backend.entity.PhanHoi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhanHoiRepository extends JpaRepository<PhanHoi, Integer>, JpaSpecificationExecutor<PhanHoi> {
    public void deleteByIdPhanHoiIn(List<Integer> ids);
}
