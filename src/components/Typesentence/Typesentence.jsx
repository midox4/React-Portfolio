import { useTypewriter, Cursor } from "react-simple-typewriter";

function Typesentence() {
  const { textt } = useTypewriter({
    words: [
      "Web Developer",
      "Based On Tunisia",
      "I Builds Things",
      "For The Web",
    ],
    loop: {},
    typeSpeed: 100,
  });
  return (
    <div>
      <h2 className="">
        {textt} <Cursor />
      </h2>
    </div>
  );
}
export default Typesentence;
