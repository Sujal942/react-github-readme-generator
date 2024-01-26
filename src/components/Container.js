import React, { useState } from "react";

const Container = () => {
  const [name, setName] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [banner, setbanner] = useState("");
  const [desc, setdesc] = useState("");
  const [college, setcollege] = useState("");
  const [skills, setskills] = useState("");
  const [doing1, setdoing1] = useState("");
  const [doing2, setdoing2] = useState("");
  const [doing3, setdoing3] = useState("");
  const [doing4, setdoing4] = useState("");
  const [doing5, setdoing5] = useState("");
  const [doing6, setdoing6] = useState("");
  const [social1, setsocial1] = useState("");
  const [social2, setsocial2] = useState("");
  const [social3, setsocial3] = useState("");
  const [social4, setsocial4] = useState("");
  const [social5, setsocial5] = useState("");
  const [social6, setsocial6] = useState("");
  const [visitGithub, setvisitGithub] = useState("");

  return (
    <div>
      <div className="main flex flex-row mt-5 justify-center gap-5 ">
        <div className="left w-[40%] space-y-6">
          <div className="container1 pb-3 space-y-3 rounded-lg overflow-hidden bg-slate-50 ">
            <h1 className="text-3xl p-3 bg-slate-700 text-blue-400 font-medium">
              Heading Part
            </h1>
            <div className="left-container-center flex flex-col items-center space-y-3">
              <div className="input space-y-2">
                <span>Name</span>
                <br />
                <input
                  placeholder="Enter your Name"
                  type="text"
                  name=""
                  id=""
                  value={name}
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-96 h-12"
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
              </div>
              <div className="input space-y-2">
                <span>Subtitle</span>
                <br />
                <input
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                  placeholder="Enthusiastic Learner 📖 | Web Developer 💻"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-96 h-12"
                />
                <br />
              </div>
              <div className="input space-y-2">
                <span>Banner</span>
                <br />
                <input
                  value={banner}
                  onChange={(e) => setbanner(e.target.value)}
                  placeholder="https://raw.githubusercontent.com/halfrost/halfrost/master/icons/header_.png"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-96 h-12"
                />
                <br />
              </div>
              <div className="input space-y-2">
                <span className="">Description</span>
                <br />
                <textarea
                  value={desc}
                  onChange={(e) => setdesc(e.target.value)}
                  placeholder="Enter your Description"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="p-2 bg-transparent border-double border-4 border-gray-500 rounded-md w-96 h-36"
                ></textarea>
              </div>
              <div className="input space-y-2">
                <span>College</span>
                <br />
                <input
                  value={college}
                  onChange={(e) => setcollege(e.target.value)}
                  placeholder="Gyan Ganga Institute of Technology and Sciences"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-96 h-12"
                />
                <br />
              </div>
              <div className="input space-y-2">
                <span>Skills</span>
                <br />
                <input
                  value={skills}
                  onChange={(e) => setskills(e.target.value)}
                  placeholder="HTML, CSS, JS, C++, React ,Firebase, C"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-96 h-12"
                />
                <br />
              </div>
            </div>
          </div>
          <div className="container2 pb-3 space-y-3 rounded-lg overflow-hidden bg-slate-50 ">
            <h1 className="text-3xl p-3 bg-slate-700 text-blue-400 font-medium">
              What Are You Doing Now?
            </h1>
            <div className="container2-division flex justify-center">
              <div className="container2-left ">
                <div className="input2 m-5 space-y-2">
                  <span>🚧 I’m currently working on...</span>
                  <br />
                  <input
                    value={doing1}
                    onChange={(e) => setdoing1(e.target.value)}
                    placeholder="your Answer Here"
                    type="text"
                    name=""
                    id=""
                    className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-60 h-12"
                  />
                </div>
                <div className="input2 m-5 space-y-2">
                  <span>📑 I'm Currently Learning...</span>
                  <br />
                  <input
                    value={doing2}
                    onChange={(e) => setdoing2(e.target.value)}
                    placeholder="your Answer Here"
                    type="text"
                    name=""
                    id=""
                    className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-60 h-12"
                  />
                </div>
                <div className="input2 m-5 space-y-2">
                  <span>🏅 My Favourite Hobby...</span>
                  <br />
                  <input
                    value={doing3}
                    onChange={(e) => setdoing3(e.target.value)}
                    placeholder="your Answer Here"
                    type="text"
                    name=""
                    id=""
                    className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-60 h-12"
                  />
                </div>
              </div>
              <div className="container2-right ">
                <div className="input2 m-5 space-y-2">
                  <span>🗡️ Look At My this Project...</span>
                  <br />
                  <input
                    value={doing4}
                    onChange={(e) => setdoing4(e.target.value)}
                    placeholder="your Answer Here"
                    type="text"
                    name=""
                    id=""
                    className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-60 h-12"
                  />
                </div>
                <div className="input2 m-5 space-y-2">
                  <span>🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website...</span>
                  <br />
                  <input
                    value={doing5}
                    onChange={(e) => setdoing5(e.target.value)}
                    placeholder="your Answer Here"
                    type="text"
                    name=""
                    id=""
                    className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-60 h-12"
                  />
                </div>
                <div className="input2 m-5 space-y-2">
                  <span>📣 Ask Me About...</span>
                  <br />
                  <input
                    value={doing6}
                    onChange={(e) => setdoing6(e.target.value)}
                    placeholder="your Answer Here"
                    type="text"
                    name=""
                    id=""
                    className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-60 h-12"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container3 pb-3 space-y-3 rounded-lg overflow-hidden bg-slate-50">
            <h1 className="text-3xl p-3 bg-slate-700 text-blue-400 font-medium">
              Connect With Me
            </h1>
            <div className="contact space-y-4 flex flex-col items-center">
              <div className="input3 flex items-center gap-5">
                <span className="details">
                  {" "}
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codechef.svg"
                    alt=""
                    style={{ width: "2rem" }}
                  />{" "}
                </span>
                <input
                  value={social1}
                  onChange={(e) => setsocial1(e.target.value)}
                  placeholder="Your Answer Here"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-80 h-12"
                />
              </div>
              <div className="input3 flex items-center gap-5">
                <span className="details">
                  {" "}
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
                    alt=""
                    style={{ width: "2rem" }}
                  />{" "}
                </span>
                <input
                  value={social2}
                  onChange={(e) => setsocial2(e.target.value)}
                  placeholder="Your Answer Here"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-80 h-12"
                />
              </div>
              <div className="input3 flex items-center gap-5">
                <span className="details">
                  {" "}
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                    alt=""
                    style={{ width: "2rem" }}
                  />{" "}
                </span>
                <input
                  value={social3}
                  onChange={(e) => setsocial3(e.target.value)}
                  placeholder="Your Answer Here"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-80 h-12"
                />
              </div>
              <div className="input3 flex items-center gap-5">
                <span className="details">
                  {" "}
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                    alt=""
                    style={{ width: "2rem" }}
                  />{" "}
                </span>
                <input
                  value={social4}
                  onChange={(e) => setsocial4(e.target.value)}
                  placeholder="Your Answer Here"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-80 h-12"
                />
              </div>
              <div className="input3 flex items-center gap-5">
                <span className="details">
                  {" "}
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg"
                    alt=""
                    style={{ width: "2rem" }}
                  />{" "}
                </span>
                <input
                  value={social5}
                  onChange={(e) => setsocial5(e.target.value)}
                  placeholder="Your Answer Here"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-80 h-12"
                />
              </div>
              <div className="input3 flex items-center gap-5">
                <span className="details">
                  {" "}
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg"
                    alt=""
                    style={{ width: "2rem" }}
                  />{" "}
                </span>
                <input
                  value={social6}
                  onChange={(e) => setsocial6(e.target.value)}
                  placeholder="Your Answer Here"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-80 h-12"
                />
              </div>
            </div>
          </div>
          <div className="container4 space-y-3 rounded-lg bg-slate-50 overflow-hidden ">
            <h1 className="text-3xl p-3 bg-slate-700 text-blue-400 font-medium">
              Add on Features
            </h1>
            <div className="con4-center flex flex-col p-3 space-y-3 items-center">
              {" "}
              <div className="input4 flex items-center gap-5">
                <span className="details">
                  {" "}
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                    alt=""
                    style={{ width: "2rem" }}
                  />{" "}
                </span>
                <input
                  value={visitGithub}
                  onChange={(e) => setvisitGithub(e.target.value)}
                  placeholder="Your Answer Here"
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent p-2 border-double border-4 border-gray-500 rounded-md w-80 h-12"
                />
              </div>
              {/* <div className="checkbox-section text-2xl">
                <label htmlFor="pr-views">Add Profile Views </label>
                <input type="checkbox" id="pr-views" />
                <br />
                <br />
                <label htmlFor="trophy">Add Trophies Section </label>
                <input type="checkbox" id="trophy" />
                <br />
                <br />
                <label htmlFor="streak">Add Streaks Section </label>
                <input type="checkbox" id="streak" />
                <br />
                <br />
                <label htmlFor="languse">Add Top Language Usage </label>
                <input type="checkbox" id="languse" />
                <br />
                <br />
                <label htmlFor="readmestate">Add Readme State </label>
                <input type="checkbox" id="readmestate" />
                <br />
                <br />
              </div> */}
            </div>
          </div>
        </div>
        <div className="right w-[52%] space-y-3">
          <h1 className="text-6xl font-bold bg-slate-700 text-blue-400 py-3 px-5 rounded-lg">
            Preview
          </h1>
          <div className="preview py-3 rounded-lg bg-slate-50 border">
            <div className="con1 text-center m-10 space-y-4">
              <h1 className="text-4xl font-medium">
                Hello There 🤙, Myself {name === "" ? "Sujal Jain" : name}
              </h1>
              <h2 className="text-2xl">
                {subTitle === ""
                  ? "Enthusiastic Learner 📖 | Web Developer 💻"
                  : subTitle}
              </h2>
              <img
                src={
                  banner === ""
                    ? "https://raw.githubusercontent.com/halfrost/halfrost/master/icons/header_.png"
                    : banner
                }
                alt=""
              />
              <p>
                {desc === ""
                  ? "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam molestiae, necessitatibus mollitia suscipit aperiam quod debitis vitae commodi aliquam accusamus ad, odit facilis natus. Delectus repellendus iste nulla fugit possimus"
                  : desc}
              </p>
              <h2 className="text-left text-xl font-semibold">
                Skills :
                {skills === ""
                  ? " HTML, CSS, JS, C++, React ,Firebase, C"
                  : skills}
              </h2>
              <h2 className="text-left text-xl font-semibold">
                {college === ""
                  ? "Gyan Ganga Institute of Technology and Sciences"
                  : college}
              </h2>
            </div>
            <div className="con2 m-10 space-y-4">
              <h1 className="text-3xl font-semibold">
                {doing1 === "" &&
                doing2 === "" &&
                doing3 === "" &&
                doing4 === "" &&
                doing5 === "" &&
                doing6 === ""
                  ? ""
                  : "Connect Me In"}
              </h1>
              <h1 className="text-2xl font-semibold">
                {doing1 === "" ? "" : "🚧 I’m currently working on " + doing1}
              </h1>
              <h1 className="text-2xl font-semibold">
                {doing2 === "" ? "" : "📑 I'm Currently Learning " + doing2}
              </h1>
              <h1 className="text-2xl font-semibold">
                {doing3 === "" ? "" : "🏅 My Favourite Hobby " + doing3}
              </h1>
              <h1 className="text-2xl font-semibold">
                {doing4 === "" ? "" : "🗡️ Look At My this Project " + doing4}
              </h1>
              <h1 className="text-2xl font-semibold">
                {doing5 === "" ? "" : "🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website " + doing5}
              </h1>
              <h1 className="text-2xl font-semibold">
                {doing6 === "" ? "" : "📣 Ask Me About " + doing6}
              </h1>
            </div>
            <div className="con3 m-10 space-y-4">
              <h1 className="text-3xl font-semibold space-y-4">
                {social1 === "" &&
                social2 === "" &&
                social3 === "" &&
                social4 === "" &&
                social5 === "" &&
                social6 === ""
                  ? ""
                  : "Connect Me In"}
              </h1>
              <div className="social-logo flex flex gap-5">
                {social1 === "" ? (
                  ""
                ) : (
                  <a href="#">
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codechef.svg"
                      alt="Codechef"
                      style={{ width: "2rem", marginRight: "1rem" }}
                    />{" "}
                  </a>
                )}

                {social2 === "" ? (
                  ""
                ) : (
                  <a href="#">
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
                      alt="Facebook"
                      style={{ width: "2rem", marginRight: "1rem" }}
                    />{" "}
                  </a>
                )}
                {social3 === "" ? (
                  ""
                ) : (
                  <a href="#">
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                      alt="Instagram"
                      style={{ width: "2rem", marginRight: "1rem" }}
                    />{" "}
                  </a>
                )}
                {social4 === "" ? (
                  ""
                ) : (
                  <a href="#">
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                      alt="Linkedin"
                      style={{ width: "2rem", marginRight: "1rem" }}
                    />{" "}
                  </a>
                )}
                {social5 === "" ? (
                  ""
                ) : (
                  <a href="#">
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg"
                      alt="Youtube"
                      style={{ width: "2rem", marginRight: "1rem" }}
                    />{" "}
                  </a>
                )}
                {social6 === "" ? (
                  ""
                ) : (
                  <a href="#">
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg"
                      alt="Reddit"
                      style={{ width: "2rem", marginRight: "1rem" }}
                    />{" "}
                  </a>
                )}
              </div>
            </div>
            <div className="con4 m-10 space-y-4">
              <div className="con1">
                <h1 className="text-3xl mb-3 font-semibold space-y-4">
                  {visitGithub === "" ? "" : "Visti Github Profile"}
                </h1>
                {visitGithub === "" ? (
                  ""
                ) : (
                  <a href="#">
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                      alt="Codechef"
                      style={{ width: "2rem", marginRight: "1rem" }}
                    />{" "}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer flex text-left flex-col items-center  bg-slate-700 mt-8 mr-28 ml-28 rounded-xl py-8 space-y-3 text-pink-100 mb-5">
        <h1 className="text-6xl font-normal text-blue-400">Code</h1>
        <div className="container right w-[60%]" id="code-sample">
          <div className="title">Code</div>
          <br />
          <br />
          <div id="code">
            <div className="final-code">
              <p>{`<h1 align="center">Hello There 🤙,${name} </h1>`}</p>
              <p>{` <h3 align="center"> ${subTitle} </h3> `}</p>
              <br />
              <p>{`![](${
                banner === ""
                  ? "https://raw.githubusercontent.com/halfrost/halfrost/master/icons/header_.png"
                  : banner
              })`}</p>
              <br />
              <p>{`<p align="center"> ${name} </p>`}</p>
              <p>{`<h3> Skills: ${skills}</h3>`}</p>
              <p>{`<h3> College: ${college} </h3> <br />`}</p>
              {/* <p>
                  {previews === false
                    ? ""
                    : `<p align="left"> <img src="https://komarev.com/ghpvc/?username=${visitGithub}&label=Profile%20views&color=0e75b6&style=flat" alt="${visitGithub}">  </p>`}
                </p> */}
              {doing1 === "" &&
              doing2 === "" &&
              doing3 === "" &&
              doing4 === "" &&
              doing5 === "" &&
              doing6 === "" ? (
                ""
              ) : (
                <p>{`<h2 align="left"> What I am Doing? </h2>`}</p>
              )}
              {doing1 === "" ? (
                ""
              ) : (
                <p>{` <h3>🚧 I’m currently working on ${doing1}</h3> `}</p>
              )}
              {doing2 === "" ? (
                ""
              ) : (
                <p>{` <h3>🗡️ Look At My this Project ${doing2}</h3> `}</p>
              )}
              {doing3 === "" ? (
                ""
              ) : (
                <p>{` <h3>📑 I'm Currently Learning ${doing3}</h3> `}</p>
              )}
              {doing4 === "" ? (
                ""
              ) : (
                <p>{` <h3>🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website ${doing4}</h3> `}</p>
              )}
              {doing5 === "" ? (
                ""
              ) : (
                <p>{` <h3>🏅 My Favourite Hobby ${doing5}</h3> `}</p>
              )}
              {doing6 === "" ? (
                ""
              ) : (
                <p>{` <h3>📣 Ask Me About ${doing6}</h3> `}</p>
              )}
              <br />
              {social1 === "" &&
              social2 === "" &&
              social3 === "" &&
              social4 === "" &&
              social5 === "" &&
              social6 === "" ? (
                ""
              ) : (
                <p>{`<h2 align="center">Connect Me In</h2>`}</p>
              )}
              <br />
              {
                <p>
                  {(social1 === ""
                    ? ""
                    : `<a href=${
                        social1 === "" ? "" : `"${social1}"`
                      } target="blank" alt=${social1}> <img src= '${
                        social1 === ""
                          ? ""
                          : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codechef.svg"
                      }' height="30" width="40" />  </a> `) +
                    (social2 === ""
                      ? ""
                      : `<a href=${
                          social2 === "" ? "" : `"${social1}"`
                        } target="blank" alt=${social2}> <img src= '${
                          social2 === ""
                            ? ""
                            : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
                        }' height="30" width="40" />  </a>`) +
                    (social3 === ""
                      ? ""
                      : `<a href=${
                          social3 === "" ? "" : `"${social1}"`
                        } target="blank" alt=${social3}> <img src= '${
                          social3 === ""
                            ? ""
                            : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                        }' height="30" width="40" />  </a>`) +
                    (social4 === ""
                      ? ""
                      : `<a href=${
                          social4 === "" ? "" : `"${social1}"`
                        } target="blank" alt=${social4}> <img src= '${
                          social4 === ""
                            ? ""
                            : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                        }' height="30" width="40" />  </a>`) +
                    (social5 === ""
                      ? ""
                      : `<a href=${
                          social5 === "" ? "" : `"${social1}"`
                        } target="blank" alt=${social5}> <img src= '${
                          social5 === ""
                            ? ""
                            : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg"
                        }' height="30" width="40" />  </a>`) +
                    (social6 === ""
                      ? ""
                      : `<a href=${
                          social6 === "" ? "" : `"${social1}"`
                        } target="blank" alt=${social6}> <img src= '${
                          social6 === ""
                            ? ""
                            : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg"
                        }' height="30" width="40" />  </a>`)}
                </p>
              }
              {/* <p>{trophy===false?'':`<p align="left"> <img src="https://github-profile-trophy.vercel.app/?username=${githubprofile}"  alt="${githubprofile}"> </p>`}</p> */}
              {/* <p>{streak === false ? '' : `<p align="left"> <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubprofile}&"  alt="${githubprofile}" > </p>`}</p> */}
              {/* <p>{languse===false? '':`<p align="left"> <img src="https://github-readme-stats.vercel.app/api/top-langs?username=${githubprofile}&show_icons=true&locale=en&layout=compact"  alt="${githubprofile}" >  </p>`}</p> */}
              {/* <p>{readmestate===false?'':`<p align="left"> <img src="https://github-readme-stats.vercel.app/api?username=${githubprofile}&show_icons=true&locale=en"  alt="${githubprofile}" ></p>`}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
