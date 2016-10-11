import Superagent from 'superagent'

let list = [
    { name: 'name1', category: 'cat1' },
    { name: 'name2', category: 'cat1' },
    { name: 'name3', category: 'cat2' },
    { name: 'name4', category: 'cat2' },
    { name: 'name5', category: 'cat1' }
]

//list filter test functional
let cat1 = list.filter(function (list) {
    return list.category === 'cat2'
})

//Get decisions
let apiGet = Superagent.get('https://jsonplaceholder.typicode.com/posts')
    .accept('json')
    .end(function (err, res) {
        if (err) {
            throw err
        }
        return res.body
    })
let utils = {
    getList: function () {
        return cat1
    },
    getAPIList: function () {
        return apiGet
    },
    getDecisionList: function () {
    }
};

export default utils