const React = require('react');

function CommentCard({ com, user }) {
  return (
    <div className="comments" data-id={com.id}>
      <div>{`${com.title}`}</div>
      <div className="comUser">{`${com['User.login']}`}</div>
    </div>
  );
}

module.exports = CommentCard;
