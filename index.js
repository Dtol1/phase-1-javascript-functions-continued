// code your solution here
function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`

}
saturdayFun()

const mondayWork = function(activity='go to the office'){
  return `This Monday, I will ${activity}.`
}
mondayWork('fill out taxes')

function wrapAdjective (flair = "*"){
  return function(string= "special"){
    return `You are ${flair}${string}${flair}!`
  }
}
