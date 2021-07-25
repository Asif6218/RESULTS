
function grade(g){
    if (g<35){
        console.log("FAILED");
    }
    else if(g >= 35 && g<= 60){
        console.log("SECOND CLASS");
    }
    else if(g >= 60 && g< 85){
        console.log("FIRST CLASS");
    }
    else if(g >= 85){
        console.log("DISTINCTION")
    }
}
grade(70);
