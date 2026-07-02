import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase/firebase";

function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
    >
      Continue with Google
    </button>
  );
}

export default GoogleLoginButton;