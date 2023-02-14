function solution(n) {
    let answer = 0;
    
    const str = String(n)
    const arr = Array.from(str)
    
    for(let i = 0; i < arr.length; i++){
        
        answer = answer + Number(arr[i])
        
    }
    
    return answer;
}