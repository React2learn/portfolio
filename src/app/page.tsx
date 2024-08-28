"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import '@/components/portfolio/portfolio.css'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Package2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import developer from '@/components/assets/devloper.webp'
import aboutdev from '@/components/assets/aboutdev.webp'
import skillimg from '@/components/assets/skillimg.jpg'
import 'boxicons/css/boxicons.min.css';


export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };



  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>

      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">Atharva</a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
              {/* <li className="nav__item"><a href="#work" className="nav__link">Work</a></li> */}
              <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
          </div>


          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>

              </nav>
            </SheetContent>
          </Sheet>

        </nav>
      </header>

      <main className="l-main">

        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title font-bold">
              Hi,<br />
              I&apos;m <span className="home__title-color">Atharva</span><br />
              Web Developer
            </h1>

            <a href="#contact" className="button">Contact</a>
          </div>


          <div className="home__social">
            <a href="https://www.linkedin.com/in/atharvayengde/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/atharva.yengde/" className="home__social-icon"><i className='bx bxl-instagram' ></i></a>
            <a href="https://github.com/React2learn" className="home__social-icon"><i className='bx bxl-github' ></i></a>
          </div>

          <div className="home__img">
            {isMounted && (
              <>
                <svg
                  className="home__blob"
                  viewBox="0 0 479 467"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <mask id="mask0">
                    <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                    {/* Remove the SVG image tag */}
                  </g>
                </svg>

                {/* Add the image with src attribute */}
                <Image
                  className="home__blob-img"
                  src={developer}
                  alt="Developer"
                  style={{
                    position: 'absolute',
                    top: '80px',
                    left: '0px',
                    width: '450px',
                    height: '250px',
                  }}
                />
              </>
            )}
          </div>

        </section>


        <section className="about section " id="about">
          <h2 className="section-title">About</h2>

          <div className="about__container bd-grid">
            <div className="about__img">
              <Image src={aboutdev} alt="" />
            </div>

            <div>
              <h2 className="about__subtitle font-semibold">I&apos;am Atharva</h2>
              <p className="about__text">A web developer with a passion for creating intuitive, user-friendly websites. With a focus on clean design and efficient code, I bring ideas to life on the web. My expertise spans front-end and back-end development, ensuring that every project I work on is both visually appealing and highly functional. Let’s connect and build something exceptional together.</p>
            </div>
          </div>
        </section>


        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle font-semibold">Profesional Skills</h2>
              <p className="skills__text">I excel in crafting well-structured HTML5 and stylish, responsive CSS3 designs. My JavaScript expertise drives interactive features and performance optimization, while my UX/UI design skills ensure intuitive and engaging user experiences. With experience in Next.js, I build fast and scalable web applications, focusing on continuous learning to stay ahead in the industry.</p>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-html5 skills__icon'></i>
                  <span className="skills__name">HTML5</span>
                </div>
                <div className="skills__bar skills__html">

                </div>
                <div>
                  <span className="skills__percentage">95%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-css3 skills__icon'></i>
                  <span className="skills__name">CSS3</span>
                </div>
                <div className="skills__bar skills__css">

                </div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-javascript skills__icon' ></i>
                  <span className="skills__name">JAVASCRIPT</span>
                </div>
                <div className="skills__bar skills__js">

                </div>
                <div>
                  <span className="skills__percentage">90%</span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxs-paint skills__icon'></i>
                  <span className="skills__name">UX/UI</span>
                </div>
                <div className="skills__bar skills__ux">

                </div>
                <div>
                  <span className="skills__percentage">80%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxs skills__icon'></i>
                  <span className="skills__name">Next js</span>
                </div>
                <div className="skills__bar skills__next">

                </div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
            </div>

            <div>
              <Image src={skillimg} alt="" className="skills__img" />
            </div>
          </div>
        </section>


        {/* <section className="work section" id="work">
                    <h2 className="section-title">Work</h2>

                    <div className="work__container bd-grid">
                        <a href="" className="work__img">
                            <Image src={work1} alt="" />
                        </a>
                        <a href="" className="work__img">
                            <Image src={work2} alt="" />
                        </a>
                        <a href="" className="work__img">
                            <Image src={work3} alt="" />
                        </a>
                        <a href="" className="work__img">
                            <img src="assets/img/work4.jpg" alt="" />
                        </a>
                        <a href="" className="work__img">
                            <img src="assets/img/work5.jpg" alt="" />
                        </a>
                        <a href="" className="work__img">
                            <img src="assets/img/work6.jpg" alt="" />
                        </a>
                    </div>
                </section> */}


        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>

          <div className="contact__container bd-grid">
            <form onSubmit={handleSubmit} className="contact__form">
              <input
                type="text"
                name="name" // Add the name attribute
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="contact__input"
                required
              />
              <input
                type="email" // Use the correct input type for email
                name="email" // Add the name attribute
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="contact__input"
                required
              />
              <textarea
                name="message" // Add the name attribute
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="contact__input"
              ></textarea>
              <input
                type="submit" // Use "submit" to trigger form submission
                value="Submit"
                className="contact__button button"
              />
            </form>
          </div>
        </section>
      </main>


      <footer className="footer">
        <p className="footer__title">Atharva</p>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/atharvayengde/" className="footer__icon"><i className='bx bxl-linkedin' ></i></a>
          <a href="https://www.instagram.com/atharva.yengde/" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
          <a href="https://github.com/React2learn" className="footer__icon"><i className='bx bxl-github' ></i></a>
        </div>
        <p className="footer__copy">Contact us: atharvayengde31@gmail.com</p>
      </footer>

    </>
  );
}
