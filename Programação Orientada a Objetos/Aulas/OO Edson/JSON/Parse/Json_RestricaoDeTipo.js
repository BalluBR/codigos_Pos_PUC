var user = '{"name":"joão","birth":"2017-11-30T12:00:00.000Z"}'

var obj = JSON.parse(user, function(key,value){
    if(key == "birth"){
        return new Date(value)
    }
    return value
})

console.log("Nome: " +obj.name)
console.log("DNasc: " +obj.birth)
