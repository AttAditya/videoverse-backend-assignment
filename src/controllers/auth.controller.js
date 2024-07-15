const jwt = require('jsonwebtoken');

module.exports.getApiToken = async (req, res) => {
    let { tokenUser, expiresIn } = req.body;

    tokenUser = tokenUser || 'anonymous';
    expiresIn = expiresIn || 3600;

    let tokenData = {
        user: tokenUser
    };

    const token = jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET, {
        expiresIn: `${expiresIn}s`
    });

    res.json({
        token: token,
        expiresIn: expiresIn
    });
};