const nombre = 'Guillo';
const newMessage = [1,2,3,4,5,6,7,8,9];
const persona = {id:1, name: 'Guillermo', age: 39, wear: {top: 'white', bottom: 'blue'}};

const getMyAge = () => {
    return persona.age;
}
export const App = () => {
    return (
        <>
        <table>
            <td>
                <tr>String:</tr>
                <tr>Array:</tr>
                <tr>JSONStringify:</tr>
                <tr>Function: </tr>
            </td>
            <td>
                <tr>{nombre}</tr>
                <tr>{newMessage}</tr>
                <tr>{JSON.stringify(persona)}</tr>
                <tr>{getMyAge()}</tr>
            </td>
        </table>
        </>
    );
}