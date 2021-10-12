const jsonwebtoken = require("jsonwebtoken");

const jwt = {
  issueJwt: async (user) => {
    let payload = {
      id: user.id,
    };
    console.log(payload);
    const options = {
      expiresIn: "365d",
    };
    const jwtToken = await jsonwebtoken.sign(payload, "secret", options);
    return jwtToken;
  },

  varifyTokenFn: async (req, res, next) => {
    var token = req.headers.authorization;

    await jsonwebtoken.verify(token, "secret", function (err, decoded) {
      if (err) {
        return res.json({
          status: 400,
          success: false,
          message: "Token not found",
        });
      } else {
        req.user = {
          id: decoded.id,
        };
        return next();
      }
    });
  },
};
module.exports = jwt;
