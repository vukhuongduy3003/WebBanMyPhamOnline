package com.vn.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HoaDonDTO {
    private Integer idHoaDon;
    private Integer id;
    private Integer soTienThanhToan;
    private Integer trangThaiThanhToan;
    private LocalDateTime ngayThanhToan;
    private List<ChiTietDTO> chiTietDTOList;
}
