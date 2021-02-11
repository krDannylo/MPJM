//Código de Teste, para entender lógica dos Observers
const test = hello()

function hello(){
    obj = {
        id: '01',
        color: 'blue',
        arr: []
    }

    function manObj(){
        obj.arr.push(1)
        console.log(obj.arr[0])
    }

    return (
        manObj
    )
}

test()