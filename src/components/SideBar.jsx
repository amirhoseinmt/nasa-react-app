import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martin Landscape</h2>
        <div>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a
            iure quibusdam, aperiam rerum sed quae autem, incidunt harum fugiat
            omnis tempora, nostrum dolorum velit.
          </p>
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
