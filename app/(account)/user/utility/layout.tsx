import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import UserSidebar from "./SidebarUser";

export default function UserLayout({ children } : { children: React.ReactNode }) {
    return (
    <SidebarProvider>
        <UserSidebar />
        <main>
            <SidebarTrigger />
            {children}
        </main>
    </SidebarProvider>
    )
}