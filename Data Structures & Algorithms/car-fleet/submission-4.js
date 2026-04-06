class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = speed.length;
        const myArr = position.map((p, i) => ({pos: p, sp: speed[i]}))

        myArr.sort((a, b) => a.pos - b.pos);

        const lastCar = myArr[n - 1];
        const fleets = [{
            leftHours: (target - lastCar.pos) / lastCar.sp
        }];

        for (let i = n - 2; i >= 0; i--) {
            const lastFleet = fleets[fleets.length - 1];
            const leftHours = (target - myArr[i].pos) / myArr[i].sp;

            if (leftHours > lastFleet.leftHours) {
                fleets.push({
                    leftHours,
                });
            }
        }
        

        return fleets.length;
    }
}
