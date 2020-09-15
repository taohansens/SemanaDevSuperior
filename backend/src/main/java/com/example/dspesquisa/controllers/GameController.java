package com.example.dspesquisa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dspesquisa.entities.Game;
import com.example.dspesquisa.repositories.GameRepository;

@RestController
@RequestMapping(value = "/games")
public class GameController {
	
	@Autowired
	private GameRepository gameRepository;
	
	@GetMapping
	public ResponseEntity<List<Game>> findAll(){
		List<Game> list = gameRepository.findAll();
		return ResponseEntity.ok().body(list);
	}
}
