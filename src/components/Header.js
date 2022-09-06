import './Header.css';

export default function Header(props) {
    return (
        <div className='app--header'>
            <button className={props.tableName === 'films' && `active`} onClick={() => props.getTableData("https://swapi.dev/api/films")} value="films">Films</button>
            <button className={props.tableName === 'people' && `active`} onClick={() => props.getTableData("https://swapi.dev/api/people")} value="people">People</button>
            <button className={props.tableName === 'planets' && `active`} onClick={() => props.getTableData("https://swapi.dev/api/planets")} value="planets">Planets</button>
            <button className={props.tableName === 'species' && `active`} onClick={() => props.getTableData("https://swapi.dev/api/species")} value="species">Species</button>
            <button className={props.tableName === 'starships' && `active`} onClick={() => props.getTableData("https://swapi.dev/api/starships")} value="starships">Starships</button>
            <button className={props.tableName === 'vehicles' && `active`} onClick={() => props.getTableData("https://swapi.dev/api/vehicles")} value="vehicles">Vehicles</button>
        </div>
    );
}