class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Set();
        const columns = new Set();
        const box = new Set();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const num = board[i][j];
                if (num === ".") continue;
                const rowKey = `${i}-${num}`;
                const columnsKey = `${j}-${num}`;
                const boxKey = `${Math.floor(i / 3)}-${Math.floor(j / 3)}-${num}`;

                if (rows.has(rowKey) || columns.has(columnsKey) || box.has(boxKey)) {
                    return false;
                } else {
                    rows.add(rowKey);
                    columns.add(columnsKey);
                    box.add(boxKey);
                }
            }
        }
        return true
    }
}
