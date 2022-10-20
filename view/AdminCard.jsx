const React = require('react');

function AdminCard({ tea }) {
    return (
        <li className="list-group-item js-tea" data-id={tea.id}>
            <a className="tea-name" href={`/tea/${tea.id}`}>{tea.name}</a>
            {' '}
            <br />
            <button className='btn btn-primary js-delete'>Delete</button>
        </li>
    );
}
module.exports = AdminCard