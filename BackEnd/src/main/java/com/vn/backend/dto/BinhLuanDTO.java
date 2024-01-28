package com.vn.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BinhLuanDTO {
    private int idBinhLuan;
    private String fullName;
    private String noiDung;

    public BinhLuanDTO(Object[] tuple) {
        this.idBinhLuan = (Integer) tuple[0];
        this.noiDung = (String) tuple[1];
        this.fullName = (String) tuple[2];
    }
}
