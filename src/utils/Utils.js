
let list = [
    { name: 'name1', category: 'cat1'},
    { name: 'name2', category: 'cat1'},
    { name: 'name3', category: 'cat2'},
    { name: 'name4', category: 'cat2'},
    { name: 'name5', category: 'cat1'}
    ]

//list filter test old school
let cat1OS = []
for (var i = 0; i < list.length; i++){
    cat1OS.push(list[i].name)
}

//list filter test functional
let cat1 = list.filter(function(list){
    return list.category === 'cat1'
})

//list map test functional
let names = list.map (function(list){
    return list.name + ' pertence a ' + list.category
})

//list reduce test functional
let concatenateName = list.reduce (function (conc, list){
    return conc + list.name
})

let utils = {
    generateRandom: function () {
        return Math.random();
    },
    sum: function (a, b) {
        return a + b;
    },
    getList: function(){
        return cat1OS;
    }
};

export default utils;
