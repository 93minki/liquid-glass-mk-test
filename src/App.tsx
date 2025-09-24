// src/App.tsx
// https://techcrunch.com/2025/06/09/apple-redesigns-its-operating-systems-with-liquid-glass/
import { LiquidGlass } from "liquid-glass-mk";
import { useEffect, useState } from "react";
import { AiOutlineCamera, AiOutlinePicture } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import {
  BsCameraVideoFill,
  BsHeartPulse,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { CiCalendarDate, CiClock2, CiSearch, CiSettings } from "react-icons/ci";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaRegCircle,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiMail, FiMapPin } from "react-icons/fi";
import { GrAppleAppStore } from "react-icons/gr";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { LuNotebookTabs, LuNotepadText } from "react-icons/lu";
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { SiApplenews, SiAppletv } from "react-icons/si";
import { TiCompass } from "react-icons/ti";
import { WiDayCloudy } from "react-icons/wi";
import "./index.css";
import { imageList } from "./imglist";


function App() {
  const [imageNumber, setImageNumber] = useState(0);
  const [imageUrl, setImageUrl] = useState(imageList[0]);
  const [isLoading, setIsLoading] = useState(false);

  const nextImage = () => {
    if (isLoading) return;

    setIsLoading(true);
    const nextIndex = imageNumber === imageList.length - 1 ? 0 : imageNumber + 1;
    setImageNumber(nextIndex);
    setImageUrl(imageList[nextIndex]);

    const imageUrl = imageList[nextIndex].match(/url\('([^']+)'\)/)?.[1];
    if (imageUrl) {
      const img = new Image();
      img.onload = () => setIsLoading(false);
      img.src = imageUrl;
    } else {
      setIsLoading(false);
    }
  };

  const prevImage = () => {
    if (isLoading) return;

    setIsLoading(true);
    const prevIndex = imageNumber === 0 ? imageList.length - 1 : imageNumber - 1;
    setImageNumber(prevIndex);
    setImageUrl(imageList[prevIndex]);

    const imageUrl = imageList[prevIndex].match(/url\('([^']+)'\)/)?.[1];
    if (imageUrl) {
      const img = new Image();
      img.onload = () => setIsLoading(false);
      img.src = imageUrl;
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    imageList.forEach((url) => {
      const imageUrl = url.match(/url\('([^']+)'\)/)?.[1];
      if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center pt-10  bg-gray-300">
      <div
        className="relative w-full max-w-2xl mx-auto grid grid-cols-2 gap-x-8 gap-y-8 p-10 border-2 border-transparent rounded-[4rem]"
        style={{
          background: `${imageUrl}`,
          minHeight: "100vh",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div className="flex flex-col gap-1">
          <LiquidGlass
            glassRadius={"2rem"}
            className="flex flex-col text-white p-4 gap-8 h-full justify-between"
          >
            <div className="flex flex-col">
              <span className="text-xl font-medium">San Francisco</span>
              <span className="text-7xl font-light">53°</span>
            </div>
            <div className="flex flex-col">
              <WiDayCloudy size={32} color="white" fill="white" />
              <span>Partly Cloudy</span>
              <span>H:56° L:50°</span>
            </div>
          </LiquidGlass>
          <span className="flex justify-center items-center text-lg font-medium text-white text-center">
            Weather
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <LiquidGlass
            glassRadius={"2rem"}
            className="flex flex-col text-white p-4 gap-4 h-full justify-between"
          >
            <div className="flex justify-end relative">
              <FiMapPin color="white" size={60} />
              <FaRegCircle
                color="white"
                size={40}
                className="absolute bottom-[-20px] right-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <span>Now</span>
              <span>Marina Green</span>
              <span>San Francisco, CA</span>
            </div>
          </LiquidGlass>
          <span className="flex justify-center items-center text-lg font-medium text-white text-center">
            Find My
          </span>
        </div>

        <div className="w-full col-span-2 grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] gap-x-4 gap-y-8">
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <BsCameraVideoFill color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              FaceTime
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <CiCalendarDate color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Calendar
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <AiOutlinePicture color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Photos
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <AiOutlineCamera color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Camera
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <FiMail color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Mail
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <LuNotepadText color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Notes
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <LuNotebookTabs color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Reminders
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <CiClock2 color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Clock
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <SiApplenews color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              News
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <SiAppletv color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              TV
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <PiApplePodcastsLogoLight color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Podcasts
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <GrAppleAppStore color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              App Store
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <FaMapLocationDot color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Maps
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <BsHeartPulse color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Health
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <HiOutlineWallet color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Wallet
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass
              className="flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <CiSettings color="white" size="100%" />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Settings
            </span>
          </div>
        </div>

        <div className="col-span-2 flex justify-center items-center text-white my-4">
          <LiquidGlass
            className="flex justify-center items-center px-6 py-2 gap-1"
            glassRadius={"2rem"}
          >
            <CiSearch /> Search
          </LiquidGlass>
        </div>

        <div className="col-span-2 flex justify-center items-center text-white">
          <LiquidGlass
            className="flex justify-center items-center px-4 py-4 w-full gap-16"
            glassRadius={"2rem"}
          >
            <LiquidGlass
              className="w-20 h-20 flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <IoCall color="white" size="100%" />
            </LiquidGlass>
            <LiquidGlass
              className="w-20 h-20 flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <TiCompass color="white" size="100%" />
            </LiquidGlass>
            <LiquidGlass
              className="w-20 h-20 flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <BiMessageRounded color="white" size="100%" />
            </LiquidGlass>
            <LiquidGlass
              className="w-20 h-20 flex justify-center items-center p-4"
              glassRadius={"1.5rem"}
            >
              <BsMusicNoteBeamed color="white" size="100%" />
            </LiquidGlass>
          </LiquidGlass>
        </div>
        <div
          className="absolute left-[-50px] top-1/2"
          onClick={() => prevImage()}
        >
          <FaArrowCircleLeft color="white" size={40} />
        </div>
        <div
          className="absolute right-[-50px] top-1/2"
          onClick={() => nextImage()}
        >
          <FaArrowCircleRight color="white" size={40} />
        </div>
      </div>
    </div>
  );
}

export default App;
