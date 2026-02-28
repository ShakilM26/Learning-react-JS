// 3. Short Circuit
export default function ShortCC(){
    const isAdmin = true;

    return(
        <div>
            <h2>User Panel</h2>
            {isAdmin && <button>Delete User</button>}
        </div>
    );
}

// isAdmin = true → Button render hobe