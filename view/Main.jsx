/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const TeaCard = require('./TeaCard');

function Main({ title, user, teas }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <div id="map" className="m-10 map" />

    </Layout>
  );
}

module.exports = Main;
