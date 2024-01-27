package com.vn.backend.specification;

import com.vn.backend.dto.filter.PhanHoiFilter;
import com.vn.backend.dto.filter.PhanHoiFilter;
import com.vn.backend.entity.PhanHoi;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class PhanHoiSpecificationBuilder {
    private PhanHoiFilter filter;
    private String search;

    public PhanHoiSpecificationBuilder(PhanHoiFilter filter, String search) {
        this.filter = filter;
        this.search = search;
    }

    @SuppressWarnings("deprecation")
    public Specification<PhanHoi> build() {

        SearchCriteria seachCriteria = new SearchCriteria("tenPhanHoi", "Like", search);

        Specification<PhanHoi> where = null;

        // search
        if (!StringUtils.isEmpty(search)) {
            where = new PhanHoiSpecification(seachCriteria);
        }

        return where;
    }
}
