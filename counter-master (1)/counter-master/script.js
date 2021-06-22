let curr=1;
function fetchit(){
    var target=document.getElementById("input").value;
    var ele =document.getElementById("down")
    var id =setInterval(()=>{ 
        if(curr<=target){
           document.getElementById("up").innerText=curr
           let temp=curr+1
           document.getElementById("down").innerText=temp;
           ele.classList.add("animate")
           curr+=1;
        
           setTimeout(()=>{
               ele.classList.remove("animate")
           },980)

        }else{
            clearInterval(id)
        }
    },1000)
}
