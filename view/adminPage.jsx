const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function adminPage({ title, user, teas }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <main role="main">
        <ul className="teas">
          {teas.map((tea) => (
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