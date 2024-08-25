import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useRouter } from "next/navigation";

const Header = () => {
    const { toggle } = useAuthModal()
    const router = useRouter()
    return (
        <div className="w-full bg-white flex justify-between items-center p-4">
          <div className="flex">
          <Button onClick={() => router.push("/")} variant={"ghost"} className="text-xl font-bold">V1</Button>
          <Button onClick={() => router.push("/explore")} variant={"outline"} className="text-xl font-semibold">Explore</Button>
          </div>
                <SignedOut>
            <Button onClick={()=>toggle()} variant="default">Sign In</Button>
            </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
    );
};

export default Header;