class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowIndex = this.searchRow(matrix, target);
        const row = matrix[rowIndex];
        console.log(rowIndex);
        if (rowIndex === -1) return false;
        return this.search(row, target);
    }

    searchRow(matrix, target) {
        let l = 0, r = matrix.length - 1;
        while(l <= r) {
            const midRow = l + Math.floor((r - l) / 2);
            if (matrix[midRow][0] === target) return midRow;
            if (matrix[midRow][0] < target) {
                if (matrix.length === midRow + 1 || matrix[midRow + 1][0] > target) return midRow;
                else l = midRow + 1;
            }

            if (matrix[midRow][0] > target) {
                if (matrix[midRow - 1] && matrix[midRow - 1][0] < target) return midRow - 1;
                else r = midRow - 1;
            }
        }
        return -1;
    }

    search(row, target) {
        let l = 0, r = row.length - 1;
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (row[mid] === target) return true;
            if (row[mid] < target) l = mid + 1;
            if (row[mid] > target) r = mid - 1;
        }

        return false;
    }
}
