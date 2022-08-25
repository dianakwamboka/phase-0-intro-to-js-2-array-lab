//expected.to.have.ordered.members 
const cats = ["Milo","Otis","Garfield"]


function destructivelyAppendCat(name){
    return cats.push(name);    
}


function destructivelyPrependCat(name){
    return cats.unshift(name)
}


function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}


function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}


function appendCat(name){
    let newCats = [...cats, name];
    return newCats;
    
}
appendCat('Broom');
console.log(cats);


function prependCat(name){
    let newCats = [name, ...cats];
    return newCats;

    console.log(newCats);
}


function removeLastCat(){
    let newCats=cats.slice(0,2);
    return newCats;

    console.log(newCats);
}


function removeFirstCat(){
    let newCats=cats.slice(1)
    return newCats;

    console.log(newCats)
}


