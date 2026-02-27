// 1. Basic List Rendering (Array → UI)
export default function Rendering(){
    const fruits = ['Mango', 'Banana', 'Orange']

    return(
        <div>
            <h2>Fruits List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}
