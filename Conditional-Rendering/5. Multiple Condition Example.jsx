// 5. Multiple Condition Example
export default function Rendering(){
    const role='user';
    return(
        <div>
            {role === 'admin' && <h2>Admin Panel</h2>}
            {role === 'user' && <h2>User Dashboard</h2>}
            {role === 'guest' && <h2>Welcome Guest</h2>}
        </div>
    );
}

