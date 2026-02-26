// 1. Basic Props (Parent - Child Data Passing)

function Child(props){
    return(
        <div>
            <h2>His Name: {props.Hisname}</h2>
            <h3>Her Name: {props.Hername}</h3>
        </div>
    );
}

export default function Parent(){
    return(
        <div>
            {/* Hisname and Hername is custom attribute */}
            <Child Hisname="Shakil" Hername="Shoshi"/>
        </div>
    )
}

// 2. Props with Destructuring

function Product({title, price}){
    return (
        <div>
            <h3>{title}</h3>
            <p>{price} Rs/.</p>
        </div>
    );
}

export default function Parent(){
    return(
        <div>
            <Product title="macOS" price={150000} />
        </div>
    )
}

// 3. Passing Array via Props

function List({items}){
    return(
        <ul>
            {items.map((item, index) => 
            <li key={index}>{item}</li>)}
        </ul>
    );
}

export default function Parent(){
    const fruits = ['Mango', 'Apple', 'Banana', 'Orange']

    return(
        <div>
            <List items={fruits} />
        </div>
    );
}

// 4. Passing Function as Props
import React, {useState} from 'react';

function Button({handleClicked}){
    return <button onClick={handleClicked}>Click Me</button>
}

export default function Parent(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1)
    }

    return(
        <div>
            <h2>Count: {count}</h2>
            <Button handleClicked={increment}>Click Me</Button>
            <h3>Shakil Clicked {count} times</h3>
        </div>
    )
}

// 5. Conditional Rendering with Props
// Boolean Props

function Status ({isOnline}){
    return(
        <div>
            {isOnline ? <p>User is Online 🟢</p> : 
            <p>User is Offline 🔴</p>}
        </div>
    );
}

export default function Parent(){
    return(
        <div>
            <Status isOnline={true} />
            <Status isOnline={false} />
        </div>
    )
}

// 6. Props.children

function Card({children}) {
    return (
        <div style={{border: "1px solid black", padding:"10px"}}>
            {children}
        </div>
    )
}

export default function Parent(){
    return(
        <div>
            <Card>
                <h2>This is inside Card</h2>
                <p>Props.children</p>
            </Card>
        </div>
    )
}