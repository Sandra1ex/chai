/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const TeaCard = require('./TeaCard');

function Main({ title, user, teas }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <div className="container js-tea-container">
        {
          teas.map((tea) => (
            <TeaCard key={tea.id} tea={tea} />
          ))
        }
      </div>

      <div id="map" className="map" />
    </Layout>
  );
}

module.exports = Main;
