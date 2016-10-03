import Superagent from 'superagent';

var utils = {
    generateRandom: function () {
        return Math.random();
    },
    sum: function (a, b) {
        return a + b;
    },
    testInvokeAPISuperagent: function (endpoint) {
        Superagent
            .get(endpoint)
            .accept('json')
            .end(function (err, res) {
                if (err) {
                    console.log('testInvokeAPISuperagent error: ' + err);
                    throw err;
                }
                var jsonResult = JSON.stringify(res.body);
                console.log('testInvokeAPISuperagent success: ' + jsonResult);
            });
        return null;
    },
    getDecisions: function () {
        var result = 'init';
        Superagent.get('http://localhost:3000/api/Decisions').accept('json').then(function (err, res) {
            if (err) {
                throw err;
            }
            result = JSON.stringify(res.body);
            console.log('1: ' + result);
        })
        console.log('2: ' + result);
        return result;
    },
    testGetList: function(parameter){
        var result = ['One', 'Two', parameter];
        return result;

    }
};

export default utils;
