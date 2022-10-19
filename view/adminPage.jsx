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
            <li className="teas" key={tea.id}>
              <span className=" tea-name">{tea.name}</span>
              {' '}
              <a>delete</a>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

module.exports = adminPage