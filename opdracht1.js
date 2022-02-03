
//opdracht 1a
const tvType = inventory.map((tv)=> {
    return tv.type;
});

console.log(tvType)

//opdracht 1b
const soldOuts = inventory.filter((tv)=> {
    return tv.originalStock === tv.sold;
});

console.log(soldOuts);

//opdracht 1c
const ambiLight = inventory.filter((tv)=>{
    return tv.options.ambiLight;

});

console.log(ambiLight);

//opdracht 1d
function sortTvs(tvs){
    tvs.sort((a, b) => a.price - b.price);
};

sortTvs()

