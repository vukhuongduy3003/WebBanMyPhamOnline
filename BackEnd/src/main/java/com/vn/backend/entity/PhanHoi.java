package com.vn.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@Table(name = "`Tbl_PhanHoi`")
public class PhanHoi implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "`idPhanHoi`", unique = true, nullable = false)
    private int idPhanHoi;

    @Column(name = "`noiDung`", nullable = false)
    private String noiDung;

    @Column(name = "`danhGia`", nullable = false)
    private Integer danhGia;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;
}
