const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const TeaCard = require('./TeaCard');

function Main({ title, user, teas }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <div id="listChai" className="container js-tea-container">
        {
          teas.map((tea) => (
            <TeaCard key={tea.id} tea={tea} />
          ))
        }
      </div>
    </Layout>
  );
}

module.exports = Main;
