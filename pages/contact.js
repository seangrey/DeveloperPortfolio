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
      <h1>CONTACT</h1>
      <hr />
      <h3>Feel free to email me if you have any further questions.</h3>
      <h4>Email: sean.greyvenstein@gmail.com</h4>

      <style jsx>{`
        div {
          font-family: Poppins;
        }
        hr {
          width: 30%;
        }
        h3 {
          text-align: center;
          font-weight: 400;
        }
        a {
          text-align: center;
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
      `}</style>
    </div>
  </Layout>
);
