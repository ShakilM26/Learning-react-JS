// 6. Filter + Map

export default function Rendering() {
    const products =[
        {id:1, name: 'Laptop', price: 50000},
        {id:2, name: 'Mouse', price: 1150},
        {id:3, name: 'Keyboard', price: 700}
    ];

    return (
        <div>
            {products.filter(product => product.price > 1000)
            .map(product => (<p key={product.id} > 
            {product.name} - {product.price}</p>))}
        </div>
    );
}
// filter korar por map kora hocche
// erpor JSX render

// Internally React ekhane;
// map → multiple JSX elements toiri kore
// React virtual DOM compare kore 
// key use kore identify kore konkon item change hoise