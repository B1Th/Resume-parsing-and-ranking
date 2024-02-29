import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ScreenResume = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", textAreaValue);
  };

  return (
    <>
      <div className="screen">
        <div className="screen_container">
          <div className="screen_container_content" data-aos="fade-left">
            <h1>Screen Your Resume</h1>
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder="Enter The Job Description For Your Role"
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
              />

              <div className="submit">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenResume;
