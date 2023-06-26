import { useState } from "react";

const Section = ({ title, desc ,isVisible,setIsVisible,setVisibleSection}) => {
    // const [isVisible,setIsVisible]=useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold">{title}</h1>
       {!isVisible?<button className="cursor-pointer border border-black" 
       onClick={()=> setIsVisible(true)}
       >show</button>:
       <button className="cursor-pointer border border-black" 
       onClick={()=> setIsVisible(false)}
       >hide</button>} 
      {isVisible && <h2>{desc}</h2> }
    </div>      
  );
};

const InstaMart = () => {
  console.log("aljlfjasldfj");
  const [visibleSection,setVisibleSection]=useState("");
  return (
    <>
      <Section
        title={"About Instamart"}
        desc={
          "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
        }
        isVisible={visibleSection=="about"}
        
        setIsVisible={(e)=>{
          e?setVisibleSection("about"):setVisibleSection("")}
           
        }
       
      />
      <Section
        title={"Details"}
        desc={
          "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
        }
        isVisible={visibleSection=="details"}
        setIsVisible={(e)=>{
          e?setVisibleSection("details"):setVisibleSection("")}
           
        }
      />
      <Section
        title={"Careers"}
        desc={
          "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs"
        }
        isVisible={visibleSection=="careers"}
        setIsVisible={(e)=>{
          e?setVisibleSection("careers"):setVisibleSection("")}
           
        }
      />
    </>
  );
};
export default InstaMart;
