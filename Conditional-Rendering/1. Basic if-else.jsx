// 1. Basic if-else
export default function CondiRendering(){
    const isLoggedIn = true;
    if (isLoggedIn) {
        return <h2>Welcome Back!</h2>
    }   else {
        return <h2>Please Login</h2>
    }
}
