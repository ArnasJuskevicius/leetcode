// https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
  if(height.length < 2) {
    return 0
  } 

  return countTrappedWater(height)
};

const countTrappedWater = (array, amount = 0) => {
  const firstPillar = getFirstPillar(array)
  const firstPillarIndex = array.findIndex(element => element === firstPillar);
  const secondPillar = getSecondPillar(array, firstPillar, firstPillarIndex)
  const secondPillarIndex = array.findIndex((element, index)  => element === secondPillar && index !== firstPillarIndex && index > firstPillarIndex + 1);

  console.log(firstPillar)
  console.log(secondPillar)

  if(!secondPillar) {
    if(array.length <= 2) {
      return amount
    }

    return countTrappedWater(array.slice(firstPillarIndex + 1), amount)
  }

  const waterTrapperPillarHeight = firstPillar > secondPillar ? secondPillar : firstPillar
  const workingArray = array.slice(firstPillarIndex, secondPillarIndex + 1)
  const newArray = array.slice(secondPillarIndex)

  const invertedArray = invertArrayWithWater(workingArray, waterTrapperPillarHeight)
  const waterAmount = getWaterAmount(invertedArray) + amount

  if(newArray.length > 2) {
    return countTrappedWater(newArray, waterAmount)
  } else {
    return waterAmount
  }
}

const invertArrayWithWater = (array, height) => {
  const waterMap = array.map(item => {
    if(item > height) {
      return 0
    }

    return Math.sign(item - height) === -1 ? -1 * (item - height) : item - height
  })

  return waterMap
}

const getWaterAmount = (array) => array.reduce((prevItem, currItem) => prevItem + currItem, 0)
const getSecondPillar = (array, firstPillar, firstPillarIndex) => {
  const pillar = array.find((element, index) => element >= firstPillar && index !== firstPillarIndex && index > firstPillarIndex + 1)

  if(!pillar)
    return Math.max(...array.slice(firstPillarIndex + 2))

  return pillar
}

const getFirstPillar = (array) => {
  const firstPillar = array.find(element => element > 0)
  const firstPillarIndex = array.findIndex(element => element === firstPillar);
  // first number above zero and next number should be smaller then 
  
  return array[firstPillarIndex + 1] > firstPillar ? getFirstPillar(array.slice(firstPillarIndex + 1)) : firstPillar
}

const isArrayValid = (array) => {
  
}
// [4,2,3]
// [0,1,0,2,1,0,1,3,2,1,2,1]
// [0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2]
// [7,9,7,3]
// [6,8,5,0,0,6,5]
// [0,1,2,3,4,5,6,7,8,9,10]
console.log(trap([0,1,2,3,4,5,6,7,8,9,10]))
