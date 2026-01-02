import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";


function App() {

  return (


    
    <div className="min-h-screen bg-base-100">
      <h1 className="text-red-200">Hello PERN</h1>

      <button className="btn btn-primary">Press Me</button>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

    </div>
  )
}

export default App;
