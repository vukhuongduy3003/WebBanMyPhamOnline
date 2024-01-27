package com.vn.backend.specification;

import com.vn.backend.entity.PhanHoi;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class PhanHoiSpecification implements Specification<PhanHoi> {

    private static final long serialVersionUID = 1L;
    private SearchCriteria criteria;

    public PhanHoiSpecification(SearchCriteria criteria) {
        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<PhanHoi> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

        if (criteria.getOperator().equalsIgnoreCase("Like")) {
            return criteriaBuilder.like(root.get(criteria.getKey()), "%" + criteria.getValue() + "%");
        }

        return null;
    }

}
