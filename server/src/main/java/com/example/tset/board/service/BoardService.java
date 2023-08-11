package com.example.tset.board.service;


import com.example.tset.board.entity.Board;
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
    public Board createBoard(Board board) {

        Board savedBoard = boardRepository.save(board);

        return boardRepository.save(board);
    }

    public Board updateBoard(Board board) {
        Optional<Board> findBoard = boardRepository.findById(board.getBoardId());

        String originalTitle = findBoard.map(Board::getTitle).orElse(null);

        Optional.ofNullable(board.getTitle()).ifPresent(updatedTitle -> {

            if (!updatedTitle.equals(originalTitle)) {
                findBoard.get().setTitle(updatedTitle);
            }
        });

        Optional.ofNullable(board.getTitle()).ifPresent(title -> findBoard.get().setTitle(title));
        Optional.ofNullable(board.getProblem()).ifPresent(problem -> findBoard.get().setProblem(problem));
        Optional.ofNullable(board.getExpecting()).ifPresent(expecting -> findBoard.get().setExpecting(expecting));

        return boardRepository.save(findBoard.get());
    }

    public Board readBoard(long broadId) {
        Board board = findVerifiedBoard(broadId);

        increamentView(broadId);

        return board;
    }


    public Page<Board> readBoards(int page, int size) {
        return boardRepository.findAll(PageRequest.of(page, size,
                Sort.by("boardId").descending()));
    }

    public void deleteBoard(long broadId) {
        Board board = findVerifiedBoard(broadId);
        boardRepository.delete(board);
    }

    @Transactional
    public void increamentView(long boardId) {
        Board board = findVerifiedBoard(boardId);
        board.incrementView();
        boardRepository.save(board);
    }

    @Transactional(readOnly = true)
    public Board findVerifiedBoard(long broadId) {
        Optional<Board> optionalBoard = boardRepository.findById(broadId);
        Board findBoard = optionalBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.TITLE_NOT_FOUND));

        return findBoard;
    }
    private void verifyExistsTitle(String tilte) {
        Optional<Board> borad = boardRepository.findByTitle(tilte);
        if (borad.isPresent())
            throw new BusinessLogicException(ExceptionCode.TITLE_NOT_FOUND);
    }
}

