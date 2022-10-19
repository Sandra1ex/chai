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
              <span className="singer">{}</span>
              <span className="song-title">{}</span>
              <ul className="entry-links">
                <li className="entry-link" ><a href={`/entries/del/${entry.id}`}>delete</a></li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

module.exports = userPage