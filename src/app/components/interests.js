import { Hobbies } from "../assets/workData";
export default function Interests() {
  return (
    <>
      <div className="border border-sky-500 m-auto p-4 flex flex-col">
        <h4>Intrests / Hobbies</h4>
        {Hobbies.map((hobby, index) => {
          return (
            <div
              key={index}
              className="border border-sky-500 m-auto p-4 flex flex-col"
            >
              <h4>{hobby.title}</h4>
              <p>{hobby.description}</p>
              <div className="flex w-100 justify-end">
                <ul className="flex justify-around items-center w-1/3">
                  {hobby.relevantLinks.map((link, index) => {
                    return <li key={index}>{link}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
