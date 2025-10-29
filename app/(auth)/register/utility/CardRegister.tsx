import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterCard() {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-white">
                <Card className="w-full max-w-sm shadow-lg">
                    <CardHeader>
                        <CardTitle>Register a New Account</CardTitle>
                            <CardDescription>
                                Enter your name, email, and password to register a new account.
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Sign Up</Button>
                            </CardAction>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <label htmlFor="name">Email</label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="email">Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="password">Password</label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Create a password"
                                    required
                                />
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Register
                        </Button>
                        <Button variant="outline" className="w-full">
                            Register With Google
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}