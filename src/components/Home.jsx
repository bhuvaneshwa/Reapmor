import { Helmet } from "react-helmet";

import Directory from "./Home/Directory";
import Hero from "./Home/Hero";
import Whyus from "./Home/Whyus";


export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero/>
      <Whyus/>
      <Directory/>

      
     
    </div>
  )
}
