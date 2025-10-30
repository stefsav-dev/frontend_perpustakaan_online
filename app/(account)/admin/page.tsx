"use client";

import AdminLayout from "./utility/layout";

export default function AdminPage() {
    return (
        <AdminLayout>
             <div className="p-4">
                <h1 className="text-xl font-bold">Welcome, Admin!</h1>
                <p>This is your admin dashboard.</p>
            </div>
        </AdminLayout>
    )
}