import  { useState } from 'react';
import { auth } from '../firebase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('Sign Up Successful');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Log In Successful');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogIn}>Log In</button>
    </div>
  );
};

export default Auth;
