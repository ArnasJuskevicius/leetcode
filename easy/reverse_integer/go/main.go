// https://leetcode.com/problems/reverse-integer/

package main

import (
	"fmt"
)

func reverse(x int32) int32 {
	const MaxInt32 = int32(2147483647)
	var ans int32 = 0
	isNegative := false

	if x < 0 {
		x = -x
		isNegative = true
	}

	for x > 0 {
		var pop int32 = x % 10
		x = x / 10

		if ans > MaxInt32/10 || ans == MaxInt32/10 && pop > 7 {
			return 0
		}

		ans = ans*10 + pop
	}

	if isNegative {
		return -ans
	} else {
		return ans
	}
}

func main() {
	fmt.Println(reverse(321))
}
