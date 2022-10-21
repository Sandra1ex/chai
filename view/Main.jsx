/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function Main({ title, user }) {
  return (
    <Layout title={title}>
      <Header user={user} />

      <div id="map" className="m-10 map" />

    </Layout>
  );
}

module.exports = Main;
