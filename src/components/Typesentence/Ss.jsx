import ReactTyped from "react-typed";
import "../container/Home/Home.scss";

const Ss = () => {
  return (
    <div>
      <h6>
        {" "}
        <ReactTyped
          strings={["Love Coding And Builds", "Things For The Web 😍 😃"]}
          typeSpeed={80}
          backSpeed={20}
          loop
        />
      </h6>
    </div>
  );
};

export default Ss;
