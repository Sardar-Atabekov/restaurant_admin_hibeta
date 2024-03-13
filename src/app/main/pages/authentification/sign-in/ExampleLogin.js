import { useRef, useState, useEffect } from 'react';

const ExampleLogin = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);
  const handleSubmit = () => {};
  return (
    <section>
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
        {errMsg}
      </p>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">userName:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Sing in</button>
      </form>
      <p>
        Need an Account? <br />
        <span className="line">
          <a href="#">Sing Up</a>
        </span>
      </p>
    </section>
  );
};

export default ExampleLogin;
