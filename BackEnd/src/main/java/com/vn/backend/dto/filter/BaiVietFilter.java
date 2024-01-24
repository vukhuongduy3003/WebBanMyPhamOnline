package com.vn.backend.dto.filter;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BaiVietFilter {

    private int minNgayViet;

    private int maxNgayViet;

}
