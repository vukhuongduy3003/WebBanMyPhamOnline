package com.vn.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ThanhToanCreateRequest {
    private Integer id;
    private Integer trangThaiThanhToan;
    private Integer idSanPham;
    private Integer soLuongMua;
    private Integer soTienThanhToan;
}
