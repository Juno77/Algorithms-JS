function solution(array) {
    let answer = 0;
    
    let length = array.length
    
    array.sort(function(a,b){return a-b});
    
    
    
    answer = array[Math.trunc(length/2)]
    
    
    return answer;
}