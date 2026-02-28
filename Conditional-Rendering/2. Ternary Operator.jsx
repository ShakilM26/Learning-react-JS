// 2. Ternary Operator
export default function Ternary(){
    const isLoggedIn = false;

    return(
        <div>
            {isLoggedIn
            ? <h2>Dashboard</h2>
            : <h2>Login page</h2>}
        </div>
    )
}