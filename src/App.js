import "./styles.css";
import Folder from "./Folder";
import data from "./data/data";
import { useState } from "react";
export default function App() {
  const [folderData, setItem] = useState(data);
  return (
    <div>
      {folderData.map((item) => {
        return <Folder item={item} />;
      })}
    </div>
  );
}
