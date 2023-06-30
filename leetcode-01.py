# https://leetcode.com/problems/two-sum/

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for index, num in enumerate(nums):
            next_numbers = nums[:index]

            for index_next_number, next_number in enumerate(next_numbers):
                if next_number + num == target:
                    return [index_next_number, index]