// 3. List + Child Component
function ActorsCard({name, role}){
    return (
        <div>
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
    )
}

export default function Rendering(){
    const actors = [
        {id: 1, name: 'Henry Cavill', role: 'Superman'},
        {id: 2, name: 'Chris Evans', role: 'Captain America'},
        {id: 3, name: 'Chris Hemsworth', role: 'Thor'}
    ]

    return (
        <div>
            {actors.map(actor => (
                <ActorsCard key={actor.id} 
                name={actor.name} 
                role={actor.role} /> 
            ))}
        </div>
    );
}

// map() diye multiple component toiri hocche
// props pass hocche
// key parent level a dite hobe