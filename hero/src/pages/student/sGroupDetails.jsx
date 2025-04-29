import React from "react";
import { useLocation } from "react-router-dom";

function GroupDetail() {
  const location = useLocation();
  const { group } = location.state || {}; // retrieve group passed from Sgroup

  if (!group) {
    return <div>No group data found!</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2 className="mb-3">{group.name}</h2>
        <img
          src={group.imageUrl}
          alt={group.name}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <p className="mt-3">{group.description}</p>
      </div>
    </div>
  );
}

export default GroupDetail;
