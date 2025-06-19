import planeImg from "../../assets/plane.png";
import BrightImg from "../../assets/Bright.png";
import EllipseImg from "../../assets/Ellipse.png";
import girlRobotImg from "../../assets/girlRobot.png";
import LifeImg from "../../assets/life.png";
import manRobotImg from "../../assets/manRobot.png";
import landingRobot from "../../assets/landingRobot.png";

import navigationVideo from "../../assets/navigationVideo.mp4";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const faqs = [
    {
      id: 1,
      question: "What is TastyStructure?",
      answer:
        "TastyStructure is a recipe generator that helps you create delicious meals based on the ingredients you have available.",
    },
    {
      id: 2,
      question: "How do I use TastyStructure?",
      answer:
        "Simply enter the ingredients you have, and TastyStructure will generate recipes that match your available ingredients.",
    },
    {
      id: 3,
      question: "Do I need an account to use TastyStructure?",
      answer:
        "No, you can generate recipes without an account. However, creating an account allows you to save recipes and get personalized recommendations.",
    },
    {
      id: 4,
      question: "Can I filter recipes based on dietary preferences?",
      answer:
        "Yes! You can filter recipes for vegetarian, vegan, gluten-free, or other dietary needs.",
    },
    {
      id: 5,
      question: "What if I have food allergies?",
      answer:
        "You can specify allergies when entering ingredients, and TastyStructure will exclude recipes that contain those allergens.",
    },
    {
      id: 6,
      question: "Where do the recipes come from?",
      answer:
        "Our recipes are sourced from curated databases, community contributions, and AI-generated suggestions to give you a variety of meal ideas.",
    },
    {
      id: 7,
      question: "Can I submit my own recipes?",
      answer:
        "Yes! You can share your favorite recipes with the TastyStructure community.",
    },
    {
      id: 8,
      question: "Does TastyStructure support multiple cuisines?",
      answer:
        "Absolutely! You can explore recipes from various cuisines, including Italian, Mexican, Asian, Mediterranean, and more.",
    },
    {
      id: 9,
      question: "Is TastyStructure free to use?",
      answer:
        "Yes! TastyStructure is free to use, with potential premium features in the future.",
    },
    {
      id: 10,
      question: "Can I use TastyStructure on my phone?",
      answer:
        "Yes! TastyStructure is mobile-friendly, so you can generate recipes easily on any device.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const showAns = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {/* First div */}
      <div className="home flex flex-col pt-40 lg:pt-48 p-20 pl-10 md:pl-32 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${landingRobot})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.4,
          }}
        ></div>
        <div className="relative z-1000">
          <p className="text-primaryColor text-sm">Ai Powered Recipes</p>
          <h1 className="text-3xl md:text-5xl 2xl:text-9xl font-poppins font-semibold">
            Next Level
            <br /> Machine
            <br /> Intelligence
          </h1>
          <button className="flex flex-row mt-10 bg-primaryColor border border-red-500 hover:bg-primaryBody transition duration-300 ease-in-out rounded-3xl p-2">
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
            Start Now
          </button>
        </div>
      </div>
      {/* second div */}
      <div className="md:w-fit smallText flex flex-row justify-center nd:items-end m-5 -mt-28 md:m-20 md:-mt-32 bg-primaryBody  border rounded-md ">
        <div>
          <img
            src={EllipseImg}
            alt="plane image"
            className="hidden md:block w-32 h-32 lg:w-24 lg:h-36 mr-5 ml-1 mb-1"
          />
        </div>
        <div className="flex flex-col p-3 md:p-10">
          <div>
            <h4 className="text-primaryColor text-sm text-center mb-5">
              WHO ARE WE
            </h4>
            <h1 className="font-poppins text-xl md:text-3xl text-center font-semibold mb-10">
              We Help To Get Solutions
            </h1>
            <p className="text-sm text-center mb-10">
              At Tasty Mundo, we are a passionate team of food enthusiasts and
              tech innovators dedicated to
              <br /> helping you discover delicious recipes based on the
              ingredients you already have at home.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 justify-between md:items-center">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <img
                src={planeImg}
                alt="plane image"
                className="w-12 h-12 mr-5 mb-2 lg:mb-0"
              />
              <div>
                <h1 className="font-semibold text-lg mb-2">Made Simple</h1>
                <p className="text-sm text-wrap">
                  At Tasty Mundo, we simplify cooking by helping you find
                  recipesbased on the ingredients you already have.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <img
                src={BrightImg}
                alt="plane image"
                className="w-12 h-12 mr-5 mb-2 lg:mb-0"
              />
              <div>
                <h1 className="font-semibold text-lg mb-2">
                  EndLess Possibilities
                </h1>
                <p className="text-sm">
                  Our goal is to inspire creativity and make meal planning easy
                  for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={girlRobotImg}
            alt="plane image"
            className="hidden md:block w-96 h-44 lg:w-80 lg:h-60 -mb-1"
          />
        </div>
      </div>

      {/* third div */}
      <div className="flex flex-col lg:flex-row p-5 md:p-20">
        <img
          src={LifeImg}
          alt="plane image"
          className="wfull lg:w-2/4 mr-10 rounded-b-2xl"
        />
        <div className="smallText flex flex-col gap-3">
          <p className=" text-primaryColor mt-3">Be A Cooking Master</p>
          <h1 className="font-poppins font-semibold">
            Ai Generated Recipe Ideas
          </h1>
          <p className="text-xl ">
            At Tasty Mundo, we&apos;re driven by the belief that the best
            experiences come from simplicity and creativity. Our goal is to
            provide solutions that not only save time but also spark
            inspiration. Whether you&apos;re navigating the kitchen with limited
            ingredients or looking for new ways to bring ideas to life, our
            platform is here to help. By blending technology with your unique
            tastes and preferences, we offer a personalized experience that
            adapts to your needs, helping you discover new possibilities every
            day. We aim to make life easier, more enjoyable, and full of
            unexpected discoveries, all while empowering you to be more
            resourceful and creative.
          </p>
        </div>
      </div>

      {/* fourth div */}
      <div className="bg-getStartedpriColor p-11 pl-16 md:pl-32 pr-32 relative">
        <img
          src={manRobotImg}
          alt="man Robot image"
          className="w-48 h-48 -ml-20 bottom-0 md:w-72 md:h-72 lg:w-72 lg:h-72 absolute"
        />
        <div className="w-[250px] md:w-full p-2 smallText bg-getStartedsecColor flex flex-col justify-between items-center md:p-9 rounded-md">
          <p className="mb-1">Discover, Cook, Enjoy</p>
          <h1 className="font-poppins font-semibold text-xl md:text-3xl text-center">
            Start creating delicious meals with just <br />a few ingredients.{" "}
            <br />
            Tasty Mundo is here for you
          </h1>
          <Link to={"/aichat"} className="inline-block">
            <button className="flex flex-wrap flex-row justify-between items-center mt-10 bg-primaryColor border border-red-500 rounded-3xl p-2 pl-5 pr-5 hover:bg-primaryBody transition duration-300">
              Get Started
              <svg
                className="size-2 md:size-5 ml-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* sixth div */}
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="text-center mx-2 md:mx-0">
          <h1 className="text-3xl font-bold">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-sm md:text-xl pt-5">
            Get the information you need to make the most of our platform.
          </p>
        </div>
        <section className="faq p-5 md:p-10">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <div
                onClick={() => showAns(index)}
                className="flex flex-row cursor-pointer"
              >
                <div className="bg-slate-800 my-1 relative rounded-md px-1">
                  {openIndex === index ? (
                    <svg
                      className="size-6 absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="size-6 absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}

                  <h2 className="text-xl ml-7">{faq.question}</h2>
                </div>
              </div>

              <div
                className={`bg-slate-900 rounded-md transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-1 ml-8 text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* sevnth div */}
      <div className="flex flex-col mb-5 md:p-20 items-center">
        <div className="smallText text-center">
          <p>See it in Action</p>
          <h1 className="text-3xl font-poppins font-semibold">
            Watch how Tasty Mundo makes cooking easier and more fun!
          </h1>
          <p>Discover the Magic of Effortless Cooking</p>
          <div className="mt-2 flex justify-center">
            {/* <video src={navigationVideo} controls className="w-3/4"></video> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
