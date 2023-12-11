const nombre = 'Guillo';
const newArray = [1,2,3,4,5,6,7,8,9];
const persona = {id:1, name: 'Guillermo', age: 39, wear: {top: 'white', bottom: 'blue'}};

const getMyAge = () => {
    return persona.age;
}

export const App = () => {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>String:</td>
                    <td>{nombre}</td>
                </tr>
                <tr>
                    <td>Array:</td>
                    <td>{newArray}</td>
                </tr>
                <tr>
                    <td>JSONSstringify:</td>
                    <td>{JSON.stringify(persona)}</td>
                </tr>
                <tr>
                    <td>Function: </td>
                    <td>{getMyAge()}</td>
                </tr>
            </tbody>
        </table>
        <br /><br />
        <div>
            JSONSstringify CODE:
            <code>{JSON.stringify(persona)}</code>
        </div>
        </>
    );
}