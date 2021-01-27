import Link from "next/link";

/* Import Layout */
import Layout from "../components/Layout";

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
      <h1>PROJECTS</h1>
      <hr />
      <p>
        <a href="https://github.com/seangrey">GITHUB Profile</a>
        <br></br>
        <br></br>
        Above you will find a link to my personal profile on https://github.com
        <br></br>
        There you will find some of my projects as well as snippets of code I
        find useful.
      </p>

      <style jsx>{`
        div {
          font-family: Poppins;
        }
        hr {
          width: 30%;
        }
        a {
          text-align: center;
          padding: 10px;
        }
        h4 {
          text-align: center;
          font-style: italic;
          font-weight: 200;
        }
        h1 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 400;
          padding-top: 50px;
        }
        p {
          text-align: center;
          font-weight: 200;
        }
        href {
          text-align: center;
        }
      `}</style>
    </div>
  </Layout>
);
