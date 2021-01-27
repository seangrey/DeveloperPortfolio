import Link from "next/link";

/* Import Layout */
import Layout from "../components/Layout";

/* Images */
import logoImage from "../static/me.png";

export default () => (
  <Layout>
    <div>
      <Link href="/index">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <h4>Developers Portfolio</h4>
      <h1>ABOUT</h1>
      <hr />
      <h3>Web Developer | Managing Director at TedSteel</h3>
      <p>
        I have recently furthered my studies in Web Development to merge my
        business skills with my passion for IT.
      </p>
      <p>
        You can navigate to my
        <a href="https://www.linkedin.com/in/seangreyvenstein/">
          Linkedin Profile
        </a>
        for more information regarding my studies, work experience and previous
        employment.{" "}
      </p>
      <img src={logoImage} alt="profile photo" id="logoImg" />

      <style jsx>{`
        div {
          font-family: Poppins;
        }
        hr {
          width: 30%;
        }
        p {
          text-align: center;
          margin: 20px;
          font-weight: 200;
        }
        h3 {
          text-align: center;
          font-weight: 400;
        }
        h4 {
          text-align: center;
          font-style: italic;
          font-weight: 200;
        }
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        a {
          text-align: center;
          padding: 10px;
        }
        h1 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 400;
          padding-top: 50px;
        }
      `}</style>
    </div>
  </Layout>
);
