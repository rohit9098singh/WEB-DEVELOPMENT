"use client"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/Login-button"; // Capitalized component name

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

const Home = () => (
  <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="space-y-6">
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>Auth 🔐</h1>
      <p className="text-auth text-lg">a simple page Authentication services</p>
      <div>
        <LoginButton mode="redirect">  {/* Capitalized LoginButton component */}
          <Button variant={"secondary"} size="lg">sign in</Button>
        </LoginButton>
      </div>
    </div>
  </main>
);

export default Home;
