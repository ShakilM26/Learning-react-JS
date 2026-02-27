// 4. Conditional List Rendering
export default function Rendering(){
    const users=[{id: 1, name: 'Henry'}];

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
