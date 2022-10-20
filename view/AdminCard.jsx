const React = require('react');

function AdminCard({ tea }) {
    return (
        <li className="list-group-item">
            <a className="tea-name" href={`/tea/${tea.id}`}>{tea.name}</a>
            {' '}
            <br />
            <button className='btn btn-primary'>Delete</button>
        </li>
    );
}
module.exports = AdminCard