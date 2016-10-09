import Superagent from 'superagent'

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
    return list.category === 'cat2'
})

//list map test functional
let names = list.map (function(list){
    return list.name + ' pertence a ' + list.category
})

//list reduce test functional
let concatenateName = list.reduce (function (conc, list){
    return conc + list.name
})

//Get decisions
let decisions = Superagent.get ('https://jsonplaceholder.typicode.com/posts')
                    .accept('json')
                    .end(function (err,res){
                        if (err){
                            console.log('decisions error')
                        }
                        console.log('decisions sucess')
                    })

let utils = {
    generateRandom: function () {
        return Math.random();
    },
    sum: function (a, b) {
        return a + b;
    },
    getLists: function(){
        return 'cat1-' + cat1 + ' cat1OS-' + cat1OS + ' concatenateName-' + concatenateName + ' names-' + names;
    },
    fetchAPI: function(){
        return decisions
    }
};

export default utils;
