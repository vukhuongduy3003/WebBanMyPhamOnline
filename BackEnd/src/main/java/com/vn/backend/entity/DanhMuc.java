package com.vn.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

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

    public DanhMuc(String tenDanhMuc, int thuTu) {
        this.tenDanhMuc = tenDanhMuc;
        this.thuTu = thuTu;
    }
}
