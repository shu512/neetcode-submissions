class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sum;
        nums = nums.sort((a, b) => a - b);
        console.log(nums)
        const res = [];
        let i = 0;
        while (i < nums.length - 2) {
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                sum = nums[i] + nums[j] + nums[k];
                console.log(`i = ${i}; nums[i] = ${nums[i]}`);
                console.log(`j = ${j}; nums[j] = ${nums[j]}`);
                console.log(`k = ${k}; nums[k] = ${nums[k]}`);
                console.log(sum)
                if (sum === 0) {
                    this.mbAdd(res, nums[i], nums[j], nums[k]);
                    j = this.moveJ(nums, j);
                }
                if (sum < 0) {
                    j = this.moveJ(nums, j);
                }
                if (sum > 0) {
                    k = this.moveK(nums, k);
                }
            }
            i++;
            while(nums[i - 1] === nums[i]) {
                i++;
            }
        }



        return res;
    }

    moveJ(nums, j) {
        j++;
        while(nums[j - 1] === nums[j]) {
            j++;
        }
        return j;
    }

    moveK(nums, k) {
        k--;
        while(nums[k] === nums[k + 1]) {
            k--;
        }
        return k;
    }

    mbAdd(res, ni, nj, nk) {
        const found = res.find(r => r[0] === ni && r[1] === nj && r[2] === nk);
        if (!found) res.push([ni, nj, nk]);
    }
}


[-4, -1, -1, 0, 1, 8]
