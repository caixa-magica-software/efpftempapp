const async = require('async');
const express = require('express');
const router = express.Router();

function main() {
    async.waterfall([function database(cbk) {
        cbk(null, {});
    },
    databaseCreator, tableCreator], function(err, result) {
        if (err) {
            console.log(err);
        }
    });
}
function databaseCreator(args, cbk) {
    const map = (function map(inputs) {
        return {
            authorization: 'Basic cG9zdGdyZXM6dmZvcw==',
            body: {
                database_name: 'efpftempapp'
            }
        };
    })(args);
    const requestOptions = {
        method: 'post',
        url: (function() {
            return 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases';
        })(),
        headers: {
            'authorization': map.authorization,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(map.body)
    };
    require('request')(requestOptions, function(err, response) {
        let responseBody = response ? JSON.parse(response.body || '') : '';
        if (!err && (200 <= response.statusCode) && (response.statusCode < 300)) {
            cbk(null, {...args, ...responseBody
            });
        } else {
            cbk(err || responseBody || 'error');
        }
    });
}
function tableCreator(args, cbk) {
    const map = (function map(inputs) {
        return {
            authorization: 'Basic cG9zdGdyZXM6dmZvcw==',
            databaseName: 'efpftempapp',
            body: {
                table_name: 'samples',
                columns: [{
                    name: 'id',
                    type: 'serial'
                }, {
                    name: 'timestamp',
                    type: 'timestamp'
                }, {
                    name: 'sensor',
                    type: 'varchar'
                }, {
                    name: 'temperature',
                    type: 'int'
                }],
                constraints: []
            }
        };
    })(args);
    const requestOptions = {
        method: 'post',
        url: (function() {
            let url = 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases/' + encodeURI(map.databaseName) + '/tables';
            return url;
        })(),
        headers: {
            'authorization': map.authorization,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(map.body)
    };
    require('request')(requestOptions, function(err, response) {
        let responseBody = response ? JSON.parse(response.body || '') : '';
        if (!err && (200 <= response.statusCode) && (response.statusCode < 300)) {
            cbk(null, {...args, ...responseBody
            });
        } else {
            cbk(err || responseBody || 'error');
        }
    });
}
module.exports = function(app) {
    try {
        main();
    } catch (err) {
        console.log(err);
    }
    return router;
}