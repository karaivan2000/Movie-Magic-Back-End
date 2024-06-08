const jwt = require(`jsonwebtoken`);

function sign(payload, secreteOrPrivateKey, options = {}) {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload,secreteOrPrivateKey, options, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        });
    });

    return promise;
};