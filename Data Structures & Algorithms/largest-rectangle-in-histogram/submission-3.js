class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [{index: 0, height: heights[0]}];
        let maxSquare = 0;
        for (let i = 1; i < heights.length; i++) {
            console.log(stack)
            if (heights[i] < stack[stack.length - 1].height) {
                let lastPoppedIndex = 0;
                while(heights[i] < stack[stack.length - 1]?.height) {
                    const popped = stack.pop();
                    maxSquare = this.max(maxSquare, (i - popped.index) * popped.height);
                    lastPoppedIndex = popped.index;
                }
                stack.push({index: lastPoppedIndex, height: heights[i]});
            } else {
                stack.push({index: i, height: heights[i]});
            }
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
