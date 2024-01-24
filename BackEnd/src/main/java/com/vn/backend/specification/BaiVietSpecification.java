package com.vn.backend.specification;

import com.vn.backend.entity.BaiViet;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.time.LocalDate;

public class BaiVietSpecification implements Specification<BaiViet> {

    private static final long serialVersionUID = 1L;
    private SearchCriteria criteria;

    public BaiVietSpecification(SearchCriteria criteria) {
        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<BaiViet> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

        if (criteria.getOperator().equalsIgnoreCase("Like")) {
            return criteriaBuilder.like(root.get(criteria.getKey()), "%" + criteria.getValue() + "%");
        }

        if (criteria.getOperator().equalsIgnoreCase(">=")) {
            if (criteria.getValue() instanceof LocalDate) {
                return criteriaBuilder.greaterThanOrEqualTo(root.get(criteria.getKey()).as(LocalDate.class), (LocalDate) criteria.getValue());
            }
        }

        if (criteria.getOperator().equalsIgnoreCase("<=")) {
            if (criteria.getValue() instanceof LocalDate) {
                return criteriaBuilder.lessThanOrEqualTo(root.get(criteria.getKey()).as(LocalDate.class), (LocalDate) criteria.getValue());
            }
        }

        return null;
    }

}
