"use client";

import UserLayout from "./utility/layout";

export default function UserPage() {
    return (
        <UserLayout>
            <div className="p-4">
                <h1 className="text-xl font-bold">Welcome, User!</h1>
                <p>This is your user dashboard.</p>
            </div>
        </UserLayout>
    )
}