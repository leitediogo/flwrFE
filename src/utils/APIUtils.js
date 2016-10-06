import Superagent from 'superagent';

var apiutils = {
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
    }
};

export default apiutils;
