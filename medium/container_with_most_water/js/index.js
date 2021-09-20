// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
  let left = 0, right = height.length-1, totalArea = 0;
  let leftMaxHeight = height[left], rightMaxHeight = height[right];

  while ( left < right ) {
    const currentArea = getArea(height[left], height[right], left, right)
    if ( height[left] < height[right] ) {
        leftMaxHeight = Math.max(leftMaxHeight, height[++left]);
    } else {
        rightMaxHeight = Math.max(rightMaxHeight, height[--right]);
    }

    totalArea = totalArea > currentArea ? totalArea : currentArea
  }

  return totalArea
};

const getArea = (firstPillar, secondPillar, firstPillarIndex, secondPillarIndex) => {
  const height = firstPillar > secondPillar ? secondPillar : firstPillar
  const step = secondPillarIndex - firstPillarIndex
  
  return height * step
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
