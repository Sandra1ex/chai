const React = require('react');
const Layout = require('./Layout');

function adminPage({ title, user, comments }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <main role="main">
        <ul className="teas">
          {entries.map((entry) => (
            <li className="teas" key={}>
              <span className=" tea-name">{}</span>
              <ul className="del">
                <li className="del" ><a href={}>delete</a></li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

module.exports = adminPage