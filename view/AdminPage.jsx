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
                <span className=" tea-name">{tea.name}</span>
                {' '}
                <a href={`/tea/del/${tea.id}`}>delete</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='form'>
          <h1>Добавить чай</h1>
          <form action="/personalArea" method='POST' className='add'>
            <label htmlFor="name">Название</label>
            <input type="text" name="name" />
            <br />
            <label htmlFor="title">Описание</label>
            <input type="text" name="title" />
            <br />
            <label htmlFor="img">Изображение</label>
            <input type="text" name='picture' />
            <br />
            <button type="sumbit">Добавить</button>
          </form>
        </div>
      </main>
    </Layout>
  );
}

module.exports = adminPage