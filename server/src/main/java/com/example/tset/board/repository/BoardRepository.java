package com.example.tset.board.repository;
import com.example.tset.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Long> {
    Optional<Board> findByTitle(String title);
}
