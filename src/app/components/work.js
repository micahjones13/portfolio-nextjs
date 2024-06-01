import { Data } from "../assets/workData";
import Card from "./card";
export default function Work() {
  return (
    <>
      {Data.map((entry, index) => {
        return (
          <Card
            key={index}
            description={entry.description}
            title={entry.title}
            relevantLinks={entry.relevantLinks}
          />
        );
      })}
    </>
  );
}
