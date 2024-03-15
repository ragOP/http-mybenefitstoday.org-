import React, { useState, useEffect } from "react";
//@ts-ignore
import TagManager from "react-gtm-module";
import axios from "axios";
import "./styles.scss";
import Carousel from "./Carousel";

import { scrollTo } from "../utils";

import Head_bgs from "../assets/aa.png";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Headline from "../assets/headline_spandeb1.png";
import { Id } from "react-toastify";

// google tag manager

const tagManagerArgs = {
  gtmId: "GTM-KZJBC3B",
};

TagManager.initialize(tagManagerArgs);

export default function Fifth_SP() {
  useEffect(() => {
    window.document.title = "Benefits Programs America";

    axios
      .get(process.env.REACT_APP_PROXY + `/visits/8`)
      .then(({ data }) => {
        if (data.length === 0) {
          const visits = {
            visits: 1,
            views: 0,
            calls: 0,
            positives: 0,
            negatives: 0,
          };

          axios
            .post(
              process.env.REACT_APP_PROXY + `/visits/create-visits8`,
              visits
            )
            .catch((err) => console.log(err));
        } else {
          const _id = data[0]._id;
          const _visits = data[0].visits;
          const _views = data[0].views;
          const _calls = data[0].calls;
          const _positives = data[0].positives;
          const _negatives = data[0].negatives;

          const visits = {
            visits: _visits + 1,
            views: _views,
            calls: _calls,
            positives: _positives,
            negatives: _negatives,
          };
          axios
            .put(
              process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
              visits
            )
            .catch((err) => console.log(err));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCall = () => {
    axios.get(process.env.REACT_APP_PROXY + `/visits/8`).then(({ data }) => {
      const _id = data[0]._id;
      const _visits = data[0].visits;
      const _views = data[0].views;
      const _calls = data[0].calls;
      const _positives = data[0].positives;
      const _negatives = data[0].negatives;
      const visits = {
        visits: _visits,
        views: _views,
        calls: _calls + 1,
        positives: _positives,
        negatives: _negatives,
      };
      axios
        .put(
          process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
          visits
        )
        .catch((err) => console.log(err));
    });
  };

  const [quiz, setQuiz] = useState("1. Are you under 65 years old?");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [eligible, setEligible] = useState(true);
  const [second, setSecond] = useState<any>(0);
  const [showPopup, setShowPopup] = useState(false);
  const [toastId, setToastId] = useState<Id | null>(null);

  const SlideUp = cssTransition({
    enter: "toast-enter",
    exit: "toast-exit",
  });
  const messages = [
    "Velia E. Dunn from Salem, OR just qualified for $16,800 Allowance Card",
    "Paul N. Parsons from Petersburg, VA just qualified for $16,800 Allowance Card.",
    "Paul N. Parsons from New Town, ND just qualified for $16,800 Allowance Card.",
    "Mary T. Pritts from Oakland, CA just qualified for $16,800 Allowance Card.",
  ];
  //   const messages = x.map(message =>  `${message}\n32 sec ago`);
  const notify = (message: any) => {
    // Dismiss all existing toasts
    toast.dismiss();
    let boldedMessage = message;

    // Make the word "Allowance" bold in all lines
    boldedMessage = boldedMessage.replace(
      /Allowance/g,
      '<strong class="green-bold">Allowance</strong>'
    );
    boldedMessage = boldedMessage.replace(
      /Card/g,
      '<strong class="green-bold">Card</strong>'
    );

    // Make specific dollar amounts bold only in specific lines
    const specialAmounts = ["$16,800", "$16,800", "$16,800", "$16,800"];
    specialAmounts.forEach((amount) => {
      if (message.includes(amount)) {
        boldedMessage = boldedMessage.replace(
          amount,
          `<strong class="green-bold">${amount}</strong>`
        );
      }
    });
    // Show new toast
    toast(<div dangerouslySetInnerHTML={{ __html: boldedMessage }} />, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      closeButton: false,
    });
  };
  useEffect(() => {
    const delayedEffect = setTimeout(() => {
      // Create a function to handle the logic
      const showRandomToast = () => {
        const randomTime = 6000;
        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];
        notify(randomMessage);
        return randomTime;
      };

      // Show the first toast
      let nextTime = showRandomToast();

      // Set up a recurring timer
      const timer = setInterval(() => {
        nextTime = showRandomToast();
      }, nextTime);

      // Cleanup
      return () => {
        clearInterval(timer);
      };
    }, 6000); // 6-second delay before the useEffect code runs

    // Cleanup for the setTimeout
    return () => {
      clearTimeout(delayedEffect);
    };
  }, []);

  const stepProcess = () => {
    if (step === "Reviewing Your Answers...") {
      setTimeout(() => {
        setStep("Matching With Best Options...");
      }, 1500);
    }
    if (step === "Matching With Best Options...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
      setTimeout(() => {
        setStep("completed");

        axios
          .get(process.env.REACT_APP_PROXY + `/visits/8`)
          .then(({ data }) => {
            const _id = data[0]._id;
            const _visits = data[0].visits;
            const _views = data[0].views;
            const _calls = data[0].calls;
            const _positives = data[0].positives;
            const _negatives = data[0].negatives;
            const visits = {
              visits: _visits,
              views: _views + 1,
              calls: _calls,
              positives: _positives,
              negatives: _negatives,
            };
            axios
              .put(
                process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
                visits
              )
              .catch((err) => console.log(err));
          });
      }, 1500);
    }

    if (step === "completed") {
      const startTime: any = new Date();
      const timer = setInterval(() => {
        const nowTime: any = new Date();
        setSecond((180 - Math.round((nowTime - startTime) / 1000)) % 60);
        setMin(
          Math.floor((180 - Math.round((nowTime - startTime) / 1000)) / 60)
        );
      }, 1000);
    }
  };

  useEffect(() => {
    stepProcess();
  }, [step]);

  const topScroll = (id: any) => {
    scrollTo({ id });
  };

  const handleQuizP = () => {
    topScroll("btn");
    if (quiz === "1. Are you under 65 years old?") {
      setQuiz("2. Are you on Medicare or Medicaid?");
    } else if (quiz === "2. Are you on Medicare or Medicaid?") {
       setStep("Reviewing Your Answers...");
      setEligible(true); // Show alert when the second question is answered with 'Yes'

      topScroll("top");
    }

    axios.get(process.env.REACT_APP_PROXY + `/visits/8`).then(({ data }) => {
      const _id = data[0]._id;
      const _visits = data[0].visits;
      const _views = data[0].views;
      const _calls = data[0].calls;
      const _positives = data[0].positives;
      const _negatives = data[0].negatives;
      const visits = {
        visits: _visits,
        views: _views,
        calls: _calls,
        positives: _positives + 1,
        negatives: _negatives,
      };
      axios
        .put(
          process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
          visits
        )
        .catch((err) => console.log(err));
    });
  };

  const handleQuizN = () => {
    topScroll("btn");
    if (quiz === "1. Are you under 65 years old?") {
      setQuiz("2. Are you on Medicare or Medicaid?");
    } else {
      setStep("Reviewing Your Answers...");
      topScroll("top");
    }

    axios.get(process.env.REACT_APP_PROXY + `/visits/8`).then(({ data }) => {
      const _id = data[0]._id;
      const _visits = data[0].visits;
      const _views = data[0].views;
      const _calls = data[0].calls;
      const _positives = data[0].positives;
      const _negatives = data[0].negatives;
      const visits = {
        visits: _visits,
        views: _views,
        calls: _calls,
        positives: _positives,
        negatives: _negatives + 1,
      };
      axios
        .put(
          process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
          visits
        )
        .catch((err) => console.log(err));
    });
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <ToastContainer />
      <div className="top-sticky-blue" id="top">
        Benefits Programs America
      </div>
      {step === "process" ? (
        <>
          <div className="main-container-5">
            <div className="main-descrition-5">
              <div className="main-des-title-6-test">
                {/* <div className='main-des-title-6'><b>Finalmente, los deudores están obteniendo hasta un<span style={{backgroundColor:"#fde047"}}> 100% de perdón financiero</span> bajo este programa respaldado por abogados, ¡Aquí está cómo!</b></div> */}
                <b>
                  Americans under 65 can now qualify for{" "}
                  <span style={{ backgroundColor: "#fde047" }}>
                    The $6400 Health Credits Subsidy in 2024.
                  </span>{" "}
                  Here's how!
                </b>
              </div>
              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle" src={Head_bgs} alt="head" />
              <div className="main-des-5">
                Americans under 65 years old can claim the 2024 Health Credits
                Subsidy that gives them up to $6400. Americans can use the funds
                to fully cover the cost of their monthly expenses such as
                Groceries, Rent, Bills and any other expenses they may have!
              </div>
              <div className="main-des-5" style={{ marginTop: "1rem" }}>
                If you have not yet claimed your monthly allowance then answer
                the questions below and once approved{" "}
                <b>
                  you will have your $6,400 Health Credits mailed to you within
                  a few days ready for use!
                </b>
              </div>
              {/* <div className='main-des-5' style = {{marginTop:"1rem"}}><b>Simplemente responda las siguientes preguntas:</b></div> */}
            </div>
            <div className="survey">
              <div className="quiz-5" id="btn">
                {quiz}
              </div>
              <div className="answer">
                <div className="answer-btn-5-test" onClick={handleQuizP}>
                  Yes
                </div>
                <div className="answer-btn-5-test" onClick={handleQuizN}>
                  No
                </div>
              </div>
            </div>
          </div>
        </>
      ) : step !== "process" && step !== "completed" ? (
        <div className="checking" style={{ fontWeight: "700" }}>
          {step}
        </div>
      ) : (
        <div>
          {eligible ? (
            <div className="checking">
              <div className="congrats">Congratulation, You Qualify!</div>
              <div className="top-description-5">
                Make A <b>Quick Call</b> Activate Your <b>$16,800 Subsidy</b>{" "}
                before someone else does!
              </div>
              <div className="spots-count">Spots remaining: 4</div>
              <div className="tap-direction">👇 TAP BELOW TO CALL 👇</div>
              <a href="tel:18885170494">
                <div className="call-btn glow-effect" onClick={handleCall}>
                  CALL (888) 517-0494
                </div>
              </a>
              <div className="sub-title">We Have Reserved Your Spot</div>
              <div className="sub-description">
                Due to high call volume, your official agent is waiting for only{" "}
                <b>3 minutes</b>, then your spot will not be reserved.
              </div>
              <div className="timer">
                <div className="timer-cell">{min}</div>
                <div className="timer-cell">:</div>
                <div className="timer-cell">{second}</div>
              </div>
            </div>
          ) : (
            <div className="checking">
              Sorry, You're not eligible for the $16,800 Health Credits Subsidy!
            </div>
          )}

        </div>
      )}
     
     {/* <div  className="powr-image-carousel" id="7bc9faac_1698800330"></div> */}
      {/* <Carousel /> */}
      <div className="footer">
        
        <div className="terms">Terms & Conditions | Privacy Policy</div>
        <div className="copyright">
          Copyright © 2024 - All right reserved Daily America Savings.
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
