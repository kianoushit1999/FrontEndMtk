//this function use when we want to delete an element by index
function deleteByIndex(arr, l){
    for (const argumentsKey in arr) {
        if(argumentsKey == l)
            arr.splice(l,1)
    }
    console.log(arr)
}

//this function is used to merge some list and finally sort it ASC
function mergeSort(...args){
    let arr = Array.prototype.concat.apply([], args)
    console.log(arr.sort((a,b)=>{
        return a-b
    }))
}

//this function used when we've got multiple nested list and we want to ...
//converting all of them to single one-dimention list
function flatArrays(arr){
    return arr.reduce(function (acc, val) {
        return acc.concat(Array.isArray(val) ? flatArrays(val) : val);
    }, []);
}
//test : console.log(flatArrays([12,15,[15,[8,5,69]],[[[15642]]]]))

//this func finding an item in array and show it as dict
function findItem(arr, item){
    for (const arrKey in arr) {
        if (item == arr[arrKey])
            console.log({"index":arrKey,
                        "item":item})
    }
}

//test : findItem([100,2546,259,2365,1456],259)

//this funcion finding and item and replace it with newItem on
function replaceByItem(array, currentItem, newItem){
    array.forEach((item, index)=>{
        if(item == currentItem)
            array[index] = newItem
    })
    return array
}

//test : console.log(replaceByItem([2,5,6,88,9,4,2,5,7,6,5],5,55))

//this function finding numbers in string and at last cast it to integer
function extractNumber(str){
    let str_list = str.match(/\d+/g)
    let int_list = str_list.map((a)=>{
        return parseInt(a)
    })
    console.log(int_list)
}

//test : extractNumber("my 5 name is kianoushs 2")

//remove duplicate vale in list
function removeDuplicate(arr) {
    let mySet =new Set(arr)
    console.log(Array.from(mySet))
}
//test : removeDuplicate([2,5,6,88,9,4,2,5,7,6,5])