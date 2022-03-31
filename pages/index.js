import Head from "next/head";
import Logo from "../public/Logo.svg";
import NavButton from "../public/panel.svg";
import NavButtonClose from "../public/Mark.svg";
import HeaderArrow from "../public/header-arrow.svg";
import WhiteLogo from "../public/white-logo.svg";
import ElasticArrow from "../public/Elastic-arrow.svg";
import ElasticArrowMobile from "../public/Elastic-arrow-mobile.svg";
import FakeQuiz from "./pageComponents/fakeQuiz";
import Form from "./pageComponents/form";
import ParalaxLogo from "./pageComponents/paralaxLogo";
import ProjectsSlider from "./pageComponents/projectsSlider";
import { UserAgent } from "@quentin-sommer/react-useragent";
import { useState, useEffect } from "react";
import quizLocomotive from "./pageComponents/fakeQuiz/fakeQuizLocomotive";
import sliderLocomotive from "./pageComponents/projectsSlider/sliderLocomotive";
import animations from "./pageComponents/animations/pc";
import paralaxLocomotive from "./pageComponents/paralaxLogo/paralaxLocomotive";
import { isMobile } from "react-device-detect";

export default function Home(props) {
  // const [checkOnload, setCheckOnload] = useState(false);
  const [navBarStage, setNavBarStage] = useState("nav-top");
  const [formFullScreen, setFullScreen] = useState("gs-wrap");
  const [isAnimated, setAnimationStatus] = useState(true);
  const [isAnimated1, setAnimationStatus1] = useState(true);
  const [isAnimated2, setAnimationStatus2] = useState(true);
  const [isAnimated3, setAnimationStatus3] = useState(true);
  const [h1Animation, h1Animate] = useState("h1-not-animated");
  const [companyTextAnimation, setCompanyTextAnimation] =
    useState("about-company-text");
  const [deviceHeight, takeDeviceHeight] = useState("100vh");

  useEffect(() => {
    return (window.onload = () => {
      let paralaxMultiplier = 1;
      let allowSmoothScroll = true;
      //listeners
      const burgerHandler = () => {
        const navTop = document.querySelector(".nav-top");
        if (navTop.attributes.class.value === "nav-top") {
          navTop.classList = "nav-top burger-panel-active";
          scroll.stop();
        } else if (navTop.attributes.class.value === "nav-top black-nav") {
          navTop.classList = "nav-top black-nav burger-panel-active";
          scroll.stop();
        } else if (
          navTop.attributes.class.value === "nav-top burger-panel-active"
        ) {
          navTop.classList = "nav-top";
          scroll.start();
        } else if (
          navTop.attributes.class.value ===
          "nav-top black-nav burger-panel-active"
        ) {
          navTop.classList = "nav-top black-nav";
          scroll.start();
        }
      };
      const burgerHandlerCloseOnly = () => {
        const navTop = document.querySelector(".nav-top");
        if (navTop.attributes.class.value === "nav-top burger-panel-active") {
          navTop.classList = "nav-top";
          scroll.start();
        } else if (
          navTop.attributes.class.value ===
          "nav-top black-nav burger-panel-active"
        ) {
          navTop.classList = "nav-top black-nav";
          scroll.start();
        }
      };
      const scrollToFormListener = () => {
        //тут ошибка
        burgerHandlerCloseOnly();
        if (isMobile) {
          scroll.scrollTo("bottom", {
            offset: 0,
            duration: 0,
            easing: [0.25, 0.0, 0.35, 1.0],
            disableLerp: true,
          });
          setTimeout(() => {
            scroll.scrollTo("bottom", {
              offset: -1,
              duration: 0,
              easing: [1, 0.0, 0.0, 1.0],
              disableLerp: true,
            });
          }, 100);
          scroll.start();
        } else {
          scroll.scrollTo("bottom", {
            offset: 0,
            duration: 1,
            easing: [0.25, 0.0, 0.35, 1.0],
            disableLerp: true,
          });
          scroll.start();
        }
      };
      const scrollToLinkListener = (index) => {
        let scrollPosition = document.querySelector(".first-section");
        let scrollOffset = 0;
        if (index === 0) {
          burgerHandlerCloseOnly;
          if (isMobile) scrollOffset = 250;
        } else {
          burgerHandler();
          if (index === 1 && isMobile) {
            scrollOffset = 250;
          }
        }
        if (index === 2) {
          scrollPosition = document.querySelectorAll(".third-section")[0];
          if (isMobile) scrollOffset = 50;
          else scrollOffset = 700;
        } else if (index === 3) {
          scrollPosition = document.querySelectorAll(".third-section")[1];
          if (isMobile) scrollOffset = 50;
          else scrollOffset = 700;
        }
        if (isMobile) {
          scroll.scrollTo(scrollPosition, {
            offset: scrollOffset,
            duration: 0,
            easing: [0.25, 0.0, 0.35, 1.0],
            disableLerp: true,
          });
          setTimeout(() => {
            scroll.scrollTo(scrollPosition, {
              offset: 1,
              duration: 1,
              easing: [0.25, 0.0, 0.35, 1.0],
              disableLerp: true,
            });
          }, 100);
        } else {
          scroll.scrollTo(scrollPosition, {
            offset: scrollOffset,
            duration: 1,
            easing: [0.25, 0.0, 0.35, 1.0],
            disableLerp: true,
          });
        }
      };
      //no-scroll while not onload
      document.querySelector(".burger-panel").classList = "burger-panel";
      if (isMobile) {
        paralaxMultiplier = 0.25;
        allowSmoothScroll = false;
        takeDeviceHeight(window.innerHeight);
      }
      let scroll;
      import("locomotive-scroll").then((locomotiveModule) => {
        scroll = new locomotiveModule.default({
          el: document.querySelector("[data-scroll-container]"),
          smooth: allowSmoothScroll,
          resetNativeScroll: true,
          multiplier: 2,
          touchMultiplier: 1,
          mobile: {
            smooth: allowSmoothScroll,
            breakpoint: 0,
          },
          tablet: {
            smooth: allowSmoothScroll,
            breakpoint: 0,
          },
        });

        scroll.on("call", (call) => {
          if (call === "h1_animation") {
            const headerAnimProm = new Promise((resolve, reject) => {
              resolve(h1Animate("h1-animated"));
            });
            headerAnimProm.then((value) => {
              setTimeout(() => {
                h1Animate("h1-animated h1-animated-two");
              }, 1000);
            });
          }
          if (call === "green_form") {
            setFullScreen("gs-wrap form-full-screen");
          }
        });
        scroll.on("scroll", (args) => {
          const currEl = args.currentElements;
          //animations
          animations(
            currEl,
            setFullScreen,
            setNavBarStage,
            setCompanyTextAnimation
          );
          //paralax
          paralaxLocomotive(currEl, paralaxMultiplier);
          //fake quiz
          quizLocomotive(
            currEl,
            isMobile,
            setAnimationStatus,
            setAnimationStatus1,
            setAnimationStatus2,
            setAnimationStatus3
          );
          //slider
          sliderLocomotive(currEl, isMobile);
        });
        //start-project
        document.querySelectorAll(".start-project").forEach((el) => {
          el.addEventListener("click", scrollToFormListener);
        });
        //home stages projects
        document.querySelectorAll(".scrollToLink").forEach((el, index) => {
          el.addEventListener("click", () => scrollToLinkListener(index));
        });
        //burger handler
        document.querySelectorAll(".burger-handler").forEach((el) => {
          el.addEventListener("click", burgerHandler);
        });
        //form onblur
        document.querySelectorAll("input").forEach((el) => {
          el.addEventListener("blur", scrollToFormListener);
        });
      });
      return () => {
        scroll.destroy();
        document.querySelectorAll(".start-project").forEach((el) => {
          el.removeEventListener("click", scrollToFormListener);
        });
        document.querySelectorAll(".scrollToLink").forEach((el, index) => {
          el.removeEventListener("click", () => scrollToLinkListener(index));
        });
        document.querySelectorAll(".burger-handler").forEach((el) => {
          el.removeEventListener("click", burgerHandler);
        });
        document.querySelectorAll("input").forEach((el) => {
          el.removeEventListener("blur", scrollToFormListener);
        });
      };
    });
  }, []);
  return (
    <>
      <Head>
        <title>Компания12.7</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
        <script type="text/javascript" src="/metriks.js"></script>
      </Head>
      <div>
        <main data-scroll-container id="button-fix-pointer">
          <div className="wrapper">
            <div className="content-wrapper">
              <div>
                <div className={navBarStage}>
                  <div className="nav-left">
                    <div className="logo scrollToLink">
                      <span>компания</span>
                      <div>
                        <Logo viewBox="0 0 16 23" className="logo-img" />
                        <span>12.7</span>
                      </div>
                    </div>
                    <div className="start-project">
                      <span>Начать проект</span>
                    </div>
                  </div>
                  <div className="nav-right burger-handler">
                    <div className="nav-button">
                      <NavButton viewBox="9 0 30 30" className="panel" />
                    </div>
                  </div>
                  <div className="burger-panel loading">
                    <div className="burger-panel-overlay burger-handler"></div>
                    <div className="burger-panel-wrapper">
                      <div className="first-layer">
                        <div className="second-layer">
                          <div className="container">
                            <div className="content-top">
                              <div className="links-list">
                                <span className="scrollToLink">Домашняя</span>
                                <span className="scrollToLink">
                                  Этапы работы
                                </span>
                                <span className="scrollToLink">Проекты</span>
                              </div>
                              <div className="nav-button burger-handler">
                                <NavButtonClose
                                  viewBox="9 0 30 30"
                                  className="panel"
                                />
                              </div>
                            </div>
                            <div className="content-bottom">
                              <div className="company-name">
                                <span>Компания12.7</span>
                              </div>
                              <div className="links-blocks">
                                <div className="white-button contacts">
                                  <span>Контакты</span>
                                </div>
                                <div className="white-button start-project">
                                  <span>Начать проект</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section
                data-scroll
                data-scroll-id="firstS"
                data-scroll-section
                className="global-section"
                id="stick-panel"
                style={{ zIndex: "2" }}
                data-scroll-offset="8%"
              >
                <div className="sections">
                  <div className="container">
                    <section className="first-section">
                      <div className="o-grid">
                        <div className="grid-1-13">
                          <h1
                            data-scroll
                            data-scroll-call="h1_animation"
                            className={h1Animation}
                          >
                            <span
                              className="h1-word-lines"
                              style={{
                                zIndex: "3",
                              }}
                            >
                              <span className="h1-word-lines-wrapper">
                                <span className="h1-word-lines-item">
                                  <span className="translated-header left-translate">
                                    РАЗРАБОТАЕМ
                                  </span>
                                  <span className="translated-header right-translate">
                                    CАЙТ
                                  </span>
                                </span>
                                <span className="h1-word-lines-item-dummy">
                                  РАЗРАБОТАЕМ САЙТ
                                </span>
                                <span className="background-dark"></span>
                              </span>
                            </span>
                            <span
                              className="h1-word-lines"
                              style={{
                                zIndex: "4",
                              }}
                            >
                              <span className="h1-word-lines-wrapper">
                                <span className="h1-word-lines-item">
                                  <span className="translated-header left-translate-two">
                                    КОТОРЫЙ
                                  </span>
                                  <span className="translated-header right-translate-two">
                                    ВЫДЕЛИТ
                                  </span>
                                </span>
                                <span className="h1-word-lines-item-dummy">
                                  КОТОРЫЙ ВЫДЕЛИТ
                                </span>
                                <span className="background-dark"></span>
                              </span>
                            </span>
                            <span
                              className="h1-word-lines"
                              style={{
                                zIndex: "5",
                              }}
                            >
                              <span className="h1-word-lines-wrapper">
                                <span className="h1-word-lines-item">
                                  <span className="translated-header left-translate-three">
                                    ВАШ
                                  </span>
                                  <span className="translated-header right-translate-three">
                                    БИЗНЕС
                                  </span>
                                </span>
                                <span className="h1-word-lines-item-dummy">
                                  ВАШ БИЗНЕС
                                </span>
                                <span className="background-dark"></span>
                              </span>
                              <HeaderArrow viewBox="-45 0 150 80" />
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div className="about-profit-text">
                        <div className="text-side-left">
                          <span>ПЕРВЫЙ РЕЗУЛЬТАТ ЧЕРЕЗ НЕДЕЛЮ</span>
                        </div>
                        <div className="text-side-right">
                          <span>ПРИСТУПАЕМ К РАБОТЕ ЧЕРЕЗ 3 ДНЯ</span>
                          <WhiteLogo viewBox="0 0 50 50" />
                        </div>
                      </div>
                    </section>
                    <section className="second-section" data-scroll>
                      <div className="paralax-container">
                        <ParalaxLogo />
                      </div>
                      <div
                        className={companyTextAnimation}
                        data-scroll
                        data-scroll-id="company_text_animation"
                      >
                        <UserAgent mobile>
                          <div className="text-container">
                            <div
                              className="text-animation-background"
                              style={{
                                zIndex: "2",
                              }}
                            >
                              <span className="first-animation">
                                Компания 12.7 это команда
                              </span>
                            </div>
                            <div
                              className="text-animation-background"
                              style={{
                                zIndex: "3",
                              }}
                            >
                              <span className="second-animation">
                                специалистов из разных областей
                              </span>
                            </div>
                            <div
                              className="text-animation-background"
                              style={{
                                zIndex: "4",
                              }}
                            >
                              <span
                                className="third-animation"
                                style={{
                                  color: "#D63030",
                                }}
                              >
                                Узнайте этапы разработки
                              </span>
                            </div>
                            <div
                              className="text-animation-background"
                              style={{
                                zIndex: "5",
                              }}
                            >
                              <span
                                style={{
                                  opacity: "0",
                                }}
                              >
                                dummy
                              </span>
                            </div>
                          </div>
                        </UserAgent>
                        <UserAgent computer tablet>
                          <div className="text-container">
                            <div
                              className="text-animation-background"
                              style={{ zIndex: "2" }}
                            >
                              <span className="first-animation">
                                Компания 12.7 это команда специалистов
                              </span>
                            </div>
                            <div
                              className="text-animation-background"
                              style={{ zIndex: "3" }}
                            >
                              <span className="second-animation">
                                из разных областей
                              </span>
                            </div>
                            <div
                              className="text-animation-background"
                              style={{ zIndex: "4" }}
                            >
                              <span
                                className="third-animation"
                                style={{
                                  color: "#D63030",
                                }}
                              >
                                Узнайте этапы разработки
                              </span>
                            </div>
                            <div
                              className="text-animation-background"
                              style={{ zIndex: "5" }}
                            >
                              <span
                                style={{
                                  opacity: "0",
                                }}
                              >
                                dummy
                              </span>
                            </div>
                          </div>
                        </UserAgent>
                        <div
                          className="elastic-arrow-container"
                          style={{ zIndex: "6" }}
                        >
                          <UserAgent mobile>
                            <ElasticArrowMobile viewBox="0 0 90 90" />
                          </UserAgent>
                          <UserAgent computer tablet>
                            <ElasticArrow viewBox="60 0 100 100" />
                          </UserAgent>
                          <div className="elastic-arrow-mask"></div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="third-section"
                      style={{ zIndex: "2" }}
                      id="fixed-el1"
                    >
                      <FakeQuiz
                        isAnimated={isAnimated}
                        isAnimated1={isAnimated1}
                        isAnimated2={isAnimated2}
                        isAnimated3={isAnimated3}
                      />
                    </section>
                  </div>
                </div>
                <div className="nav-right"></div>
              </section>
              <section
                data-scroll-section
                className="global-section"
                data-scroll
                data-scroll-id="second"
                id="second-stick-panel"
                data-scroll-offset="92%"
              >
                <div className={formFullScreen}>
                  <div
                    className="sections"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <section className="second-section number-two">
                      <div
                        className="paralax-container second-variant"
                        data-scroll
                        data-scroll-speed="-3.5"
                      >
                        <ParalaxLogo logoType={"static"} />
                        <div className="container">
                          <div className="projects-text">
                            <span>
                              ПОСМОТРИТЕ НА <br /> НАШИ{" "}
                              <span
                                style={{
                                  color: "#1A7A3C",
                                }}
                              >
                                ПРОЕКТЫ
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="container">
                      <section
                        className="third-section slider-wrapper"
                        id="fixed-el2"
                      >
                        <ProjectsSlider />
                      </section>
                    </div>
                    <div
                      className="contact-form-wrapper"
                      data-scroll
                      data-scroll-offset="86%"
                      data-scroll-id="green_form"
                      data-scroll-call="green_form"
                      style={{ minHeight: deviceHeight }}
                    >
                      <div
                        className="contact-form"
                        style={{ minHeight: deviceHeight }}
                      >
                        <div className="contact-container">
                          <div className="form-text">
                            <span>Начнем</span>
                            <span>проект?</span>
                          </div>
                          <div className="form-input-wrapper">
                            <Form />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-right white"></div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
