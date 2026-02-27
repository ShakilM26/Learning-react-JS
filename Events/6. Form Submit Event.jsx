// 6. Form Submit Event

export default function Event(){

    function handleSubmit(e){
        e.preventDefault(); // default page relode off
        alert('Form Submitted !');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="Submit">Submit</button>
        </form>
    );
}