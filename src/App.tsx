import "./App.css";
import "./components/ui/button/styles.css";
import "./components/blocks/author-info/styles.css";
import "./components/blocks/logo-list/styles.css";
import { Button } from "./components/ui/button/Button";
import { AuthorInfo } from "./components/blocks/author-info/AuthorInfo";
import { LogoList } from "./components/blocks/logo-list/LogoList";
import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrease = () => setCount(count => count + 1);
  const handleReset = () => setCount(0);
  const handleDecrease = () => setCount(count => count - 1);

  const logosData = [
    {
      id: "1",
      href: "https://vite.dev",
      selectorImage: "logo__image logo__image--vite",
      path: "./images/svg/48/vite.svg",
      altText: "Vite logo",
    },
    {
      id: "2",
      href: "https://react.dev",
      selectorImage: "logo__image logo__image--react",
      path: "./images/svg/48/react.svg",
      altText: "React logo",
    },
    {
      id: "3",
      href: "https://www.typescriptlang.org/",
      selectorImage: "logo__image logo__image--typescript",
      path: "./images/svg/48/typescript.svg",
      altText: "TypeScript logo",
    }
  ];

  return (
    <>
      <div className="layout">
        <main className="layout__body">
          <div className="counter">
            <h1 className="counter__title">Simple Counter</h1>
            <span className="counter__result">{count}</span>
            <div className="buttons">
              <Button
                onClick={handleDecrease}
                title="Decrease"
                selector="buttons__item buttons__item--decrease"
                ariaLabel="Increase value"
              />
              <Button
                onClick={handleReset}
                title="Reset"
                selector="buttons__item buttons__item--reset"
                ariaLabel="Reset counter"
              />
              <Button
                onClick={handleIncrease}
                title="Increase"
                selector="buttons__item buttons__item--increase"
                ariaLabel="Decrease value"
              />
            </div>
          </div>
        </main>
        <div className="layout__footer">
          <AuthorInfo
            projectDescription="Project: Counter on ReactJS"
            authorName="Author: Holovizin Roman"
          />
          <LogoList logos={logosData} />
        </div>
      </div>
    </>
  );
}
