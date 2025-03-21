import React, { useState } from "react";
import ReelsFilter from "./ReelsFilter";

const ReelsNavigation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Reels");

  const categories = [
    "All Reels",
    "Bigbasket",
    "DailyCart",
    "GrocerEase",
    "FarmBasket",
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <nav className="flex justify-between items-center mb-[37px]">
      <div className="flex gap-[34px] items-center max-sm:hidden">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-base ${
              activeCategory === category
                ? "text-primary font-medium"
                : "text-[#444]"
            } cursor-pointer hover:text-primary transition-colors`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2.5">
        <button
          className="w-[34px] h-[34px] flex justify-center items-center rounded shadow-[0_8px_50px_rgba(207,212,224,0.4)] bg-white"
          aria-label="Create new reel"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg id="I949:32340;887:7963" layer-name="reels (1) 1" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"> <path d="M14.3446 0.879823H5.20364H5.19561H5.18557C2.44097 0.889862 0.212402 3.12343 0.212402 5.8679V15.0088C0.212402 17.7614 2.45097 20 5.20356 20H14.3445C17.0971 20 19.3357 17.7614 19.3357 15.0088V5.8679C19.3357 3.11533 17.0971 0.87674 14.3445 0.87674L14.3446 0.879823ZM17.9915 5.22852H14.3574L12.2192 2.16475H14.3444C16.1694 2.16475 17.6854 3.49084 17.9915 5.22852ZM8.57348 5.22852L6.4383 2.16475H10.6585L12.7967 5.22852H8.57348ZM4.88035 2.18274L7.00549 5.22852H1.55767C1.84577 3.59626 3.20183 2.32947 4.88035 2.18274ZM14.3446 18.7171H5.20364C3.16082 18.7171 1.49741 17.0548 1.49741 15.0109V6.51242H18.0498V15.0109C18.0498 17.0537 16.3874 18.7171 14.3436 18.7171H14.3446Z" fill="#2E3748"></path>
<path d="M13.0418 11.0667L8.46721 8.42469C8.1229 8.22392 7.70931 8.22392 7.36497 8.42469C7.02064 8.62546 6.81287 8.98283 6.81287 9.38036V14.6637C6.81287 15.0622 7.01865 15.4196 7.36497 15.6194C7.53763 15.7198 7.72737 15.768 7.91708 15.768C8.10681 15.768 8.29454 15.7188 8.46918 15.6194L13.0438 12.9773C13.3881 12.7766 13.5939 12.4192 13.5939 12.0217C13.5939 11.6231 13.3881 11.2658 13.0438 11.066L13.0418 11.0667ZM8.09792 14.3484V9.69471L12.1274 12.0206L8.09792 14.3465V14.3484Z" fill="#2E3748"></path>
<circle cx="17.7776" cy="16.6665" r="5.55556" fill="white"></circle>
<path d="M17.7499 19.9945H17.75C18.669 19.9931 19.5499 19.6274 20.1997 18.9776C20.8495 18.3277 21.2152 17.4468 21.2167 16.5278V16.5278C21.2167 15.8421 21.0134 15.1718 20.6324 14.6017C20.2515 14.0316 19.7101 13.5873 19.0766 13.3249C18.4431 13.0625 17.7461 12.9938 17.0736 13.1276C16.4011 13.2614 15.7834 13.5915 15.2985 14.0764C14.8137 14.5612 14.4835 15.1789 14.3498 15.8514C14.216 16.5239 14.2846 17.221 14.547 17.8544C14.8094 18.4879 15.2538 19.0294 15.8239 19.4103C16.394 19.7912 17.0643 19.9945 17.7499 19.9945ZM18.4775 16.2045V16.2251L18.4921 16.2398L19.6627 17.4119L19.6628 17.412C19.7996 17.5483 19.8767 17.7333 19.8771 17.9265C19.8775 18.1196 19.8012 18.305 19.6649 18.4418C19.5287 18.5787 19.3436 18.6558 19.1505 18.6562C18.9573 18.6566 18.7719 18.5803 18.6351 18.444L17.2352 17.0441L17.2352 17.0441C17.0987 16.9076 17.022 16.7226 17.0219 16.5296C17.0219 16.5296 17.0219 16.5296 17.0219 16.5296V14.4296C17.0219 14.2365 17.0986 14.0514 17.2351 13.915C17.3716 13.7785 17.5567 13.7018 17.7497 13.7018C17.9427 13.7018 18.1278 13.7785 18.2643 13.915C18.4008 14.0514 18.4775 14.2365 18.4775 14.4296V16.2045ZM15.0152 12.435C15.8247 11.8941 16.7764 11.6054 17.7499 11.6054V11.5554L17.7499 11.6054C19.0549 11.6069 20.3061 12.1259 21.2289 13.0487C22.1518 13.9716 22.6708 15.2228 22.6723 16.5278C22.6722 17.5013 22.3836 18.453 21.8427 19.2625C21.3018 20.0719 20.5331 20.7028 19.6336 21.0754C18.7342 21.448 17.7445 21.5454 16.7896 21.3555C15.8348 21.1656 14.9577 20.6968 14.2693 20.0084C13.5809 19.32 13.1121 18.4429 12.9222 17.4881C12.7322 16.5332 12.8297 15.5435 13.2023 14.6441C13.5748 13.7446 14.2057 12.9759 15.0152 12.435Z" fill="#2E3748" stroke="#F5F5F5" stroke-width="0.1"></path></svg>`,
            }}
          />
        </button>
        <ReelsFilter />
      </div>
    </nav>
  );
};

export default ReelsNavigation;
