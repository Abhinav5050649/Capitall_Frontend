import React from "react"
import Navbar from "../components/Navbar"

export default function Home() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen flex min-h-screen min-w-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-clip-text text-3xl text-white font-extrabold text-transparent sm:text-5xl"
                        >
                            XLO

                            <span className="text-white sm:block"> A Platform to Exchange Goods! </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl text-white sm:text-xl ">
                            Your one-stop destination for all-things.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/signup"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
