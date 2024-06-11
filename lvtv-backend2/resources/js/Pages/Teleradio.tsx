import { useRef } from "react";
import profilePic from "../assets/profile-pic.jpg";

const TeleRadio = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const openOwncastPage = () => {
    window.open("http://localhost:8080", "_blank");
  };

  const handleIframeClick = () => {
    openOwncastPage();
  };
  return (
    <div>
      {/* Add your other components and content here */}
      <div className="divide-y-8 px-10 m-10 divide-yellow-400">
        <div className="m-10">
          <div className="flex justify-center p-10 text-4xl font-bold font-color 2-[92%] mx-auto">
            <h1>TeleRadio</h1>
          </div>
          <div className="">
            <div
              className="flex justify-center w-full h-full p-10 bg-white "
              onClick={openOwncastPage}
            >
              <div className="flex justify-center relative w-full h-full">
                <iframe
                  src="http://localhost:8080/embed/video"
                  width="854"
                  height="480"
                  frameBorder={0}
                  scrolling="no"
                  //   className="w-full "
                ></iframe>
              </div>
            </div>

            
          </div>
        </div>
        {/* Upcoming Live END */}

        {/* Weekly Host Start */}
        <div>
          <div>
            <div className="pl-20 m-10 text-2xl font-bold font-color">
              Weekly Host
            </div>
          </div>
          <div>
            <div className="flex justify-around m-10">
              <div className="mx-auto flex rounded-sm w-40 h-40 bg-white shadow hover:shadow-lg">
                <img src={profilePic} alt="Profile" className="object-cover w-full h-full" />
              </div>
              <div className="mx-auto flex rounded-sm w-40 h-40 bg-white shadow hover:shadow-lg">
                <img src={profilePic} alt="Profile" className="object-cover w-full h-full" />
              </div>
              <div className="mx-auto flex rounded-sm w-40 h-40 bg-white shadow hover:shadow-lg">
                <img src={profilePic} alt="Profile" className="object-cover w-full h-full" />
              </div>
              <div className="mx-auto flex rounded-sm w-40 h-40 bg-white shadow hover:shadow-lg">
                <img src={profilePic} alt="Profile" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-around m-10">
              <h2 className="text-2xl font-bold font-color">Name</h2>
              <h2 className="text-2xl font-bold font-color">Name</h2>
              <h2 className="text-2xl font-bold font-color">Name</h2>
              <h2 className="text-2xl font-bold font-color">Name</h2>
            </div>
          </div>
        </div>
        {/* Weekly Host End */}


        {/* Programs Start */}
        <div>
          <div>
            <div className="flex justify-center pt-10 text-2xl font-bold font-color">
              Programs
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <div className="m-5">
                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg"></div>
                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg"></div>
                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg"></div>
              </div>
              <div className="m-5">
                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg"></div>
                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg"></div>
                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* Programs End */
  );
};
export default TeleRadio;
