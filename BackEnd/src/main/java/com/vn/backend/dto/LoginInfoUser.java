package com.vn.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginInfoUser {

	private String token;

	private String userName;

	private String email;

	private String fullName;

	private String diaChi;

	private String sDT;

	private String role;

	private String status;

	public LoginInfoUser(String token, String userName, String email, String fullName, String diaChi, String sDT, String role,
			String status) {
		this.token = token;
		this.userName = userName;
		this.email = email;
		this.fullName = fullName;
		this.sDT = sDT;
		this.diaChi = diaChi;
		this.role = role;
		this.status = status;
	}
}
