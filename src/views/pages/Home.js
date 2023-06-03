import Home_Img from "../../assets/images/panda.jpg";
import thumbnail from "../../assets/images/thumbnail.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Helmet } from "react-helmet";
const Home = (props) => {
  const Works = [
    { id: 1, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 2, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 3, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 4, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 5, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 6, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
  ];

  const Services = [
    { id: 1, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 2, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 3, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 4, src: Home_Img, subtitle: "Sportbooks", desc: "Rewind" },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      origin: "bottom",
      distance: "40px",
      duration: 1200,
      reset: true,
      interval: 200,
      scale: 0.9,
      viewFactor: 0.1,
    });
  }, []);

  return (
    <div>
      <Helmet>
      
      <title>RepoHub</title>
      <meta name="title" content="RepoHub"></meta>
      <meta name="description" content="React tutorial project"></meta>


      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://github.com"></meta>
      <meta property="og:title" content="RepoHub"></meta>
      <meta property="og:description" content="React tutorial project"></meta>
      <meta property="og:image" content={thumbnail}></meta>


      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://github.com"></meta>
      <meta property="twitter:title" content="RepoHub"></meta>
      <meta property="twitter:description" content="React tutorial project"></meta>
      <meta property="twitter:image" content={thumbnail}></meta>
      </Helmet>

      <div className="container">
        <div className="row justify-content-center">
          <div className="lg-col-10">
            {/* Home Section */}
            <section className="container">
              <div className="row">
                <div className="col-12">
                  <div className="my-5 py-5">
                    <h3 className="fw-light headline">Digital Agency</h3>
                    <h3 className="mb-5 headline Quicksand-bold">
                      We developer complex interface systems for Web, Mobile &
                      AR
                    </h3>
                    <img
                      src={Home_Img}
                      className="img-fluid headline pdf-rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="lg-col-10">
              <section className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="my-5 py-5">
                      <h3 className="fw-light text-center mb-5 headline">
                        Our Work Selected Projects
                      </h3>

                      <div className="row row-cols-md-2 row-cols-1 g-5">
                        {Works.map((work) => {
                          return (
                            <div key={work.id} className="col headline">
                              {/* Card */}
                              <div className="card  pdf-rounded-xl overflow-hidden border-0 shadow-xl shadow-blue-100">
                                <img
                                  src={work.src}
                                  className="img-fluid card-img-top"
                                />
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {work.subtitle}
                                  </h5>
                                  <p className="card-text">{work.desc}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="lg-col-10">
              <section className="container">
                <div className="row mb-5">
                  <div className="col-lg-6 headline">
                    <h4>Our Services</h4>
                  </div>
                  <div className="col-lg-6 headline">
                    <p>
                      As a strategic partner, we created a working product with
                      a thoughtful and large-scale architecture. We launch,
                      support and development.
                    </p>
                  </div>
                </div>
                <div className="row mt-4 g-4">
                  {Services.map((service) => {
                    return (
                      <div key={service.id} className="col headline">
                        {/* Card */}
                        <div className="card text-center py-lg-5 py-3 border-0 shadow-xl shadow-blue-100">
                          <img src={service.src} className="img-fluid" />
                          <div className="card-body">
                            <h6 className="card-title ">{service.subtitle}</h6>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="text-end mt-3">
                    <div className="d-flex headline justify-content-end align-items-center">
                      <span className=" me-3">Explore More</span>
                      <div>
                        <i className=" fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="lg-col-10">
              <section className="container">
                <div className="row">
                  <div className="col">
                    <div className="my-5 py-5">
                      <div className="text-center py-5 my-5 headline">
                        <p>Next</p>
                        <h4>Our Story</h4>
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="border-top py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="lg-col-10">
              <section className="container">
                <div className="row">
                  <div className="col headline">
                    <div className=" small mb-4 mb-lg-0">
                      <NavLink
                        to={"/"}
                        className="text-decoration-none text-secondary me-4"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={"/"}
                        className="text-decoration-none text-secondary me-4"
                      >
                        Story
                      </NavLink>
                      <NavLink
                        to={"/"}
                        className="text-decoration-none text-secondary me-4"
                      >
                        Works
                      </NavLink>
                      <NavLink
                        to={"/"}
                        className="text-decoration-none d-lg-none text-secondary ms-4"
                      >
                        Contacts
                      </NavLink>
                      <NavLink
                        to={"/"}
                        className="text-decoration-none d-lg-none text-secondary ms-4"
                      >
                        Careers
                      </NavLink>
                    </div>
                  </div>

                  <div className="col headline">
                    <div className="text-lg-center text-center text-md-end">
                      <h4 className="font-bold">RepoHub</h4>
                    </div>
                  </div>

                  <div className="col d-none d-lg-block headline">
                    <div className="text-end small">
                      <NavLink
                        to={"/"}
                        className="text-decoration-none text-secondary ms-4"
                      >
                        Contacts
                      </NavLink>
                      <NavLink
                        to={"/"}
                        className="text-decoration-none text-secondary ms-4"
                      >
                        Careers
                      </NavLink>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
