import React from "react";

const LoginModalForm = ({ isModalVisible }) => {
  console.log(isModalVisible);
  return (
    <div>
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModalForm;
