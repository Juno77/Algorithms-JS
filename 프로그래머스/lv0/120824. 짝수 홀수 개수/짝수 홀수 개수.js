function solution(num_list) {
    let answer = [];
    let couple= 0;
    let single = 0 ;
    
    for (i=0; i < num_list.length; i++){
        
        if (num_list[i] % 2 === 0) {
            couple = couple+1
        } else single = single+1
        
    }
    
    answer = [couple, single]
    
    return answer;
}