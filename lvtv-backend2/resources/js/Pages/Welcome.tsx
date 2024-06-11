import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import heroImage from "../assets/heroimage.jpg";
import Header from "../Components/Header";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="LVTV" />
            <div className="">
                <Header />
                <div className=" flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white bg-slate-500">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2"></div>
                            <nav className="-mx-3 flex flex-1 justify-end ">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        DASHBOARD
                                        <div className="text-center">
                                            <a
                                                href={route("login")}
                                                className="inline-block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white uppercase bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:hover:bg-gray-600"
                                            >
                                                Continue with Google
                                            </a>
                                        </div>
                                    </Link>
                                ) : (
                                    <></>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="px-10">
                                <div className="divide-y-8 divide-yellow-400 px-10 font-color">
                                    <div className="flex justify-center mx-auto p-20">
                                        <div className="mx-auto flex justify-center flex-col space-x-80">
                                            <div>
                                                <h1 className="text-4xl">
                                                    LV.TV
                                                </h1>
                                                <br />
                                                <h2 className="text-2xl">
                                                    Livestreaming Website <br />
                                                    for La Verdad Christian
                                                    College <br />
                                                    to improve academic
                                                    excellence
                                                </h2>
                                            </div>
                                        </div>
                                        <img
                                            className="mx-auto flex rounded-sm w-1/2 h-1/2 bg-white shadow  hover:shadow-lg object-cover"
                                            src={heroImage}
                                            alt="Descriptive text"
                                        />
                                    </div>
                                    <div className="p-20 flex justify-center">
                                        <div>
                                            <h1 className="text-2xl myFont">
                                                About LV.tv
                                            </h1>
                                            <br />
                                            <p className="indent-8 text-2xl">
                                                creating a convenient streaming
                                                website that provides Bachelor
                                                of Arts in Broadcasting (BAB){" "}
                                                <br />
                                                students in La Verdad Christian
                                                College with an effective and
                                                accessible platform for
                                                streaming
                                                <br />
                                                projects among the students of
                                                LVCC providing educational
                                                resources, engagement among
                                                students,
                                                <br />
                                                participating in live streaming
                                                broadcasts, in that way
                                                enhancing their learning
                                                endeavors and <br />
                                                providing academic excellence in
                                                the field of broadcasting.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mx-auto p-10">
                                        <div className="mx-auto flex justify-center flex-col space-y-4">
                                            <h1 className="text-2xl myFont">
                                                Schedules & Programs
                                            </h1>
                                            <br />
                                            <div className="flex rounded-sm w-96 h-16 bg-white shadow p-10 hover:shadow-lg">
                                                <h1 className="text-black">
                                                    Sample
                                                </h1>
                                            </div>
                                            <div className="flex rounded-sm w-96 h-24 bg-white shadow p-10 hover:shadow-lg">
                                                <h1 className="text-black">
                                                    Sample
                                                </h1>
                                            </div>
                                            <div className="flex rounded-sm w-96 h-24 bg-white shadow p-10 hover:shadow-lg">
                                                <h1 className="text-black">
                                                    Sample
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="mx-auto flex justify-center flex-col space-y-4">
                                            <h1 className="text-2xl">
                                                Recent Programs
                                            </h1>
                                            <br />
                                            <div className="flex rounded-sm w-96 h-24 bg-white shadow p-20 hover:shadow-lg"></div>
                                            <div className="flex rounded-sm w-96 h-24 bg-white shadow p-20 hover:shadow-lg"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mx-auto p-20 flex-col">
                                        <div className="mx-auto flex justify-centerflex-col space-x-80">
                                            <div>
                                                <h1 className="text-4xl">
                                                    School News and Upcoming
                                                    Events
                                                </h1>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="mx-auto flex rounded-sm w-5/6 h-80 bg-white shadow p-20 hover:shadow-lg"></div>
                                            <div className="mx-auto flex rounded-sm w-5/6 h-80 bg-white shadow p-20 hover:shadow-lg"></div>
                                        </div>
                                    </div>
                                    {/* <div className="p-20 flex justify-center flex-col">
          <div className="pb-8">
            <h1 className="text-2xl">We want to hear from you!</h1>
            <br />
            <p className="indent-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tortor nisl, dictum id pulvinar ut, fringilla bibendum elit. Morbi
              auctor lectus erat, a interdum magna lobortis vitae. Donec sapien
              purus, mattis id sollicitudin in, dapibus volutpat elit. Quisque
              sed dignissim urna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Suspendisse blandit pharetra sapien at
              fringilla.
            </p>
          </div>
          <div className="mx-auto flex rounded-sm w-5/6 h-12 bg-white shadow p-2 hover:shadow-lg">
            <h2>Search Archives</h2>
          </div>
        </div> */}
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
