package com.colecao.colecao_jogos.repository;

import com.colecao.colecao_jogos.model.Jogo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JogoRepository extends JpaRepository<Jogo, Integer> {
}
