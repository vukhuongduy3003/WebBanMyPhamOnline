package com.vn.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@Table(name = "`Tbl_DanhMuc`")
public class DanhMuc implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "`idDanhMuc`", unique = true, nullable = false)
    private int idDanhMuc;

    @Column(name = "`tenDanhMuc`", nullable = false, length = 200)
    private String tenDanhMuc;

    @Column(name = "`thuTu`", nullable = false)
    private int thuTu;

    @OneToMany(mappedBy = "danhMuc",  cascade = CascadeType.ALL)
    private Collection<SanPham> sanPhams;

    public DanhMuc(String tenDanhMuc, int thuTu) {
        this.tenDanhMuc = tenDanhMuc;
        this.thuTu = thuTu;
    }
}
