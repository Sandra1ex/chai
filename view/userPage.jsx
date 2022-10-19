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
            <li className="comment" key={comment.id}>
              <span className="comment-title">{comment.title}</span>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

module.exports = userPage