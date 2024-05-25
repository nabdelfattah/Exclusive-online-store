import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";

export const UserContext = createContext({
  wishlist: null,
  setWishlist: (val) => {},
  cart: null,
  setCart: (val) => {},
});

function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      throw new Error(err);
    }
  }

  async function signup(email, password, name) {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        const user = userCredential.user;
        // Update user profile with name
        await updateProfile(user, {
          displayName: name,
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signupWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      throw new Error(error);
    }
  }

  function logout() {
    try {
      auth.signOut();
    } catch (err) {
      throw new Error(err);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        signup,
        signupWithGoogle,
        login,
        logout,
        wishlist,
        setWishlist,
        cart,
        setCart,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
