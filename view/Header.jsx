const React = require('react');

module.exports = function Header({ user }) {
  return (
    (!user ? (
      <div className="header">
        <span className="logo" id="logo">World of Tee</span>
        <a href="/" className="headerlink">На главную</a>
        <a href="/login" className="headerlink">Войти</a>
        <a href="/registration" className="headerlink">Зарегистрироваться</a>
      </div>
    ) : (
      <div className="header">
        <span className="logo" id="logo">World of Tee</span>
        <a href="/personalArea" className="headerlink">Личный кабинет</a>
        <a href="/" className="headerlink">На главную</a>
        <a href="/api/logout" className="headerlink" id="logout">Выйти</a>
      </div>
    ))
  );
};
