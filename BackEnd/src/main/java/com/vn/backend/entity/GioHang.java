package com.vn.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "`GioHang`")
public class GioHang implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "`idGioHang`", unique = true, nullable = false)
    private Integer idGioHang;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "`ngayTao`", nullable = false)
    @Type(type = "org.hibernate.type.LocalDateTimeType")
    private LocalDateTime ngayTao;

    @Column(name = "`trangThaiThanhToan`", nullable = false)
    private Integer trangThaiThanhToan;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;
}
