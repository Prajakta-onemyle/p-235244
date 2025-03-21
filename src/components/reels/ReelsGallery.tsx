import React from "react";
import ReelsNavigation from "./ReelsNavigation";
import ReelCard from "./ReelCard";

const ReelsGallery: React.FC = () => {
  // Sample data for reels
  const reels = [
    {
      id: 1,
      title: "Spring Sale &amp; big savings in 2025 @ bigbasket",
      postedTime: "Posted 1 hrs ago",
      status: "New Draft",
      authorName: "Santi Cazorla",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2223fa73254b455aab307398b2f578a6fd3bd781",
      svgContent: `<svg id="I949:32340;887:7998" width="263" height="309" viewBox="0 0 263 309" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-bg" style="width: 100%; height: auto"> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="url(#pattern0_3001_14305)"></path> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="black" fill-opacity="0.3"></path> <rect x="16" y="19.5" width="80" height="31" rx="4" fill="#EBEBEB"></rect> <rect x="24" y="27.5" width="64" height="15" fill="url(#pattern1_3001_14305)"></rect> <circle cx="131.5" cy="182" r="23.5" fill="white" fill-opacity="0.3"></circle> <path d="M139.75 181.201C140.75 181.778 140.75 183.222 139.75 183.799L129.25 189.861C128.25 190.439 127 189.717 127 188.562V176.438C127 175.283 128.25 174.561 129.25 175.139L139.75 181.201Z" fill="white"></path> <defs> <pattern id="pattern0_3001_14305" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3001_14305" transform="matrix(0.00157051 0 0 0.00133671 -0.709125 0)"></use> </pattern> <pattern id="pattern1_3001_14305" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_3001_14305" transform="scale(0.000833333 0.00367647)"></use> </pattern>   </defs> </svg>`,
    },
    {
      id: 2,
      title: "Fresh Start, Big Discounts @DailyCart",
      postedTime: "Posted 1 hrs ago",
      status: "New Draft",
      authorName: "Esther Howard",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f37d3564be71f580eae7f541a7add385a2f519e8",
      svgContent: `<svg id="I949:32340;887:8016" width="263" height="309" viewBox="0 0 263 309" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-bg" style="width: 100%; height: auto"> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="url(#pattern0_3001_14323)"></path> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="black" fill-opacity="0.3"></path> <rect x="16" y="19" width="93" height="31" rx="4" fill="#EBEBEB"></rect> <g style="mix-blend-mode:multiply"> <rect x="31" y="27.125" width="63" height="14.75" fill="url(#pattern1_3001_14323)"></rect> </g> <circle cx="131.5" cy="182" r="23.5" fill="white" fill-opacity="0.3"></circle> <path d="M139.75 181.201C140.75 181.778 140.75 183.222 139.75 183.799L129.25 189.861C128.25 190.439 127 189.717 127 188.562V176.438C127 175.283 128.25 174.561 129.25 175.139L139.75 181.201Z" fill="white"></path> <defs> <pattern id="pattern0_3001_14323" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3001_14323" transform="matrix(0.00283793 0 0 0.00241546 -0.54436 0)"></use> </pattern> <pattern id="pattern1_3001_14323" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_3001_14323" transform="matrix(0.000853048 0 0 0.00364353 -0.0118289 -0.610169)"></use> </pattern>   </defs> </svg>`,
    },
    {
      id: 3,
      title: "Flourish with Fresh Deals @ grocerease",
      postedTime: "Posted 1 hrs ago",
      status: "Approved",
      authorName: "Ronald Richards",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aaa09f3dc9936eb4587bad67c3a75f443f35f754",
      svgContent: `<svg id="I949:32340;887:8035" width="263" height="309" viewBox="0 0 263 309" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-bg" style="width: 100%; height: auto"> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="url(#pattern0_3001_14342)"></path> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="black" fill-opacity="0.3"></path> <rect x="16" y="19" width="93" height="31" rx="4" fill="#EBEBEB"></rect> <g style="mix-blend-mode:darken"> <rect x="30" y="24.5" width="65" height="20" fill="url(#pattern1_3001_14342)"></rect> </g> <circle cx="131.5" cy="182" r="23.5" fill="white" fill-opacity="0.3"></circle> <path d="M139.75 181.201C140.75 181.778 140.75 183.222 139.75 183.799L129.25 189.861C128.25 190.439 127 189.717 127 188.562V176.438C127 175.283 128.25 174.561 129.25 175.139L139.75 181.201Z" fill="white"></path> <defs> <pattern id="pattern0_3001_14342" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3001_14342" transform="matrix(0.00239777 0 0 0.00204082 -0.381179 0)"></use> </pattern> <pattern id="pattern1_3001_14342" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_3001_14342" transform="matrix(0.0014245 0 0 0.0046729 -0.908832 -0.813084)"></use> </pattern>   </defs> </svg>`,
    },
    {
      id: 4,
      title: "Spring Fling Savings @farmBasket",
      postedTime: "Posted 1 hrs ago",
      status: "Approved",
      authorName: "Kristin Watson",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/46ae52e4ffa80781af5925bb818938272cd00a3b",
      svgContent: `<svg id="I949:32340;887:8053" width="263" height="309" viewBox="0 0 263 309" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-bg" style="width: 100%; height: auto"> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="url(#pattern0_3001_14360)"></path> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="black" fill-opacity="0.3"></path> <rect x="16" y="19.5" width="80" height="31" rx="4" fill="#EBEBEB"></rect> <rect x="42" y="24.5" width="28" height="21" fill="url(#pattern1_3001_14360)"></rect> <circle cx="131.5" cy="182" r="23.5" fill="white" fill-opacity="0.3"></circle> <path d="M139.75 181.201C140.75 181.778 140.75 183.222 139.75 183.799L129.25 189.861C128.25 190.439 127 189.717 127 188.562V176.438C127 175.283 128.25 174.561 129.25 175.139L139.75 181.201Z" fill="white"></path> <defs> <pattern id="pattern0_3001_14360" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3001_14360" transform="matrix(0.000522291 0 0 0.000444539 -0.719889 0)"></use> </pattern> <pattern id="pattern1_3001_14360" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_3001_14360" transform="matrix(0.000733676 0 0 0.00099108 -0.782832 -0.7334)"></use> </pattern>   </defs> </svg>`,
    },
    {
      id: 5,
      title: "Spring Fling Savings @farmBasket",
      postedTime: "Posted 1 hrs ago",
      status: "Approved",
      authorName: "Kristin Watson",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/46ae52e4ffa80781af5925bb818938272cd00a3b",
      svgContent: `<svg id="I949:32340;887:8072" width="263" height="309" viewBox="0 0 263 309" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-bg" style="width: 100%; height: auto"> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="url(#pattern0_3001_14379)"></path> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="black" fill-opacity="0.3"></path> <rect x="16" y="19.5" width="80" height="31" rx="4" fill="#EBEBEB"></rect> <rect x="42" y="24.5" width="28" height="21" fill="url(#pattern1_3001_14379)"></rect> <circle cx="131.5" cy="182" r="23.5" fill="white" fill-opacity="0.3"></circle> <path d="M139.75 181.201C140.75 181.778 140.75 183.222 139.75 183.799L129.25 189.861C128.25 190.439 127 189.717 127 188.562V176.438C127 175.283 128.25 174.561 129.25 175.139L139.75 181.201Z" fill="white"></path> <defs> <pattern id="pattern0_3001_14379" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3001_14379" transform="matrix(0.000522291 0 0 0.000444539 -0.719889 0)"></use> </pattern> <pattern id="pattern1_3001_14379" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_3001_14379" transform="matrix(0.000733676 0 0 0.00099108 -0.782832 -0.7334)"></use> </pattern>   </defs> </svg>`,
    },
    {
      id: 6,
      title: "Flourish with Fresh Deals @ grocerease",
      postedTime: "Posted 1 hrs ago",
      status: "Approved",
      authorName: "Ronald Richards",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aaa09f3dc9936eb4587bad67c3a75f443f35f754",
      svgContent: `<svg id="I949:32340;887:8090" width="263" height="309" viewBox="0 0 263 309" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-bg" style="width: 100%; height: auto"> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="url(#pattern0_3001_14397)"></path> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="black" fill-opacity="0.3"></path> <rect x="16" y="19" width="93" height="31" rx="4" fill="#EBEBEB"></rect> <g style="mix-blend-mode:darken"> <rect x="30" y="24.5" width="65" height="20" fill="url(#pattern1_3001_14397)"></rect> </g> <circle cx="131.5" cy="182" r="23.5" fill="white" fill-opacity="0.3"></circle> <path d="M139.75 181.201C140.75 181.778 140.75 183.222 139.75 183.799L129.25 189.861C128.25 190.439 127 189.717 127 188.562V176.438C127 175.283 128.25 174.561 129.25 175.139L139.75 181.201Z" fill="white"></path> <defs> <pattern id="pattern0_3001_14397" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3001_14397" transform="matrix(0.00239777 0 0 0.00204082 -0.381179 0)"></use> </pattern> <pattern id="pattern1_3001_14397" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_3001_14397" transform="matrix(0.0014245 0 0 0.0046729 -0.908832 -0.813084)"></use> </pattern>   </defs> </svg>`,
    },
    {
      id: 7,
      title: "Basket Bonanza @bigbasket",
      postedTime: "Posted 1 hrs ago",
      status: "New Draft",
      authorName: "Santi Cazorla",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2223fa73254b455aab307398b2f578a6fd3bd781",
      svgContent: `<svg id="I949:32340;887:8108" width="263" height="309" viewBox="0 0 263 309" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-bg" style="width: 100%; height: auto"> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="url(#pattern0_3001_14415)"></path> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="black" fill-opacity="0.3"></path> <rect x="16" y="19.5" width="80" height="31" rx="4" fill="#EBEBEB"></rect> <rect x="24" y="27.5" width="64" height="15" fill="url(#pattern1_3001_14415)"></rect> <circle cx="131.5" cy="182" r="23.5" fill="white" fill-opacity="0.3"></circle> <path d="M139.75 181.201C140.75 181.778 140.75 183.222 139.75 183.799L129.25 189.861C128.25 190.439 127 189.717 127 188.562V176.438C127 175.283 128.25 174.561 129.25 175.139L139.75 181.201Z" fill="white"></path> <defs> <pattern id="pattern0_3001_14415" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3001_14415" transform="matrix(0.00286562 0 0 0.00243902 -0.543086 0)"></use> </pattern> <pattern id="pattern1_3001_14415" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_3001_14415" transform="scale(0.000833333 0.00367647)"></use> </pattern>   </defs> </svg>`,
    },
    {
      id: 8,
      title: "Fresh Start, Big Discounts @DailyCart",
      postedTime: "Posted 1 hrs ago",
      status: "New Draft",
      authorName: "Esther Howard",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f37d3564be71f580eae7f541a7add385a2f519e8",
      svgContent: `<svg id="I949:32340;887:8126" width="263" height="309" viewBox="0 0 263 309" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-bg" style="width: 100%; height: auto"> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="url(#pattern0_3001_14433)"></path> <path d="M0 10C0 4.47715 4.47715 0 10 0H253C258.523 0 263 4.47715 263 10V309H0V10Z" fill="black" fill-opacity="0.3"></path> <rect x="16" y="19" width="93" height="31" rx="4" fill="#EBEBEB"></rect> <g style="mix-blend-mode:multiply"> <rect x="31" y="27.125" width="63" height="14.75" fill="url(#pattern1_3001_14433)"></rect> </g> <circle cx="131.5" cy="182" r="23.5" fill="white" fill-opacity="0.3"></circle> <path d="M139.75 181.201C140.75 181.778 140.75 183.222 139.75 183.799L129.25 189.861C128.25 190.439 127 189.717 127 188.562V176.438C127 175.283 128.25 174.561 129.25 175.139L139.75 181.201Z" fill="white"></path> <defs> <pattern id="pattern0_3001_14433" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3001_14433" transform="matrix(0.00283793 0 0 0.00241546 -0.54436 0)"></use> </pattern> <pattern id="pattern1_3001_14433" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_3001_14433" transform="matrix(0.000853048 0 0 0.00364353 -0.0118289 -0.610169)"></use> </pattern>   </defs> </svg>`,
    },
  ];

  return (
    <main className="max-w-[1200px] mx-auto my-0 p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <ReelsNavigation />
      <section className="w-full">
        <div className="grid grid-cols-[repeat(4,1fr)] gap-5 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {reels.map((reel) => (
            <ReelCard
              key={reel.id}
              title={reel.title}
              postedTime={reel.postedTime}
              status={reel.status}
              authorName={reel.authorName}
              authorImage={reel.authorImage}
              svgContent={reel.svgContent}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ReelsGallery;
