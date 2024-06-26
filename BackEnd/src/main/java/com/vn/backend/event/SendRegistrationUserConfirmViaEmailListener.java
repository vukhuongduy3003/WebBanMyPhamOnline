package com.vn.backend.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.vn.backend.service.IEmailService;

@Component
public class SendRegistrationUserConfirmViaEmailListener
		implements ApplicationListener<OnSendRegistrationUserConfirmViaEmailEvent> {

	@Autowired
	private IEmailService emailService;

	@Override
	public void onApplicationEvent(OnSendRegistrationUserConfirmViaEmailEvent event) {
		sendConfirmViaEmail(event.getEmail());
	}

	private void sendConfirmViaEmail(String email) {
		emailService.sendRegistrationUserConfirm(email);
	}

}