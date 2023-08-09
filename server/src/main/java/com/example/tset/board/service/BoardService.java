package com.example.tset.board.service;


import com.example.tset.board.entity.BoardEntity;
import com.example.tset.board.exception.BusinessLogicException;
import com.example.tset.board.exception.ExceptionCode;
import com.example.tset.board.repository.BoardRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Transactional
@Service
public class BoardService {

    private final BoardRepository boardRepository;
    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    @Transactional
    public BoardEntity createBoard(BoardEntity boardEntity) {

        BoardEntity savedBoard = boardRepository.save(boardEntity);

        return boardRepository.save(boardEntity);
    }

    public BoardEntity updateBoard(BoardEntity boardEntity) {
        Optional<BoardEntity> findBoard = boardRepository.findById(boardEntity.getBroadId());

        String originalTitle = findBoard.map(BoardEntity::getTitle).orElse(null);

        Optional.ofNullable(boardEntity.getTitle()).ifPresent(updatedTitle -> {

            if (!updatedTitle.equals(originalTitle)) {
                findBoard.get().setTitle(updatedTitle);
            }
        });

        Optional.ofNullable(boardEntity.getTitle()).ifPresent(title -> findBoard.get().setTitle(title));
        Optional.ofNullable(boardEntity.getProblem()).ifPresent(problem -> findBoard.get().setProblem(problem));
        Optional.ofNullable(boardEntity.getExpecting()).ifPresent(expecting -> findBoard.get().setExpecting(expecting));

        return boardRepository.save(findBoard.get());
    }

    public BoardEntity readBoard(long broadId) {
        return findVerifiedBoard(broadId);
    }

    public Page<BoardEntity> readBoards(int page, int size) {
        return boardRepository.findAll(PageRequest.of(page, size,
                Sort.by("boardId").descending()));
    }

    public void deleteBoard(long broadId) {
        BoardEntity boardEntity = findVerifiedBoard(broadId);
        boardRepository.delete(boardEntity);
    }

    @Transactional(readOnly = true)
    public BoardEntity findVerifiedBoard(long broadId) {
        Optional<BoardEntity> optionalBoard = boardRepository.findById(broadId);
        BoardEntity findBoard = optionalBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.TITLE_NOT_FOUND));

        return findBoard;
    }
    private void verifyExistsTitle(String tilte) {
        Optional<BoardEntity> borad = boardRepository.findByTitle(tilte);
        if (borad.isPresent())
            throw new BusinessLogicException(ExceptionCode.TITLE_NOT_FOUND);
    }
}

