package com.colecao.colecao_jogos.controller;

import com.colecao.colecao_jogos.model.Jogo;
import com.colecao.colecao_jogos.repository.JogoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jogos")
public class JogoController {

    @Autowired
    private JogoRepository jogoRepository;

    @GetMapping
    public List<Jogo> listarJogos() {
        return jogoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Jogo> buscarPorId(@PathVariable Integer id) {
        return jogoRepository.findById(id);
    }

    @PostMapping
    public Jogo criarJogo(@RequestBody Jogo jogo) {
        return jogoRepository.save(jogo);
    }

    @DeleteMapping("/{id}")
    public void deletarJogo(@PathVariable Integer id) {
        jogoRepository.deleteById(id);
    }
}
