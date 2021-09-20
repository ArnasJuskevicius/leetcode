// https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
  if(height.length < 2) {
    return 0
  } 

  let left = 0, right = height.length-1, totalArea = 0;
  let leftMaxHeight = height[left], rightMaxHeight = height[right];

  while ( left < right ) {
    if ( height[left] < height[right] ) {
        leftMaxHeight = Math.max(leftMaxHeight, height[++left]);
        totalArea += leftMaxHeight-height[left];
    } else {
        rightMaxHeight = Math.max(rightMaxHeight, height[--right]);
        totalArea += rightMaxHeight-height[right];
    } 
  }
  
  return totalArea;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
