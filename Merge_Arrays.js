
let a = [2, 3, 1]
let b = [2, 9, 5, 3];

let a_len = a.length;
let b_len = b.length;

function mergeArray(a,b){
    merge = []
    for (let i = 0; i < a_len; i++) {
        if (!(merge.includes(a[i]))) merge.push(a[i])
        for (let j = 0; j < b_len; j++) {
            if (!(merge.includes(b[j]))) merge.push(b[j])
        }
    }


    
    return merge;
}

console.log(mergeArray(a,b))


function sorted_array_ascending (a){

    return a.sort();
}

let _merge = mergeArray(a,b)
console.log(sorted_array_ascending (_merge))

function sorted_array_descending (a){

    let answer = a.sort();
    return answer.reverse();
}

console.log(sorted_array_descending(_merge))


function newArray(a,b){
    let _string = []
    let _number = []
    let _boolean = []
    let groupAll = []
    let new_merge = mergeArray(a,b)
    for (let i = 0; i < new_merge.length; i++) {
        if(typeof new_merge[i]==='string'){
            _string.push(new_merge[i])
        }else if(typeof new_merge[i]==='number'){
            _number.push(new_merge[i])
        }else if(typeof new_merge[i]==='boolean'){
            _boolean.push(new_merge[i])
        }
    }
    groupAll.push(_string,_number,_boolean)
    return groupAll;
}

let first_a = [2, "me", false]
let second_a = ["you", true, 6]
console.log(newArray(first_a, second_a))

function dictionary(a){
    for(let i = 0; i < a.length; i++){
        for (let j = 0; j < array.length; j++) {
            if(a[i].id > a[j].id){
                (a[i].id).sort()
            }   
            
        }
    }
}

// first method to merge arrays
// const combined_array = first_number_array.concat(second_number_array);
// console.log(combined_array)

// second method to merge arrays both produces same result
// const combined_array2 = [...first_number_array, ...second_number_array];
// console.log(combined_array2)