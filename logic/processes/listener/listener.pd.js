const async = require('async');
const express = require('express');
const sdk = require('../../../bin/libs/vfos-sdk/sdk-include');
const router = express.Router();

function main() {
    async.waterfall([function listener(cbk) {
        cbk(null, {});
    },
    intermediateCatchEvent0Vq9zla], function(err, result) {
        if (err) {
            console.log(err);
        }
    });
}
function intermediateCatchEvent0Vq9zla(args, cbk) {
    const pubsub = new sdk.messaging(sdk.config.MESSAGING_PUBSUB.SERVER_URL, '', '', ['']);
    pubsub.registerPublicationReceiver(function(msg) {
        try {
            args.msg = JSON.parse(msg.content.toString());
        } catch (err) {
            console.log(err);
        }
    });
}
function receiver(args, cbk) {
    const pubsub = new sdk.messaging(sdk.config.MESSAGING_PUBSUB.SERVER_URL, 'miguel.tavares@caixamagica.pt', 'kdHmJMSUZzSNzqxs4pPVaWht', ['eu.efpf.efpftempsensor']);
    pubsub.registerPublicationReceiver(function(msg) {
        if (msg.routingKey === "eu.efpf.efpftempsensor") {
            try {
                args.message = JSON.parse(msg.content.toString());
                async.waterfall([function(cbkStart) {
                    cbkStart(null, args);
                },
                normalization, persist], function(err, result) {
                    if (err) {
                        console.log(err);
                    };
                });
            } catch (err) {
                console.log(err);
            }
        }
    });
}
function normalization(args, cbk) {
    function script(inputs, next) {
        next(null, {
            sample: {
                sensor: inputs.message.machine,
                timestamp: inputs.message.timestamp,
                temperature: inputs.message.temperature
            }
        });
    }
    script(args, cbk);
}
function persist(args, cbk) {
    const map = (function map(inputs) {
        return {
            authorization: 'Basic cG9zdGdyZXM6dmZvcw==',
            databaseName: 'efpftempapp',
            tableName: 'samples',
            body: [inputs.sample]
        };
    })(args);
    const requestOptions = {
        method: 'post',
        url: (function() {
            let url = 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases/' + encodeURI(map.databaseName) + '/tables/' + encodeURI(map.tableName) + '/rows';
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