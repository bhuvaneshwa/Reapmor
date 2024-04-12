import { Helmet } from "react-helmet";

import Hero from "./Home/Hero";
import Whyus from "./Home/Whyus";


export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Reapmor</title>
      </Helmet>
      <Hero/>
      <Whyus/>
  

      
     
    </div>
  )
}
