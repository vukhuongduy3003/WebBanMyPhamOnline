package com.vn.backend.dto;

import com.vn.backend.entity.User;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDTO {

	// check not null, check length, check exists, check format (regex)...
	private String userName;

	// check not null, check length, check exists on database, check format
	// (regex)...
	private String email;

	// check not null, check length, check format (regex)...
	private String password;

	// check not null, check length, check format (regex)...
	private String fullName;

	// check not null, check length, check format (regex)...
	private String diaChi;

	// check not null, check length, check format (regex)...
	private String sdt;

	public User toEntity() {
		return new User(userName, email, password, fullName, diaChi, sdt);
	}
}