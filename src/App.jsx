import Cards from "./assets/components/Cards";
import Centered from "./assets/components/Centered";
import CourseOffers from "./assets/components/CourseOffers";
import Footer from "./assets/components/Footer";
import Internship from "./assets/components/Internship";
import Navbar from "./assets/components/Navbar";
import PreFooter from "./assets/components/PreFooter";
import SupportIcon from "./assets/components/SupportIcon";
import Top from "./assets/components/Top";
import "./index.css"

export default function App() {
  return (
    <>
    <div className="landing">
        <Top/>
        <Navbar/>
        <Centered/>
        <SupportIcon/>
    </div>
      <Cards/>
      <CourseOffers/>
      <Internship/>
      <PreFooter/>
      <Footer/>
    </>
  )
}