import Link from "next/link";

/* Import Layout */
import Layout from "../components/Layout";

function Welcome(props) {
  return (
    <Layout>
      <div>
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
        </div>
        <h4>Developers Portfolio</h4>
        <h1>SEAN GREYVENSTEIN</h1>
        <hr />
        <h3>Welcome to my Portfolio.</h3>

        <style jsx>{`
          div {
            font-family: Poppins;
          }
          h1 {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 400;
            padding-top: 50px;
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
          h3 {
            text-align: center;
            font-weight: 400;
          }
          p {
            text-align: center;
            padding-top: 10px;
            font-weight: 200;
          }
          hr {
            width: 30%;
          }
        `}</style>
      </div>
    </Layout>
  );
}
export default Welcome;
