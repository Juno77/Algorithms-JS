function solution(dot) {
    let answer = 0;
    let a = dot[0]
    let b = dot[1]
    
    
    if ((a >= 1)  && (b >= 1)) {
         answer = 1     
    } else if ((a < 1)  && (b >= 1)) {
         answer =2   
    } else if ((a < 1)  && (b < 1)) {
         answer = 3   
    } else if ((a >= 1)  && (b < 1)) {
         answer = 4   
    }
    
    
    
    return answer;
}