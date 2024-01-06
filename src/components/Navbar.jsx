import React, { useEffect } from "react";

// NAVBAR ICONS
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyBoardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// NAVBAR PROFILE PICTURE
import avatar from "../assets/avatar.jpg";

// NAVBAR COMPONENTS
import { Cart, Chat, Notification, UserProfile } from ".";

// CONTEXT PROVIDER
import { useStateContext } from "../context/ContextProvider";

// NAV BUTTON WITH CUSTOM FUNCTIONALITY BASED ON BUTTON
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        {icon}
     
    </button>
  </TooltipComponent>
);


const Navbar = () => {

  // STATE VALUES FROM CONTEXT PROVIDER
  const {setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor} = useStateContext();

  // TRACKS WINDOWS WIDTH "INITIALLY" AND REMOVES STATE AFTER
  useEffect(() => {
    const handleResize = () => 
      setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize)
      handleResize();
      return () => window.removeEventListener("resize", handleResize)
    
  },[]);

  // REMOVES SIDEBAR 
  useEffect(() => {
    if(screenSize <=900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);



  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />

        <NavButton
          title="notification"
          dotColor="#03c9d7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="gap-2 cursor-pointer p-1 hover:bg-light"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8" src={avatar} />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14 ">
                Michael
              </span>
            </p>
          </div>
        </TooltipComponent>

        {/**** CONDITIONALLY RENDERING COMPONENTS ****/}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}

        
      </div>
    </div>
  );
};

export default Navbar;
