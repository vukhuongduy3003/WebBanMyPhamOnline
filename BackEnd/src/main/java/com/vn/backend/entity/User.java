package com.vn.backend.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "`User`")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "`id`", unique = true, nullable = false)
	private int id;

	@Column(name = "`username`", nullable = false, length = 50, unique = true)
	private String userName;

	@Column(name = "`email`", nullable = false, length = 50, unique = true)
	private String email;

	@Column(name = "`password`", nullable = false, length = 800)
	private String password;

	@Column(name = "`fullName`", nullable = false, length = 50)
	private String fullName;

	@Column(name = "`diaChi`", nullable = false, length = 50)
	private String diaChi;

	@Column(name = "`sDT`", nullable = false, length = 15)
	private String sDT;

	@Column(name = "role", nullable = false)
	private String role = "Customer";

	@Enumerated(EnumType.ORDINAL)
	@Column(name = "`status`", nullable = false)
	private UserStatus status = UserStatus.NOT_ACTIVE;

	@Column(name = "avatarUrl")
	private String avatarUrl;

	public User(String userName, String email, String password, String fullName, String diaChi, String sDT) {
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.fullName = fullName;
		this.diaChi = diaChi;
		this.sDT = sDT;
	}
}