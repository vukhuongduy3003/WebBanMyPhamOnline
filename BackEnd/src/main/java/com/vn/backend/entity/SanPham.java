package com.vn.backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@Table(name = "`Tbl_SanPham`")
public class SanPham implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "`idSP`", unique = true, nullable = false)
    private int idSanPham;

    @Column(name = "`tenSP`", nullable = false, length = 200)
    private String tenSanPham;

    @Column(name = "`soLuong`", nullable = false)
    private Integer soLuong;

    @Column(name = "`giaSP`", nullable = false)
    private Integer giaSanPham;

    @Column(name = "`giaSale`", nullable = false)
    private Integer giaSale;

    @Column(name = "`hinhAnh`", nullable = false, length = 500)
    private String hinhAnh;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "`ngaySanXuat`", nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    @Type(type = "org.hibernate.type.LocalDateType")
    private LocalDate ngaySanXuat;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "`ngayHetHan`", nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    @Type(type = "org.hibernate.type.LocalDateType")
    private LocalDate ngayHetHan;

    @Column(name = "`moTa`", nullable = false)
    private String moTa;

    @Column(name = "`tinhTrang`", nullable = false)
    private Integer tinhTrang;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idDanhMuc", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private DanhMuc danhMuc;
}
