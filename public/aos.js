import Aos from "aos";
import "aos/dist/aos.css";

function aos() {
  Aos.init({ duration: 2000, offset: 200, once: true });
}

export default aos;
