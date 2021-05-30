var a ='mytring'
console.log('a : '+a)
console.log('length of a : '+a.length)
a=a[a.length-1]
console.log('a=a[a.length-1] : '+a)
var b = 0
b += a.length
console.log('Current length of \'a.length\' : '+b) //length of a.length
console.log('integer + string : '+b+a) //integer + string

// next part : FUNCTION AND RETURN STATEMENT
function abc(z1,z3,z2='you'){
    var res =''
    res += z1 +' '+z3+' '+z2+' '+'doing now ???'
    return res
}
console.log(abc('What','are'))