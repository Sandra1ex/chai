const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function ChaiPage({ tea, user }) {
  return (
    <Layout>
      <Header user={user} />
      <img src={`${tea.picture}`} alt={`${tea.name}`} />
      <p>{`${tea.name}`}</p>
      <p>{`${tea.title}`}</p>
    </Layout>

  );
}

module.exports = ChaiPage;
