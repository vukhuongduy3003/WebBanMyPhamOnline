package com.vn.backend.dto;

import com.vn.backend.entity.BaiViet;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BaiVietForm {
    private String tieuDe;
    private String anhBaiViet;
    private String tomTat;
    private String noiDung;

    public BaiViet toEntity() {
        return new BaiViet(tieuDe, anhBaiViet, tomTat, noiDung);
    }
}
