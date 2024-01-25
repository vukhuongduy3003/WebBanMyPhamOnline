package com.vn.backend.specification;

import com.vn.backend.dto.filter.SanPhamFilter;
import com.vn.backend.entity.SanPham;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class SanPhamSpecificationBuilder {

    private SanPhamFilter filter;
    private String search;

    public SanPhamSpecificationBuilder(SanPhamFilter filter, String search) {
        this.filter = filter;
        this.search = search;
    }

    @SuppressWarnings("deprecation")
    public Specification<SanPham> build(Integer idDanhMuc) {

        SearchCriteria seachCriteria = new SearchCriteria("idDanhMuc", "=", idDanhMuc);

        Specification<SanPham> where = null;

        // search
        if (!StringUtils.isEmpty(idDanhMuc)) {
            where = new SanPhamSpecification(seachCriteria);
        }

        return where;
    }

}
