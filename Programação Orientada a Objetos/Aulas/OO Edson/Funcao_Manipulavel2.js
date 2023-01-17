function decision(question,doOk,doCancel){
    if(question =="OK") doOk();
    else doCancel();
}

function showCancel(){}

decision("OK", 
    function(){ console.log("You agreed")},
    function() { console.log("You canceled the execution")}
);
decision("Cancel", 
    function(){ console.log("You agreed")},
    function() { console.log("You canceled the execution")}
);