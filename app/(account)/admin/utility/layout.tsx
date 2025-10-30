import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "./SidebarAdmin";

export default function AdminLayout({children} : {children: React.ReactNode}) {
    return (
        <SidebarProvider>
            <AdminSidebar/>
            <main>
                {children}
            </main>
        </SidebarProvider>
    ) 
}