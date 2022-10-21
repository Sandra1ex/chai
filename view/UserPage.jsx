const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function userPage({ title, user, comments }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <main role="main">
        <div className="container">
          <ul className="list-group">
            {
              comments.map((comment) => (
                <li className="list-group-item" key={comment.id}>
                  <span><a href={`/tea/${comment.teaId}`}>{`${comment['Tea.name']}`}</a></span>
                  <br />
                  <span className="comment-title">{comment.title}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </main>
    </Layout>
  );
}

module.exports = userPage;
