/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const mapCounter = {
        [nums[0]]: 1
    }
    let higher = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i] + ''
        const currentValue = mapCounter[num]
        mapCounter[num] = currentValue === undefined ? 1 : currentValue + 1
        if(mapCounter[num] > mapCounter[higher]) {
            higher = num
        }
    }

    return higher
}