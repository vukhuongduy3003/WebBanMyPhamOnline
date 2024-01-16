package com.vn.backend.entity;

import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.io.Serializable;

@Entity
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

	@Column(name = "role", nullable = false)
	private String role = "Customer";

	@Enumerated(EnumType.ORDINAL)
	@Column(name = "`status`", nullable = false)
	private UserStatus status = UserStatus.NOT_ACTIVE;

	@Column(name = "avatarUrl")
	private String avatarUrl;

	public User(String userName, String email, String password, String fullName, String diaChi) {
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.fullName = fullName;
		this.diaChi = diaChi;
	}

	public User() {
	}

	public int getId() {
		return id;
	}

	public String getUserName() {
		return userName;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public UserStatus getStatus() {
		return status;
	}

	public void setStatus(UserStatus status) {
		this.status = status;
	}

	public String getFullName() {
		return fullName;
	}

	public String getDiaChi() {
		return diaChi;
	}

	public String getRole() {
		return role;
	}

	public String getAvatarUrl() {
		return avatarUrl;
	}

	public void setAvatarUrl(String avatarUrl) {
		this.avatarUrl = avatarUrl;
	}
}