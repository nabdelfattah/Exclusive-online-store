import { Breadcrumb, Features } from "../components/";
import person1 from "../assets/people/person1.jpg";
import person1Sm from "../assets/people/person1.webp";
import person2 from "../assets/people/person2.jpg";
import person2Sm from "../assets/people/person2.webp";
import person3 from "../assets/people/person3.jpg";
import person3Sm from "../assets/people/person3.webp";
import person4 from "../assets/people/person4.jpg";
import person4Sm from "../assets/people/person4.webp";
import person5 from "../assets/people/person5.jpg";
import person5Sm from "../assets/people/person5.webp";
import person6 from "../assets/people/person6.jpg";
import person6Sm from "../assets/people/person6.webp";
import person7 from "../assets/people/person7.jpg";
import person7Sm from "../assets/people/person7.webp";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const managers = [
  {
    name: "Tracey Wilson",
    title: "Founder & Chairman",
    image: person1,
    imageSm: person1Sm,
    alt: "Photo by LinkedIn Sales Solutions on Unsplash",
  },
  {
    name: "Kwame Osei",
    title: "Managing Director",
    image: person2,
    imageSm: person2Sm,
    alt: "Photo by Christina Morillo: https://www.pexels.com/photo/man-wearing-blue-button-up-sweater-1181391/",
  },
  {
    name: "Jason Francisco",
    title: "Product Designer",
    image: person3,
    imageSm: person3Sm,
    alt: "Photo by Tiger Lily: https://www.pexels.com/photo/photo-of-man-in-bubble-jacket-while-holding-tablet-computer-4484077/",
  },
  {
    name: "Eric Smith",
    title: "Digital Marketing Specialist",
    image: person4,
    imageSm: person4Sm,
    alt: "Photo by Nick Karvounis on Unsplash ",
  },
  {
    name: "Ernie Smith",
    title: "Operations Manager",
    image: person5,
    imageSm: person5Sm,
    alt: "Photo by Gregory Hayes on Unsplash",
  },
  {
    name: "Gustav Johansson",
    title: "Supply Chain Manager",
    image: person6,
    imageSm: person6Sm,
    alt: "Photo by Sora Shimazaki: https://www.pexels.com/photo/glad-asian-businessman-standing-with-documents-in-hand-in-office-5668774/",
  },
  {
    name: "Malik Nkrumah",
    title: "Customer Service Representative",
    image: person7,
    imageSm: person7Sm,
    alt: "Photo by Zen Chung: https://www.pexels.com/photo/positive-black-man-in-smart-casual-clothes-5745170/",
  },
];

export function AboutPage() {
  const { t } = useTranslation();
  const [selectedBtn, setSelectedBtn] = useState(0);
  const cardRef = useRef();
  const cardWidth = cardRef.current ? cardRef.current.clientWidth : 0;

  const breadcrumb = [
    { route: "/", text: "Home" },
    { route: "about", text: "About" },
  ];

  function carouselBtnHandler(e) {
    setSelectedBtn(+e.currentTarget.name);
  }

  return (
    <>
      <Breadcrumb chain={breadcrumb} />

      <section className="about_hero mb-14">
        <div className="text">
          <h2 className="heading-primary">{t("Our Story")}</h2>
          <p className="description">{t("text1")}</p>
          <p className="descriotion">{t("text2")}</p>
        </div>
        <div className="picture">
          {/* Photo by Pawel Chu on Unsplash */}
          <div className="img"></div>
        </div>
      </section>

      <section className="about_statistics container mb-14">
        <article className="stat_item">
          <svg
            className="stat_icon"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fafafa"
          >
            <path
              d="M34.6416 5H27.9883L28.8216 13.3333C28.8216 13.3333 30.4883 15 32.9883 15C34.3006 15.0017 35.5684 14.524 36.5533 13.6567C36.6574 13.5594 36.735 13.4372 36.7787 13.3016C36.8224 13.166 36.8309 13.0214 36.8033 12.8817L35.6266 5.83333C35.5873 5.60049 35.4668 5.38909 35.2865 5.23656C35.1062 5.08404 34.8778 5.00024 34.6416 5V5Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M27.9883 5L28.8216 13.3333C28.8216 13.3333 27.1549 15 24.6549 15C22.1549 15 20.4883 13.3333 20.4883 13.3333V5H27.9883Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M20.4886 5V13.3333C20.4886 13.3333 18.8219 15 16.3219 15C13.8219 15 12.1553 13.3333 12.1553 13.3333L12.9886 5H20.4886Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12.9883 5H6.3366C6.09993 4.99991 5.87089 5.08377 5.69023 5.23666C5.50957 5.38955 5.38899 5.60157 5.34994 5.835L4.17494 12.8833C4.14747 13.0231 4.15601 13.1676 4.19974 13.3032C4.24348 13.4387 4.32097 13.5609 4.42494 13.6583C4.9716 14.1417 6.19327 15.0017 7.98827 15.0017C10.4883 15.0017 12.1549 13.335 12.1549 13.335L12.9883 5.00167V5Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M5.5 15V31.6667C5.5 32.5507 5.85119 33.3986 6.47631 34.0237C7.10143 34.6488 7.94928 35 8.83333 35H32.1667C33.0507 35 33.8986 34.6488 34.5237 34.0237C35.1488 33.3986 35.5 32.5507 35.5 31.6667V15"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M25.2217 35V25C25.2217 24.1159 24.8705 23.2681 24.2454 22.6429C23.6202 22.0178 22.7724 21.6666 21.8883 21.6666H18.555C17.671 21.6666 16.8231 22.0178 16.198 22.6429C15.5729 23.2681 15.2217 24.1159 15.2217 25V35"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="16"
            />
          </svg>
          <p className="stat_num">10.5k</p>
          <p className="stat_txt">{t("Sallers active our site")}</p>
        </article>
        <article className="stat_item">
          <svg
            className="stat_icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fafafa"
          >
            <path
              d="M20.0003 37.2728C29.5397 37.2728 37.273 29.5395 37.273 20C37.273 10.4606 29.5397 2.72729 20.0003 2.72729C10.4608 2.72729 2.72754 10.4606 2.72754 20C2.72754 29.5395 10.4608 37.2728 20.0003 37.2728Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.0914 14.547C24.762 13.9758 24.2834 13.505 23.707 13.1848C23.1305 12.8646 22.4777 12.7072 21.8186 12.7294H18.1823C17.2178 12.7294 16.2929 13.1124 15.611 13.7941C14.929 14.4759 14.5459 15.4005 14.5459 16.3647C14.5459 17.3288 14.929 18.2535 15.611 18.9353C16.2929 19.617 17.2178 20 18.1823 20H21.8186C22.783 20 23.708 20.383 24.3899 21.0648C25.0719 21.7465 25.455 22.6712 25.455 23.6354C25.455 24.5995 25.0719 25.5242 24.3899 26.2059C23.708 26.8877 22.783 27.2707 21.8186 27.2707H18.1823C17.5232 27.2929 16.8704 27.1354 16.2939 26.8153C15.7174 26.4951 15.2389 26.0242 14.9095 25.453"
              stroke="currentColor"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 8.18176V12.1212M20 27.8787V31.8181"
              stroke="currentColor"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="stat_num">33k</p>
          <p className="stat_txt">{t("Mopnthly Produduct Sale")}</p>
        </article>
        <article className="stat_item">
          <svg
            className="stat_icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.667 11.6667V8.33339C11.667 7.36818 11.9464 6.42362 12.4714 5.6137C12.9965 4.80379 13.7447 4.16315 14.6258 3.76912C15.5069 3.37509 16.4832 3.24451 17.4369 3.39313C18.3906 3.54176 19.2809 3.96325 20.0003 4.60672C20.7197 3.96325 21.61 3.54176 22.5637 3.39313C23.5174 3.24451 24.4937 3.37509 25.3748 3.76912C26.256 4.16315 27.0042 4.80379 27.5292 5.6137C28.0543 6.42362 28.3336 7.36818 28.3337 8.33339V11.6667H30.8337C31.4967 11.6667 32.1326 11.9301 32.6014 12.399C33.0703 12.8678 33.3337 13.5037 33.3337 14.1667V30.8417C33.3337 32.3866 32.72 33.8682 31.6276 34.9606C30.5352 36.053 29.0535 36.6667 27.5087 36.6667H13.3337C11.5655 36.6667 9.86986 35.9643 8.61961 34.7141C7.36937 33.4639 6.66699 31.7682 6.66699 30.0001V14.1667C6.66699 13.5037 6.93038 12.8678 7.39922 12.399C7.86807 11.9301 8.50395 11.6667 9.16699 11.6667H11.667ZM22.7253 34.1667C22.0454 33.1914 21.6818 32.0306 21.6837 30.8417V14.1667H9.16699V30.0001C9.16699 30.5472 9.27477 31.089 9.48416 31.5946C9.69356 32.1001 10.0005 32.5594 10.3874 32.9463C10.7743 33.3332 11.2336 33.6402 11.7391 33.8496C12.2447 34.0589 12.7865 34.1667 13.3337 34.1667H22.7253ZM19.167 11.6667V8.33339C19.167 7.67035 18.9036 7.03446 18.4348 6.56562C17.9659 6.09678 17.33 5.83339 16.667 5.83339C16.004 5.83339 15.3681 6.09678 14.8992 6.56562C14.4304 7.03446 14.167 7.67035 14.167 8.33339V11.6667H19.167ZM21.667 11.6667H25.8337V8.33339C25.8337 7.81878 25.6749 7.31669 25.379 6.89566C25.0832 6.47463 24.6645 6.15517 24.1803 5.98089C23.6961 5.8066 23.1699 5.78599 22.6736 5.92186C22.1772 6.05773 21.7349 6.34346 21.407 6.74005C21.5753 7.24005 21.667 7.77672 21.667 8.33339V11.6667ZM24.1837 30.8417C24.1837 31.7236 24.534 32.5693 25.1575 33.1929C25.7811 33.8164 26.6268 34.1667 27.5087 34.1667C28.3905 34.1667 29.2362 33.8164 29.8598 33.1929C30.4833 32.5693 30.8337 31.7236 30.8337 30.8417V14.1667H24.1837V30.8417Z"
              fill="currentColor"
            />
          </svg>

          <p className="stat_num">45.5k</p>
          <p className="stat_txt">{t("Customer active in our site")}</p>
        </article>
        <article className="stat_item">
          <svg
            className="stat_icon"
            width="40px"
            height="40px"
            viewBox="0 0 48.00 48.00"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="0.00048000000000000007"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.5083 13.9475L34.9054 8.98148C31.7645 9.16855 27.9659 9.90622 24.3212 10.9606C21.8446 11.6771 19.0865 11.569 16.5223 11.0959C15.7147 10.9469 14.9191 10.7603 14.1488 10.5481L16.4562 13.945C21.1677 15.6842 26.796 15.685 31.5083 13.9475ZM15.2815 15.6365C20.7022 17.7885 27.275 17.7878 32.695 15.6345C34.8987 17.9207 37.175 20.7657 38.9289 23.7416C40.7625 26.8526 41.9199 29.9295 41.996 32.5723C42.068 35.0734 41.1893 37.2281 38.7141 38.8825C36.091 40.6357 31.5202 41.9244 24.024 41.9969C16.5257 42.0694 11.9479 40.868 9.31733 39.1673C6.84175 37.5668 5.946 35.4353 6.00245 32.9202C6.06213 30.2614 7.20619 27.1403 9.03585 23.9635C10.7825 20.9307 13.0594 18.0103 15.2815 15.6365ZM13.662 8.31949C14.6893 8.64286 15.7776 8.92471 16.8852 9.12906C19.2829 9.57147 21.6987 9.63727 23.7654 9.03939C26.3919 8.27955 29.1492 7.66384 31.733 7.2991C29.5282 6.57325 26.8626 6 24.0433 6C19.9743 6 16.1968 7.19394 13.662 8.31949ZM11.7469 7.01231C14.4518 5.65746 19.0249 4 24.0433 4C28.9687 4 33.4307 5.59663 36.1239 6.93673C36.1692 6.95924 36.2139 6.98167 36.2581 7.00403C36.9838 7.37078 37.5736 7.7157 38 8L33.8956 14C43.3574 23.6727 54.6501 43.701 24.0433 43.9968C-6.56356 44.2926 4.53174 24.0426 14.0758 14L10 8C10.2852 7.81256 10.642 7.59878 11.0622 7.36975C11.2746 7.25402 11.5031 7.13439 11.7469 7.01231Z"
                fill="currentColor"
              ></path>
              <path
                d="M22.2887 21H25.7113V22.6H29.1339V25.8H22.2887L22.1347 25.8128C21.9374 25.8462 21.7589 25.9433 21.6304 26.0872C21.5019 26.231 21.4314 26.4126 21.4314 26.6C21.4314 26.7874 21.5019 26.969 21.6304 27.1128C21.7589 27.2567 21.9374 27.3538 22.1347 27.3872L22.2887 27.4H25.7113L25.9919 27.408C27.1019 27.4737 28.1409 27.9409 28.8887 28.7106C29.6364 29.4803 30.0342 30.492 29.9977 31.5313C29.9612 32.5706 29.4933 33.5557 28.6932 34.2778C27.8929 35.0001 26.8235 35.4026 25.7113 35.4V37H22.2887V35.4H18.8661V32.2H25.7113L25.8653 32.1872C26.0626 32.1538 26.2411 32.0567 26.3696 31.9128C26.4981 31.769 26.5686 31.5874 26.5686 31.4C26.5686 31.2126 26.4981 31.031 26.3696 30.8872C26.2411 30.7433 26.0626 30.6462 25.8653 30.6128L25.7113 30.6H22.2887L22.0081 30.592C20.8981 30.5263 19.8591 30.0591 19.1113 29.2894C18.3636 28.5197 17.9658 27.508 18.0023 26.4687C18.0388 25.4294 18.5067 24.4443 19.3068 23.7222C20.1071 22.9999 21.1765 22.5974 22.2887 22.6V21Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>

          <p className="stat_num">25k</p>
          <p className="stat_txt">{t("Anual gross sale in our site")}</p>
        </article>
      </section>

      <section className="about_carousel container mb-14">
        <div
          className="about_managers"
          style={{
            transform: `translateX(${
              -cardWidth * selectedBtn - 30 * selectedBtn
            }px)`,
          }}
        >
          {managers.map((manager) => {
            return (
              <article ref={cardRef} key={manager.name} className="manager">
                <picture className="manager_imgFrame">
                  <source srcSet={manager.imageSm} type="image/webp" />
                  <img
                    className="manager_img"
                    src={manager.image}
                    alt={manager.alt}
                  />
                </picture>
                <p className="name">{manager.name}</p>
                <p className="title">{t(manager.title)}</p>
                <div className="manager_links">
                  <a href="#" aria-label="X account">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_246_4760)">
                        <path
                          d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z"
                          fill="black"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_246_4760">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram account">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                  <a href="#" aria-label="Linkedin profile">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <div className="carousel_btns">
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <button
                key={index}
                className={`carousel_btn ${
                  selectedBtn == index ? "carousel_btn--selected" : ""
                }`}
                onClick={carouselBtnHandler}
                name={index}
                aria-label={index}
              >
                &nbsp;
              </button>
            ))}
        </div>
      </section>
      <Features />
    </>
  );
}
