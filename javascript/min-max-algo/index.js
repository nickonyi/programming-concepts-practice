var origBoard = ["O", 1, "X", "X", 4, "X", 6, "O", "O"];
var huplayer = "X";
var aiplayer = "O";
var score = 0;

function emptyIndexes(board) {
    return board.filter(s => s != "O" && s != "X");
}

function winning(board, player) {
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    ) {
        return true;
    } else {
        return false;
    }
}

function minmax(newBoard, player) {
    let availSpots = emptyIndexes(newBoard);

    if (winning(newBoard, huplayer)) {
        return { score: -10 }
    } else if (winning(newBoard, aiplayer)) {
        return { score: 10 }
    } else if (availSpots.length === 0) {
        return { score: 0 }
    }
}