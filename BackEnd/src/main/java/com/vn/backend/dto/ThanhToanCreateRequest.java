package com.vn.backend.dto;

import com.vn.backend.entity.SanPham;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ThanhToanCreateRequest {
    private Integer id;
    private Integer trangThaiThanhToan;
    private List<ChiTietDonHangDTO> sanPhams;
    private Integer soTienThanhToan;
}
