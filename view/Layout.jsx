const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
