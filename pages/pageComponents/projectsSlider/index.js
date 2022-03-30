import { UserAgent } from "@quentin-sommer/react-useragent";
export default function ProjectsSlider() {
  return (
    <>
      <UserAgent computer>
        <div
          className="quiz slider"
          data-scroll
          data-scroll-id="slider"
          data-scroll-sticky
          data-scroll-target="#fixed-el2"
          data-scroll-offset="0%"
          data-scroll-speed="0.05"
        >
          <div className="frame">
            <div className="text-block">
              <div className="text-block-animation">
                <span className="medium-regular">Baby Doge</span>
                <span className="small-regular">
                  Лендинг для криптовалюты Baby Doge
                </span>
              </div>
              <div className="page-counter">
                <span>1/3</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <video
                  muted
                  loop
                  src={"/first.mp4"}
                  type="video/mp4"
                  style={{ opacity: "1" }}
                ></video>
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="text-block">
              <div className="text-block-animation">
                <span className="medium-regular">Farm Buy</span>
                <span className="small-regular">
                  Лендиг по продаже сельской недвижимости в Австралии
                </span>
              </div>
              <div className="page-counter">
                <span>2/3</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <video muted loop src={"/second.mp4"} type="video/mp4"></video>
              </div>
            </div>
          </div>
          <div
            className="frame"
            style={{ marginBottom: "0vw", overflow: "hidden" }}
          >
            <div className="text-block">
              <div className="text-block-animation">
                <span className="medium-regular">Nvideos</span>
                <span className="small-regular">
                  Лендинг для компании по производству видео
                </span>
              </div>
              <div className="page-counter">
                <span>3/3</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <video muted loop src={"/third.mp4"} type="video/mp4"></video>
              </div>
            </div>
          </div>
        </div>
      </UserAgent>
      <UserAgent mobile tablet>
        <div className="quiz slider" data-scroll data-scroll-id="slider">
          <div className="frame">
            <div className="text-block">
              <span className="medium-regular">Baby Doge</span>
              <span className="small-regular">
                Лендинг для криптовалюты Baby Doge
              </span>
              <div className="text-block-progress-bar ">
                <div className="progress-bar-children"></div>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-visuals">
                <video
                  muted
                  loop
                  src={"/first.mp4"}
                  type="video/mp4"
                  style={{ opacity: "1" }}
                ></video>
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="text-block">
              <span className="medium-regular">Farm Buy</span>
              <span className="small-regular">
                Лендиг по продаже сельской недвижимости в Австралии
              </span>
              <div className="text-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-visuals">
                <video muted loop src={"/second.mp4"} type="video/mp4"></video>
              </div>
            </div>
          </div>
          <div
            className="frame"
            style={{ marginBottom: "0vw", overflow: "hidden" }}
          >
            <div className="text-block">
              <span className="medium-regular">Nvideos</span>
              <span className="small-regular">
                Лендинг для компании по производству видео
              </span>
              <div className="text-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-visuals">
                <video muted loop src={"/third.mp4"} type="video/mp4"></video>
              </div>
            </div>
          </div>
        </div>
      </UserAgent>
    </>
  );
}
