package com.vn.backend.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class PaymentResDto implements Serializable {
    private String status;
    private String message;
    private String URL;
}
