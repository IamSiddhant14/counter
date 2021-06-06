document.getElementById("down").style.visibility = "hidden";
function fetchit(){
    var content =document.getElementById("input").value;


    function counter(){
        let count=0;
        let curr= 0;

        var interval=setInterval(function(){
            if(curr<content){

                curr+=1

                if(count==0){
                    document.getElementById("up").innerHTML=curr;
                    document.getElementById("down").style.visibility = "hidden";
                    count+=1;

                }else if(count==1){
                    document.getElementById("down").style.visibility = "visible";
                    document.getElementById("down").style.translate="2s"
                    document.getElementById("down").style.transform="translateY(-35px)"
                    document.getElementById("down").innerHTML=curr;
                    count-=1;

                }

        
            }else if(curr>=content){
                clearInterval(interval);
                window.alert("hey you!! Get your hands off the keyboard")
                return;
            }
    
    
    
        },700);
    
    }
    counter();
}

