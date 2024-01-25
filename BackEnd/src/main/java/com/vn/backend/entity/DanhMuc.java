package com.vn.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
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
}
