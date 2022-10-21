/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const CommentCard = require('./CommentCard');

function ChaiPage({ tea, user, comments }) {
  return (
    <Layout>
      <Header user={user} />
      <div className="m-3">
        <img src={`${tea.picture}`} alt={`${tea.name}`} />
        <p>{`${tea.name}`}</p>
        <p>{`${tea.title}`}</p>
        <div className="commentsFromDb">
          <h2>Comments from Users</h2>
          {
            comments.map((com) => (
              <CommentCard key={com.id} com={com} />
            ))
          }

        </div>

        {(user ? (
          <form method="POST" action={`/tea/${tea.id}`} className="m-3 addCom">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" name="text" id="exampleFormControlTextarea1" rows="3" />
            <button type="submit">Отправить</button>
          </form>
        ) : (<div />))}

      </div>
    </Layout>
  );
}

module.exports = ChaiPage;
