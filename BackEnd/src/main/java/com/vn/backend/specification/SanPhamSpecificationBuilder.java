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
    public Specification<SanPham> build() {

        SearchCriteria seachCriteria = new SearchCriteria("tenSP", "LIKE", search);

        Specification<SanPham> where = null;

        // search
        if (!StringUtils.isEmpty(search)) {
            where = new SanPhamSpecification(seachCriteria);
        }

        return where;
    }

}
