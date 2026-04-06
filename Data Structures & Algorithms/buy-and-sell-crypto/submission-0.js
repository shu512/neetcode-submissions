class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0, r = 1;

        while(r < prices.length) {
            if (prices[l] < prices[r]) 
                maxProfit = this.max(maxProfit, prices[r] - prices[l]);
            else 
                l = r;
            r += 1;
        }

        return maxProfit;
    }

    max(a, b) {
        return a > b ? a : b;
    }
}
