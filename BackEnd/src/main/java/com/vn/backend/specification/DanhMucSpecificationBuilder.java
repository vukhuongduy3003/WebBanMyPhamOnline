package com.vn.backend.specification;

import com.vn.backend.dto.filter.DanhMucFilter;
import com.vn.backend.entity.DanhMuc;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class DanhMucSpecificationBuilder {

    private DanhMucFilter filter;
    private String search;

    public DanhMucSpecificationBuilder(DanhMucFilter filter, String search) {
        this.filter = filter;
        this.search = search;
    }

    @SuppressWarnings("deprecation")
    public Specification<DanhMuc> build() {

        SearchCriteria seachCriteria = new SearchCriteria("tenDanhMuc", "Like", search);

        Specification<DanhMuc> where = null;

        // search
        if (!StringUtils.isEmpty(search)) {
            where = new DanhMucSpecification(seachCriteria);
        }

        return where;
    }
}
