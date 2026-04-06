class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        console.log(position)
        console.log(speed)
        this.sort(position, speed)

        console.log(position)
        console.log(speed)

        const lastCarPos = position[position.length - 1];
        const lastCarSpeed = speed[speed.length - 1];
        const fleets = [{
            leftHours: (target - lastCarPos) / lastCarSpeed
        }];

        for (let i = position.length - 2; i >= 0; i--) {
            const lastFleet = fleets[fleets.length - 1];
            const leftHours = (target - position[i]) / speed[i];

            if (leftHours > lastFleet.leftHours) {
                fleets.push({
                    leftHours,
                });
            }
        }
        

        return fleets.length;
    }

    sort(position, speed) {
        let t;
        for (let j = 0; j < position.length; j++) {
            for (let i = 1; i < position.length; i++) {
                if (position[i-1] > position[i]) {
                    t = position[i-1];
                    position[i-1] = position[i];
                    position[i] = t;

                    t = speed[i-1];
                    speed[i-1] = speed[i];
                    speed[i] = t;
                }
            }
        }
    }
}
