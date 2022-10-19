const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function adminPage({ title, user, teas }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <main role="main">
        <div className='comments'>
          <ul className="teas">
            {teas.map((tea) => (
              <li className="teas" key={tea.id}>
                <span className=" tea-name">{tea.name}</span>
                {' '}
                <a>delete</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='form'>
          <h1>Добавить чай</h1>
          <form action="/personalArea" method='POST'>
            <label htmlFor="name">Название</label>
            <input type="text" name="name" />
            <br />
            <label htmlFor="title">Описание</label>
            <input type="text" name="title" />
            <br />
            <label htmlFor="img">Изображение</label>
            <input type="text" name='img' />
            <br />
            <button type="sumbit">Добавить</button>
          </form>
        </div>
      </main>
    </Layout>
  );
}

module.exports = adminPage