package com.vn.backend.service;

import com.vn.backend.dto.BinhLuanDTO;
import com.vn.backend.entity.BinhLuan;
import com.vn.backend.repository.BinhLuanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class BinhLuanService implements IBinhLuanService {

    @Autowired
    private BinhLuanRepository repository;

    public List<BinhLuanDTO> findByIdSanPham(Integer idSanPham) {
        List<Object[]> result = repository.findBinhLuansByBinhLuanId(idSanPham);
        return convertToDTOList(result);
    }

    private List<BinhLuanDTO> convertToDTOList(List<Object[]> objectList) {
        List<BinhLuanDTO> binhLuanDTOList = new ArrayList<>();
        for (Object[] obj : objectList) {
            BinhLuanDTO binhLuanDTO = new BinhLuanDTO(obj);
            binhLuanDTOList.add(binhLuanDTO);
        }
        return binhLuanDTOList;
    }

    public void createBinhLuan(BinhLuan form) {
        repository.save(form);
    }

    public BinhLuan getBinhLuanByID(Integer id) {
        return repository.findById(id).get();
    }

    public void updateBinhLuan(Integer id, BinhLuan form) {
        BinhLuan entity = repository.findById(id).get();
        entity.setNoiDung(form.getNoiDung());
        repository.save(entity);
    }

    @Transactional
    public void deleteBinhLuans(List<Integer> ids) {
        repository.deleteByIdBinhLuanIn(ids);
    }

}
