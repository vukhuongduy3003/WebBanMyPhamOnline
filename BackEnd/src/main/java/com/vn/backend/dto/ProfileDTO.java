package com.vn.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProfileDTO {

	private String userName;

	private String email;

	private String fullName;

	private String diaChi;

	private String sDT;

	private String role;

	private String status;

	private String avatarUrl;

	public ProfileDTO(String userName, String email, String fullName, String diaChi, String sDT, String role, String status,
			String avatarUrl) {
		this.userName = userName;
		this.email = email;
		this.fullName = fullName;
		this.diaChi = diaChi;
		this.sDT = sDT;
		this.role = role;
		this.status = status;
		this.avatarUrl = avatarUrl;
	}
}
