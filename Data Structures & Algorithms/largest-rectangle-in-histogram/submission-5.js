class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [{index: 0, height: heights[0]}];
        let maxSquare = 0;
        for (let i = 1; i < heights.length; i++) {
            let startIndex = i;
            while(heights[i] < stack[stack.length - 1]?.height) {
                const popped = stack.pop();
                maxSquare = this.max(maxSquare, (i - popped.index) * popped.height);
                startIndex = popped.index;
            }
            
            stack.push({index: startIndex, height: heights[i]});
        }

        while(stack.length > 0) {
            const popped = stack.pop();
            maxSquare = this.max(maxSquare, (heights.length - popped.index) * popped.height);
        }

        return maxSquare;
    }

    max(a, b) {
        return a > b ? a : b;
    }
}
