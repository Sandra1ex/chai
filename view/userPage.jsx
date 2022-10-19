const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function userPage({ title, user, comments }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <main role="main">
        <ul className="coments">
          {comments.map((comment) => (
            <li className="comment" key={}>
              <span className="comment-title">{}</span>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

module.exports = userPage