// 2. Object Array Render 
export default function Rendering(){
    const users = [
        {id: 1, name: 'Shakil', role: 'Writer'},
        {id: 2, name: 'Shoshi', role: 'Pharmacist'},
        {id: 3, name: 'Samia', role: 'Lecturer'},
        {id: 4, name: 'Rizwan', role: 'Journalist'}
    ];

    return(
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>role: {user.role}</p>
                </div>
            ))}
        </div>
    );
}
