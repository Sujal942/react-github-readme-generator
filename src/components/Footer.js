import React from "react";

const Footer = (
  name,
  subTitle,
  banner,
  about,
  skills,
  college,
  previews,
  githubprofile,
  doing1,
  doing2,
  doing3,
  doing4,
  doing5,
  doing6,
  social1,
  social2,
  social3,
  social4,
  social5,
  social6
) => {
  return (
    <>
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
              <p>{`<p align="center"> ${about} </p>`}</p>
              <p>{`<h3> Skills: ${skills}</h3>`}</p>
              <p>{`<h3> College: ${college} </h3> <br />`}</p>
              <p>
                {previews === false
                  ? ""
                  : `<p align="left"> <img src="https://komarev.com/ghpvc/?username=${githubprofile}&label=Profile%20views&color=0e75b6&style=flat" alt="${githubprofile}">  </p>`}
              </p>
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
    </>
  );
};

export default Footer;
