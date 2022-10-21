const React = require('react');

function CommentCard({ com, user }) {
  return (
    <div className="comments" data-id={com.id}>
      <p>{`${com.title}`}</p>
      <p>{`${com['User.login']}`}</p>
    </div>
  );
}

module.exports = CommentCard;
