
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof matrix === 'undefined'){
    return []
}
let ans = []
let keyI = 0
for(let key of matrix){
    if(typeof key === 'object') {
        if(keyI % 2 != 0){
            key.reverse()
        }
        for(let num of key){
            ans.push(num)
        }
        keyI++
    }
    else {
        ans.push(key)
    }
}
return ans
}
