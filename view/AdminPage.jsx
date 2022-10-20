const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function adminPage({ title, user, teas }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <script defer src="/js/addTea.js" />
      <main role="main">
        <div className='container'>
          <ul className="list-group">
            {teas.map((tea) => (
              <li className="list-group-item" key={tea.id}>
                <a className=" tea-name" href={`/tea/${tea.id}`}>{tea.name}</a>
                {' '}
                <br />
                <button className='btn btn-primary'>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="container">
          <h1>Добавить чай</h1>
          <form method="POST" action="/personalArea" className="add">
            <div className="mb-3 loginTable">
              <input type="text" placeholder="Название" />
              <input type="test" placeholder="Описание" />
              <input type="text" name='picture' placeholder="Изображение"/>
              <button type="submit">Отправить</button>
            </div>
          </form>
          <div className="err-log" />
        </div>
      </main>
    </Layout>
  );
}

module.exports = adminPage


