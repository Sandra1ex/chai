const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const AdminCard = require('./AdminCard');

function adminPage({ title, user, teas }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <script defer src="/js/addTea.js" />
      <script defer src="/js/deleteTea.js" />
      <main role="main">
        <div className="container js-teas-container">
          <ul className="list-group" id="teas">
            {teas.map((tea) => (
              <AdminCard key={tea.id} tea={tea} />
            ))}
          </ul>
        </div>
        <div className="container">
          <h1>Добавить чай</h1>
          <form method="POST" action="/personalArea" className="add">
            <div className="mb-3 loginTable">
              <input type="text" name="name" placeholder="Название" />
              <input type="test" name="title" placeholder="Описание" />
              <input type="text" name="picture" placeholder="Изображение" />
              <input type="text" name="coordinateX" placeholder="Координата Х" />
              <input type="text" name="coordinateY" placeholder="Координата Y" />
              <button type="submit">Отправить</button>
            </div>
          </form>
          <div className="err-log" />
        </div>
      </main>
    </Layout>
  );
}

module.exports = adminPage;
