package com.vn.backend.specification;

import com.vn.backend.dto.filter.BaiVietFilter;
import com.vn.backend.entity.BaiViet;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class BaiVietSpecificationBuilder {

    private BaiVietFilter filter;
    private String search;

    public BaiVietSpecificationBuilder(BaiVietFilter filter, String search) {
        this.filter = filter;
        this.search = search;
    }

    @SuppressWarnings("deprecation")
    public Specification<BaiViet> build() {

        SearchCriteria seachCriteria = new SearchCriteria("tieuDe", "Like", search);
        SearchCriteria minTotalMemberCriteria = new SearchCriteria("ngayViet", ">=", filter.getMinNgayViet());
        SearchCriteria maxTotalMemberCriteria = new SearchCriteria("ngayViet", "<=", filter.getMaxNgayViet());

        Specification<BaiViet> where = null;

        // search
        if (!StringUtils.isEmpty(search)) {
            where = new BaiVietSpecification(seachCriteria);
        }

        // min totalMember filter
        if (filter.getMinNgayViet() != 0) {
            if (where != null) {
                where = where.and(new BaiVietSpecification(minTotalMemberCriteria));
            } else {
                where = new BaiVietSpecification(minTotalMemberCriteria);
            }
        }

        // max totalMember filter
        if (filter.getMaxNgayViet() != 0) {
            if (where != null) {
                where = where.and(new BaiVietSpecification(maxTotalMemberCriteria));
            } else {
                where = new BaiVietSpecification(maxTotalMemberCriteria);
            }
        }

        return where;
    }
}
