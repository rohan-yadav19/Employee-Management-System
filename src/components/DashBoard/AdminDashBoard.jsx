import React from "react";
import Header from "../other/Header";

const AdminDashBoard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <div>
        <form className="flex flex-wrap w-full bg-red-200 items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3>TasK Title</h3>
              <input type="text" placeholder="Make a UI Design" />
            </div>
            <div>
              <h3>Date</h3>
              <input type="date" />
            </div>
            <div>
              <h3>Assign To</h3>
              <input type="text" placeholder="employee name" />
            </div>
            <div>
              <h3>Category</h3>
              <input type="text" placeholder="design, dev, etc" />
            </div>
          </div>

          <div className="w-1/2">
            <h3>Description</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashBoard;
