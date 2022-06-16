import React,{useState} from 'react'
import "./../components/User/style.css"
import UserChangePassword from '../components/User/UserChangePassword'
import UserDetail from '../components/User/UserDetail'


const UserDetailPage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="user-detail-page container mtop">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Thông tin tài khoản
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Đổi mật khẩu
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <UserDetail/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <UserChangePassword/>
        </div>
      </div>
    </div>
  );
}

export default UserDetailPage