import {FormEvent, useEffect, useRef, useState} from "react";

const Login = () => {
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current?.focus();
    }, []);

    useEffect(() => {
        setErrMsg('')
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Your are logged in!</h1>
                    <br/>
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : <section>
                <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type={"text"} id={"username"} ref={userRef} autoComplete={"off"} value={user}
                           onChange={(e) => setUser(e.target.value)} required/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={pwd} onChange={(e) => setPwd(e.target.value)} required/>
                    <button>Sign In</button>
                </form>
                <p>
                    Need an Account?<br/>
                    <span className="line">
                    <a href="/register">Sign Up</a>
                </span>
                </p>
            </section>}
        </>
    );
};

export default Login;