import { useState } from "react";

export default function Folder({ item }) {
  const [expand, setExpand] = useState(false);
  if (item.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)}>
          <span>📁</span>
          {item.name}
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {item.children?.map((res) => {
            return <Folder item={res} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>🗃️</span>
        {item.name}
      </div>
    );
  }
}
