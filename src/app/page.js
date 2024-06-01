import Interests from "./components/interests";
import Header from "./components/nav";
import ScrollList from "./components/scroll-list";
import Work from "./components/work";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="border border-sky-500 p-4">
          <p>
            Hey there! My name is Micah Jones and I'm a full stack web developer
            with 3+ years of experience. My last year or so of work has been
            mostly frontend applications and design system work with backend
            seasoned here and there.
          </p>
          <p>
            My frontend experience has been mostly React with a bit of Angular.
            I also have a lot of experience running developer relations and
            support for open source software (see Astro below).
          </p>
          <p>
            I've spent the last 3ish years working with amazing designers and
            I've tried to absorb as much from them as I could. I've built
            applications based on mockups and instinct, but always prefer
            working with designers when I can.
          </p>
          <br></br>
          <p>
            Scrolling across below are some specfic tech I'm familiar with.
            Click on one to see an example so you know I'm not just making it
            up!
          </p>
        </section>
        <section className="w-full">
          <ScrollList />
        </section>
        <section>
          <div className="flex flex-col items-center w-100">
            <h1>Work</h1>
            <Work />
          </div>
        </section>
      </main>
    </>
  );
}
