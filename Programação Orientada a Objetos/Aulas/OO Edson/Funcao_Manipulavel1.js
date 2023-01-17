function decision(question,doOk,doCancel){
    if(question =="OK") doOk();
    else doCancel();
}

function showOK(){console.log("You agreed")}

function showCancel(){console.log("You canceled the execution")}

decision("OK", showOK,showCancel);
decision("Cancel", showOK,showCancel);
