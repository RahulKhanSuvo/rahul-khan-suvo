import { auth } from "./src/lib/auth";

async function createAdmin() {
    console.log("Creating admin user...");

    // Better Auth has an internal API we can call directly
    await auth.api.signUpEmail({
        body: {
            email: "admin@gmail.com",
            password: "123456abcd",
            name: "Md. Rahul Khan Suvo",
        }
    });

    console.log("✅ Admin user created!");
    process.exit(0);
}

createAdmin();