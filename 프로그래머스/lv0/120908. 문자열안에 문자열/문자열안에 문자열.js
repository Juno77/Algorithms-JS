function solution(str1, str2) {
    let answer = 0;
    let sol = str1.replace(str2, "##66##")
  
    
         if (sol.indexOf("##66##") >= 0) {
          answer = 1   
         }
    
           
     else answer = 2
        

    

    
    return answer;
}