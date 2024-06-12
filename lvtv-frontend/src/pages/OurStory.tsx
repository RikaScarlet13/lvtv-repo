import image1 from "../assets/historypage-pic1.jpg";
import image2 from "../assets/historypage-pic2.jpg";
import banner from "../assets/banner.jpg";
import rika from "../assets/devteam/rika.jpg";
import joshua from "../assets/devteam/joshua.png";
import tim from "../assets/devteam/tim.png";
import hanzel from "../assets/devteam/hanzel.png";
import khai from "../assets/devteam/khai.png";
const OurStory = () => {
  return (
    <div className="px-10">
      <div className="p-10 justify-center">
        <h1 className=" text-4xl font-bold font-color text-center ">
          Our Story
        </h1>
      </div>
      <div className="divide-y-8 divide-yellow-400 px-10 font-color">
        <div className="p-20 flex justify-center">
        <div>
            <p className="text-justify text-xl indent-8">
            The LVTV project emerges as a response to challenges, aiming to create a centralized platform tailored to the needs of Broadcasting students, with a focus on overcoming limitations of current platforms, enhancing content archiving, and providing efficient navigation. This project builds upon the program's foundation of innovation and adaptability, aspiring to create a more cohesive and technologically advanced broadcasting experience for students.
            </p>
          </div>
          <div className="h-20 bg-yellow border-l-2 border-yellow"></div>
        </div>
        <div className="flex justify-center mx-auto p-10">
          <div className="mx-auto flex justify-center flex-col space-y-1">
            <h1 className="text-2xl font-color font-bold">History</h1>
            <br />
            <div className="flex rounded-sm p-10 hover:shadow-lg items-center justify-center">
              <p className="text-justify font-color indent-8">
              The journey of La Verdad Christian College's Broadcasting program, which began in 1998, reflects a remarkable story of resilience and adaptation. Despite facing initial challenges and operating within limited resources, the program's pioneering efforts, including the innovative "Pera sa Basura" concept, demonstrated a commitment to creative resourcefulness and marked the first public viewing of student-produced content. As the program evolved, so did its projects, such as the initiative to "Tagalize" movies to fundraise for equipment, leading to the acquisition of a television used in present times. 
              </p>
            </div>
            <div className="mx-auto flex justify-center flex-col space-y-4">
              <div className="flex rounded-sm bg-white shadow hover:shadow-lg items-center justify-center">
                <img src={image2} className="custom-image-size object-cover" alt="pic1" />
              </div>
            </div>
          </div>
          <div className="mx-auto flex justify-center flex-col space-y-4">
            <div className="mx-auto flex justify-center flex-col space-y-4">
              <div className="flex rounded-sm bg-white shadow hover:shadow-lg items-center justify-center">
                <img src={image1} className="custom-image-size object-cover" alt="pic1" />
              </div>
            </div>
            <div className="flex rounded-sm p-10 hover:shadow-lg items-center justify-center">
            <p className="text-justify indent-8">
            The transition to La Verdad Christian College-Caloocan for studio use and the subsequent exploration of remote broadcasting alternatives during the COVID-19 pandemic underscored the program's adaptability to changing circumstances. Despite setbacks and initial struggles with online platforms, instructors' dedicated efforts and the adoption of software like OBS and VMix enabled the continuation of broadcasts during challenging times. However, with the transition to digital broadcasting came new challenges, particularly regarding copyright enforcement on platforms like Facebook, prompting the exploration of a dedicated live-streaming platform tailored specifically for LVCC's Broadcasting program. 
            </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-auto p-10 flex-row space-x-4 items-start">
          <div className="flex justify-center flex-col">
            <h1 className="text-2xl font-bold font-color text-center">Vision</h1>
            <br />
            <div className="flex rounded-sm h-auto p-10 hover:shadow-lg items-center justify-center">
              <h1 className="font-color font text-center px-4 py-2">
                The institution that Ensures quality
                learning and Biblical moral standards.{" "}
              </h1>
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="text-2xl font-bold font-color text-center">Objective</h1>
            <br />
            <div className="flex rounded-sm h-auto p-10 hover:shadow-lg items-center justify-center">
              <h1 className="font-color font text-center px-4 py-2">
                La Verdad Christian College, Inc. aims to<br/>
                aims to provide help through educational
                assistance to poor but deserving students<br/>
                from different parts of the country so that
                they may acquire quality education without
                the worries of high cost of education.{" "}
                <br/>
                It also aims to alleviate poverty by offering<br/>
                opportunities to poor but determined students
                to acquire higher quality of education to<br/>
                fulfill their dreams and succeed with God's
                help and mercy.{" "}
              </h1>
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="text-2xl font-bold font-color text-center">Mission</h1>
            <br />
            <div className="flex rounded-sm h-auto p-10 hover:shadow-lg items-center justify-center">
              <h1 className="font-color font text-center px-4 py-2">
                To be the frontrunner in providing
                academic excellence and morally
                upright principles.{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="p-20 flex justify-center flex-col">
          <div className="pb-8">
            <h1 className="text-2xl font-bold">
              Bachelor of Arts in Broadcasting
            </h1>
            <br />
          </div>
          <div className=" h-96 justify-center flex flex-col space-y-4 p-2">
            <div className="flex rounded-sm  font-semibold  bg-white shadow  hover:shadow-lg">
              <img 
                className="mx-auto flex rounded-sm  bg-white shadow  hover:shadow-lg object-cover" 
                src={banner}
                alt="Descriptive text"
              />
            </div> 
          </div>
        </div>

        <div className="flex justify-center mx-auto p-10 flex-row space-x-4 items-start">
          <div className="flex justify-center flex-col">
            <h1 className="text-2xl font-bold font-color text-center">Development Team</h1>
            <br />
            <div className="flex justify-center flex-row space-x-4">
              <div className="flex flex-col items-center space-y-4 p-2">
                <img src={khai} className="devteam-image-size object-cover rounded-sm shadow p-4 hover:shadow-lg border border-gray-300" alt="Team member 1" />
                <h1 className="text-center font-bold text-lg">Khaihou James D. Law</h1>
              </div>
              <div className="flex flex-col items-center space-y-4 p-2">
                <img src={hanzel} className="devteam-image-size object-cover rounded-sm shadow p-4 hover:shadow-lg border border-gray-300" alt="Team member 2" />
                <h1 className="text-center font-bold text-lg">Rommel Hanzel D. Navarro</h1>
              </div>
              <div className="flex flex-col items-center space-y-4 p-2">
                <img src={rika} className="devteam-image-size object-cover rounded-sm shadow p-4 hover:shadow-lg border border-gray-300" alt="Team member 3" />
                <h1 className="text-center font-bold text-lg">Erika Mae Camille C. Corpuz</h1>
              </div>
              <div className="flex flex-col items-center space-y-4 p-2">
                <img src={tim} className="devteam-image-size object-cover rounded-sm shadow p-4 hover:shadow-lg border border-gray-300" alt="Team member 4" />
                <h1 className="text-center font-bold text-lg">Timothy Carl I. Bundalian</h1>
              </div>
              <div className="flex flex-col items-center space-y-4 p-2">
                <img src={joshua} className="devteam-image-size object-cover rounded-sm shadow p-4 hover:shadow-lg border border-gray-300" alt="Team member 5" />
                <h1 className="text-center font-bold text-lg">Joshua James D. Mar</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStory;
