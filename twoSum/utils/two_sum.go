package utils

func TwoSum(nums []int, target int) []int {
	lookupMap := make(map[int]int)

	for index, number := range nums {
		difference := target - number

		if val, ok := lookupMap[difference]; ok {
			return []int{val, index}
		}

		lookupMap[number] = index
	}
	return []int{}
}
