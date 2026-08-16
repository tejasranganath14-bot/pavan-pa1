const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{const s=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(s>0?(window.scrollY/s)*100:0)+"%"});
const button=document.getElementById("testButton"),result=document.getElementById("testResult");
const results=["CALCULATING... Comparing four years of friendship data...","RESULT: Pavan wins. He has the candid honesty advantage.","RESULT: Tejas wins. The jury has been bribed.","RESULT: ERROR 404 — Better Friend Not Found.","RESULT: 50/50. The friendship is too powerful to separate.","RESULT: Obviously Pavan is the better friend. Please do not tell him this."];
let clicks=0;
button.addEventListener("click",()=>{result.textContent=results[clicks%results.length];clicks++;button.textContent=clicks>2?"RUN THE TEST AGAIN (WHY?)":"RECALCULATE";});
