import Lottie from "react-lottie";
import firstAnimation from "../../../public/lotties/first-lottie.json";
import secondAnimation from "../../../public/lotties/second-lottie.json";
import thirdAnimation from "../../../public/lotties/third-lottie.json";
import fourthAnimation from "../../../public/lotties/fourth-lottie.json";
import { UserAgent } from "@quentin-sommer/react-useragent";
import Dot from "../../../public/Dot.svg";
export default function FakeQuiz(props) {
  const defaultOptions = {
    loop: 0,
    autoplay: false,
    animationData: firstAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
      viewBoxOnly: true,
    },
  };
  const defaultOptions1 = {
    loop: 0,
    autoplay: false,
    animationData: secondAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
      viewBoxOnly: true,
    },
  };
  const defaultOptions2 = {
    loop: 0,
    autoplay: false,
    animationData: thirdAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
      viewBoxOnly: true,
    },
  };
  const defaultOptions3 = {
    loop: 0,
    autoplay: false,
    animationData: fourthAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
      viewBoxOnly: true,
    },
  };
  return (
    <>
      <UserAgent mobile tablet>
        <div className="quiz" data-scroll data-scroll-id="quiz">
          <div className="frame">
            <div className="text-block">
              <span className="medium-regular">Аналитика</span>
              <span className="small-regular with-margin">
                Анализируем бизнес-процессы, детализируем функциональные
                требования и продумываем пользовательские истории в приложении.
                Составляем техническое задание.
              </span>
              <span className="medium-regular">Вы получите:</span>
              <div className="client-get-var">
                <Dot viewBox="0 0 10 10" />
                <span className="small-regular">Техническое задание</span>
              </div>
              <div className="client-get-var">
                <Dot viewBox="0 0 10 10" />
                <span className="small-regular">
                  Проект с этапами работ и ценой
                </span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <Lottie
                  options={defaultOptions}
                  isStopped={props.isAnimated}
                  height={"75%"}
                  speed={1.5}
                />
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="text-block">
              <span className="medium-regular">Прототипирование</span>
              <span className="small-regular with-margin">
                Прорабатываем пользовательские сценарии. Описываем страницы и
                элементы. Формируем дизайн-концепцию сайта
              </span>
              <span className="medium-regular">Вы получите:</span>
              <div className="client-get-var">
                <Dot viewBox="0 0 10 10" />
                <span className="small-regular">Прототип</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <Lottie
                  options={defaultOptions1}
                  isStopped={props.isAnimated1}
                  height={"75%"}
                  speed={1.5}
                />
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="text-block">
              <span className="medium-regular">Дизайн</span>
              <span className="small-regular with-margin">
                Адаптируем ваш фирменный стиль к гайдлайнам платформ. Подбираем
                стилистику, которая соответствует задачам. Создаем концепцию и
                разрабатываем дизайн.Готовим необходимый графический материал —
                иконки, иллюстрации, фото
              </span>
              <span className="medium-regular">Вы получите:</span>
              <div className="client-get-var">
                <Dot viewBox="0 0 10 10" />
                <span className="small-regular">Дизайн сайта</span>
              </div>
              <div className="client-get-var">
                <Dot viewBox="0 0 10 10" />
                <span className="small-regular">UI-kit</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <Lottie
                  options={defaultOptions2}
                  height={"75%"}
                  isStopped={props.isAnimated2}
                  speed={1.5}
                />
              </div>
            </div>
          </div>
          <div className="frame" style={{ marginBottom: "0vw" }}>
            <div className="text-block">
              <span className="medium-regular">Разработка</span>
              <span className="small-regular with-margin">
                Пишем чистый и стабильный код. Создаём кастомные UI-компоненты,
                которые делают сайт уникальным. Используем современные подходы и
                автоматизированный процесс разработки
              </span>
              <span className="medium-regular">Вы получите:</span>
              <div className="client-get-var">
                <Dot viewBox="0 0 10 10" />
                <span className="small-regular">Готовый сайт</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <Lottie
                  options={defaultOptions3}
                  height={"75%"}
                  isStopped={props.isAnimated3}
                  speed={1.5}
                />
              </div>
            </div>
          </div>
        </div>
      </UserAgent>
      <UserAgent computer>
        <div
          className="quiz"
          data-scroll
          data-scroll-id="quiz"
          data-scroll-sticky
          data-scroll-target="#fixed-el1"
          data-scroll-offset="0%"
          data-scroll-speed="0.05"
        >
          <div className="frame">
            <div className="text-block">
              <div className="text-block-animation">
                <span className="medium-regular">Аналитика</span>
                <span className="small-regular with-margin">
                  Анализируем бизнес-процессы, детализируем функциональные
                  требования и продумываем пользовательские истории в
                  приложении. Составляем техническое задание.
                </span>
                <span className="medium-regular">Вы получите:</span>
                <div className="client-get-var">
                  <Dot viewBox="0 0 10 10" />
                  <span className="small-regular">Техническое задание</span>
                </div>
                <div className="client-get-var">
                  <Dot viewBox="0 0 10 10" />
                  <span className="small-regular">
                    Проект с этапами работ и ценой
                  </span>
                </div>
              </div>
              <div className="page-counter">
                <span>1/4</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <Lottie
                  options={defaultOptions}
                  isStopped={props.isAnimated}
                  height={"75%"}
                />
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="text-block">
              <div className="text-block-animation">
                <span className="medium-regular">Прототипирование</span>
                <span className="small-regular with-margin">
                  Прорабатываем пользовательские сценарии. Описываем страницы и
                  элементы. Формируем дизайн-концепцию сайта
                </span>
                <span className="medium-regular">Вы получите:</span>
                <div className="client-get-var">
                  <Dot viewBox="0 0 10 10" />
                  <span className="small-regular">Прототип</span>
                </div>
              </div>
              <div className="page-counter">
                <span>2/4</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <Lottie
                  options={defaultOptions1}
                  isStopped={props.isAnimated1}
                  height={"75%"}
                  speed={1.5}
                />
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="text-block">
              <div className="text-block-animation">
                <span className="medium-regular">Дизайн</span>
                <span className="small-regular with-margin">
                  Адаптируем ваш фирменный стиль к гайдлайнам платформ.
                  Подбираем стилистику, которая соответствует задачам. Создаем
                  концепцию и разрабатываем дизайн.Готовим необходимый
                  графический материал — иконки, иллюстрации, фото
                </span>
                <span className="medium-regular">Вы получите:</span>
                <div className="client-get-var">
                  <Dot viewBox="0 0 10 10" />
                  <span className="small-regular">Дизайн сайта</span>
                </div>
                <div className="client-get-var">
                  <Dot viewBox="0 0 10 10" />
                  <span className="small-regular">UI-kit</span>
                </div>
              </div>

              <div className="page-counter">
                <span>3/4</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <Lottie
                  options={defaultOptions2}
                  height={"75%"}
                  isStopped={props.isAnimated2}
                  speed={1.5}
                />
              </div>
            </div>
          </div>
          <div
            className="frame"
            style={{ marginBottom: "0vw", overflow: "hidden" }}
          >
            <div className="text-block">
              <div className="text-block-animation">
                <span className="medium-regular">Разработка</span>
                <span className="small-regular with-margin">
                  Пишем чистый и стабильный код. Создаём кастомные
                  UI-компоненты, которые делают сайт уникальным. Используем
                  современные подходы и автоматизированный процесс разработки
                </span>
                <span className="medium-regular">Вы получите:</span>
                <div className="client-get-var">
                  <Dot viewBox="0 0 10 10" />
                  <span className="small-regular">Готовый сайт</span>
                </div>
              </div>
              <div className="page-counter">
                <span>4/4</span>
              </div>
            </div>
            <div className="physics-block">
              <div className="physics-block-progress-bar">
                <div className="progress-bar-children"></div>
              </div>
              <div className="physics-block-visuals">
                <Lottie
                  options={defaultOptions3}
                  height={"75%"}
                  isStopped={props.isAnimated3}
                  speed={1.5}
                />
              </div>
            </div>
          </div>
        </div>
      </UserAgent>
    </>
  );
}
