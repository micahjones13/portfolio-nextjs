import { Data } from "../assets/workData";
export default function Work() {
  return (
    <>
      {Data.map((entry) => {
        return (
          <div
            key={entry.title}
            className="border border-sky-500 m-auto p-4 flex flex-col"
          >
            <h4>{entry.title}</h4>
            <p>{entry.description}</p>
            <div className="flex w-100 justify-end">
              <ul className="flex justify-around items-center w-1/3">
                <li>
                  <a href={entry.github}>Github</a>
                </li>
                {entry.storybook ? (
                  <li>
                    <a href={entry.storybook}>Storybook</a>
                  </li>
                ) : null}
                {entry.website ? (
                  <li>
                    <a href={entry.website}>Website</a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}
