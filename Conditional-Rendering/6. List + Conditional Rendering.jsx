
// 6. List + Conditional Rendering
export default function Rendering(){
    const users = [];

    return (
        <div>
            {users.length === 0
            ? <p>No Users Found</p>
            : users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}