"use client"
import { Button } from "./ui";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useBugReportModal } from "@/hooks/useBugReportModal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import UserButton from "./user-button";
import { BugReportModal } from "./bug-report-modal";

const Header = () => {
	const { toggle: toggleAuth } = useAuthModal()
	const { toggle: toggleBugReport } = useBugReportModal()
	const { data: session, status } = useSession()
	const router = useRouter()

	return (
		<>
			<div className="w-full bg-white flex justify-between items-center p-4">
				<div className="flex space-x-2">
					<Button onClick={() => router.push("/")} variant={"ghost"} className="text-xl font-bold">
						<img src={"icon.png"} alt="" width={20} />
						WindAI
					</Button>
					<Button onClick={() => router.push("/explore")} variant={"outline"} className="text-xl font-semibold">Explore</Button>
				</div>
				<div className="flex space-x-2 items-center">
					<Button onClick={toggleBugReport} variant="secondary">Bug Report / Feature Request</Button>
					{status === "unauthenticated" && (
						<Button onClick={toggleAuth} variant="default">Sign In</Button>
					)}
					{status === "authenticated" && session.user && (
						<UserButton user={session.user} />
					)}
				</div>
			</div>
			<BugReportModal />
		</>
	);
};

export default Header;