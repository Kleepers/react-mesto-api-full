module.exports.corsHandler = (req, res, next) => {
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  const allowedCors = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://kleepers.mesto.nomoredomains.club',
    'https://kleepers.mesto.nomoredomains.club'
  ];


  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];

  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', true);

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.status(res.statusCode).send();
    return;
  }

  next();
};
