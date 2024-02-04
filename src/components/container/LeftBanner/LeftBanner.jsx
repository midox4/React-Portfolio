import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Web Developer.", "UI Designer.","Highly Interested","In Technology."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div>
        <h2 className="text-4xl font-bold text-white">
         <span className="font-small title-font mt-5 text-sky-600 text-2xl font-primary "> Hi, I'm Hafsi Ahmed</span>
        </h2>
        <h2 className="text-2xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#2FA2B1" />
        </h2>

    </div>

  );
};

export default LeftBanner;