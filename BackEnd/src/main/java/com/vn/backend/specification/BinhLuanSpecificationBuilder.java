package com.vn.backend.specification;

import com.vn.backend.dto.filter.BinhLuanFilter;
import com.vn.backend.entity.BinhLuan;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class BinhLuanSpecificationBuilder {

    private BinhLuanFilter filter;
    private String search;

    public BinhLuanSpecificationBuilder(BinhLuanFilter filter, String search) {
        this.filter = filter;
        this.search = search;
    }

    @SuppressWarnings("deprecation")
    public Specification<BinhLuan> build() {

        SearchCriteria seachCriteria = new SearchCriteria("tieuDe", "Like", search);

        Specification<BinhLuan> where = null;

        // search
        if (!StringUtils.isEmpty(search)) {
            where = new BinhLuanSpecification(seachCriteria);
        }

        return where;
    }
}
