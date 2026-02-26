// 3. Passing Argument in Event

export default function Event(){

    function greet(name){
        alert(`Hey ${name} !`);
    }

    return(
        <div>
            <button onClick={() => greet('Shoshi')}>Say Hello</button>
        </div>
    );
}

// Arrow Function ekhane execution delay kore