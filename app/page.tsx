import { SessionWrapper } from "./components/SessionWrapper";
import SignInPage from "./components/login/LoginComponent";
import SignOutPage from "./components/login/SignOutComponent";
import { auth } from "./lib/auth"; // Ensure this returns session data
import Navbar from "./components/Navbar";



export default async function Home() {
  const session = await auth(); // Fetch session on the server
  const isAuthenticated = !!session?.user;

  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-purple-400 flex items-center justify-center">
   
      <SessionWrapper>
        <div className="w-full max-w-md bg-slate-400 rounded-lg shadow-lg p-6">
          {isAuthenticated ? <SignOutPage /> : <SignInPage />}
        </div>
      </SessionWrapper>
    </div>
    </div>
  );
}
