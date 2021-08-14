const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://kleepers.mesto.nomoredomains.club',
  'https://kleepers.mesto.nomoredomains.club'
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.status(200).send
  }
  res.header('Access-Control-Allow-Origin', "*");
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.status(200).send();
    return res.end();
  }

  next();
};
