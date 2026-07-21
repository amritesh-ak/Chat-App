import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-blue-600 text-white">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 shadow-md">
                <h1 className="text-2xl font-bold">
                    <span className="text-white">Connect</span>
                    <span className="font-light text-blue-300">ify</span>
                </h1>

                <div className="space-x-4">
                    <button
                        onClick={() => navigate("/Signin")}
                        className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => navigate("/Signup")}
                        className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            {/* Hero Section with Side-by-Side Layout */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 max-w-6xl mx-auto gap-12">
                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2">
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Have your <br /> best chat
                    </h2>
                    <p className="text-lg md:text-xl text-white mb-10">
                        Fast, easy & unlimited team chat.
                    </p>
                    <button
                        onClick={() => navigate("/Signup")}
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded hover:bg-blue-100 transition"
                    >
                        Get Started
                    </button>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center md:w-1/2">
                    <img
                        src="https://uploads-ssl.webflow.com/5e9cdc9e9aae7e09dbbc7b72/5e9e131121922fa4f55de3ef_hero-min.png"
                        alt="Chat Illustration"
                        className="w-full max-w-md h-auto"
                    />
                </div>
            </section>

        </div>
    );
}

export default LandingPage;


