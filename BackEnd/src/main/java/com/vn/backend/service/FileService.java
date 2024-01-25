package com.vn.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Date;

import com.vn.backend.utils.FileManager;

@Service
public class FileService implements IFileService {

	private final FileManager fileManager = new FileManager();

	@Value("${upload.folder}")
	private String uploadFolder;

	@Override
	public String uploadImage(MultipartFile image) throws IOException {

		String nameImage = new Date().getTime() + "." + fileManager.getFormatFile(image.getOriginalFilename());

		// Create directories if they don't exist
		Path uploadFolderPath = Paths.get(uploadFolder);
		Files.createDirectories(uploadFolderPath);

		// Construct the full path
		String path = uploadFolderPath.resolve(nameImage).toString();
		System.out.println(path);
		// Save the file to the specified path
		fileManager.createNewMultiPartFile(path, image);

//		 TODO: Save link file to the database

		// Return the link to the uploaded file
		return nameImage;
	}
}
