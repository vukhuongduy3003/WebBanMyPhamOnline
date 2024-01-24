package com.vn.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name = "`Tbl_BaiViet`")
public class BaiViet implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "`idBaiViet`", unique = true, nullable = false)
    private int idBaiViet;

    @Column(name = "`tieuDe`", nullable = false, length = 250)
    private String tieuDe;

    @Column(name = "anhBaiViet", nullable = false, length = 500)
    private String anhBaiViet;

    @Column(name = "`tomTat`", nullable = false)
    private String tomTat;

    @Column(name = "`noiDung`", nullable = false)
    private String noiDung;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "`ngayViet`", nullable = false)
    @Type(type = "org.hibernate.type.LocalDateTimeType")
    private LocalDateTime ngayViet;

    public BaiViet(String tieuDe, String anhBaiViet, String tomTat, String noiDung) {
        this.tieuDe = tieuDe;
        this.anhBaiViet = anhBaiViet;
        this.tomTat = tomTat;
        this.noiDung = noiDung;
        this.ngayViet = LocalDateTime.now();
    }
}
