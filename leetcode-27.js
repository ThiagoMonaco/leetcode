/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let k = 0
    let lastMatchPosition = nums.length

    let i = 0
    do {
        if(nums[i] === val) {
            let swipedValue
            do {
                swipedValue = nums[--lastMatchPosition]
                if(lastMatchPosition === k) {
                    return k
                }
            } while (swipedValue === val)

            nums[lastMatchPosition] = nums[i]
            nums[i--] = swipedValue
        } else {
            k++
        }
        i++
    } while (i < lastMatchPosition )

    return k
};