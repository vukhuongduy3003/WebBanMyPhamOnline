package com.vn.backend.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.vn.backend.dto.ChangePublicProfileDTO;
import com.vn.backend.entity.User;

public interface IUserService extends UserDetailsService {

	void createUser(User user);

	User findUserById(Integer id);

	User findUserByEmail(String email);

	User findUserByUserName(String username);

	void activeUser(String token);

	void sendConfirmUserRegistrationViaEmail(String email);

	boolean existsUserByEmail(String email);

	boolean existsUserByUserName(String userName);

	void resetPasswordViaEmail(String email);

	void resetPassword(String token, String newPassword);

	void sendResetPasswordViaEmail(String email);

	UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
	
	void changeUserProfile(String username, ChangePublicProfileDTO dto);

}
