package com.vn.backend.controller;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vn.backend.service.IFileService;
import com.vn.backend.utils.FileManager;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/files")
@Validated
public class FileController {

	@Autowired
	private IFileService fileService;
	@Value("${upload.folder}")
	private final String uploadFolder; // This field will be initialized with the value of "upload.folder"

	public FileController(@Value("${upload.folder}") String uploadFolder) {
		this.uploadFolder = uploadFolder;
	}

	@GetMapping("/{imageName}")
	public ResponseEntity<Resource> getImage(@PathVariable String imageName) throws IOException {
		Path imagePath = Paths.get(uploadFolder, imageName);
		UrlResource resource = new UrlResource(imagePath.toUri());

		return ResponseEntity.ok()
				.header("Content-Type", "image/png") // Adjust content type based on your image type
				.body(resource);
	}
	@PostMapping(value = "/image")
	public ResponseEntity<?> upLoadImage(@RequestParam(name = "image") MultipartFile image) throws IOException {

		if (!new FileManager().isTypeFileImage(image)) {
			return new ResponseEntity<>("File must be image!", HttpStatus.UNPROCESSABLE_ENTITY);
		}
		
		return new ResponseEntity<>(fileService.uploadImage(image), HttpStatus.OK);
	}
}
