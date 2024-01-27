package com.vn.backend.controller;

import com.vn.backend.dto.filter.PhanHoiFilter;
import com.vn.backend.entity.DanhMuc;
import com.vn.backend.entity.PhanHoi;
import com.vn.backend.entity.User;
import com.vn.backend.service.IPhanHoiService;
import com.vn.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/PhanHois")
@Validated
public class PhanHoiController {
    @Autowired
    private IPhanHoiService service;

    @Autowired
    private IUserService userService;

    @GetMapping()
    public ResponseEntity<?> getAllPhanHois(
            Pageable pageable,
            PhanHoiFilter filter,
            @RequestParam(required = false)
            String search) {
        Page<PhanHoi> entities = service.getAllPhanHois(pageable, filter, search);
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }

    @PostMapping("/users/{id}")
    public ResponseEntity<?> createPhanHoi(@PathVariable(value = "id") Integer id, @RequestBody PhanHoi form) {
        User user = userService.findUserById(id);
        form.setUser(user);
        service.createPhanHoi(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getPhanHoiByID(@PathVariable(name = "id") Integer id) {
        return new ResponseEntity<>(service.getPhanHoiByID(id), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}/users/{idUser}")
    public ResponseEntity<?> updatePhanHoi(@PathVariable(name = "id") Integer id, @PathVariable(name = "idUser") Integer idUser, @RequestBody PhanHoi form) {
        User user = userService.findUserById(idUser);
        form.setUser(user);
        service.updatePhanHoi(id, form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{ids}")
    public ResponseEntity<?> deletePhanHois(@PathVariable(name = "ids") List<Integer> ids) {
        service.deletePhanHois(ids);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }
}
