import { Avatar, Input } from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateProfileImage } from "../redux/Actions/UserActions";
import "./style.css";
import { updateProfileUser } from "./../redux/Actions/UserActions";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";

const UserDetail = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailToched, setEmailToched] = useState(false);
  const [firstNameToched, setFirstNameToched] = useState(false);
  const [lastNameToched, setLastNameToched] = useState(false);
  const [imageFile, setImageFile] = useState();
  const [activeEdit, setActiveEdit] = useState(false);
  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setEmail(userInfo.email);
    }
  }, [dispatch, userInfo]);

  const onProfileImageChange = (event) => {
    setImageFile(event.target.files[0]);
    // console.log(event.target.files[0]);
  };

  const onChangeProfileImage = () => {
    document.getElementById("profile-image-input").click();
  };

  useEffect(() => {
    if (imageFile) {
      const formData = new FormData();
      formData.append("profileImage", imageFile);
      dispatch(updateProfileImage(formData));
    }
  }, [imageFile, dispatch]);

  //validate
  const validateEmail = (value) => {
    return value?.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helperEmail = useMemo(() => {
    if (!email && !emailToched) {
      return {
        text: "",
      };
    }
    if (email === "" && emailToched)
      return {
        text: "Email không được để trống",
      };
    else {
      const isValid = validateEmail(email);
      return {
        text: !isValid ? "Email không hợp lệ" : "",
      };
    }
  }, [email, emailToched]);

  const helperFirstName = useMemo(() => {
    if (!firstName && !firstNameToched) {
      return {
        text: "",
      };
    }
    if (firstName === "" && firstNameToched)
      return {
        text: "Tên không được để trống",
      };
    return {
      text: "",
    };
  }, [firstName, firstNameToched]);

  const helperLastName = useMemo(() => {
    if (!lastName && !lastNameToched) {
      return {
        text: "",
      };
    }
    if (lastName === "" && lastNameToched)
      return {
        text: "Họ không được để trống",
      };
    return {
      text: "",
    };
  }, [lastName, lastNameToched]);

  const onEditUserInfo = () => {
    setEmailToched(true);
    setFirstNameToched(true);
    setLastNameToched(true);
    console.log(helperEmail.text + "\n");
    console.log(helperFirstName.text + "\n");
    console.log(helperLastName.text + "\n");
    if (
      helperEmail.text === "" &&
      helperFirstName.text === "" &&
      helperLastName.text === ""
    ) {
      dispatch(
        updateProfileUser(userInfo, {
          firstName: firstName,
          lastName: lastName,
          email: email,
        })
      );
    }
  };

  return (
    <div className="wrapper">
      <div className="left">
        <div onClick={onChangeProfileImage} class="content_img">
          <Avatar
            src={userInfo.avatarImg}
            style={{ width: "150px", height: "150px" }}
            className="avatar"
            zoomed
          />
          <div>Bấm để đổi ảnh</div>
          <br />
        </div>
        <h4>{userInfo.username}</h4>
        <form enctype="multipart/form-data" style={{ opacity: 0 }}>
          <input
            type="file"
            name="profile-image-input"
            id="profile-image-input"
            accept=".jpeg, .gif, .png, .JPG, .jpg, .PNG"
            onChange={onProfileImageChange}
          />
        </form>
      </div>
      <div className="right">
        <div className="info">
          <h3>
            Information
            { activeEdit ? (
              <AiOutlineCloseSquare 
                style={{
                    cursor: "pointer",
                    color: "#00bcd4",
                }}
                onClick={() => setActiveEdit(false)}
              />
            ) : (
              <BsPencilSquare
                style={{
                  cursor: "pointer",
                  color: "#00bcd4",
                }}
                onClick={() => setActiveEdit(true)}
              />
            )}
          </h3>

          <div className="info_data">
            <div className="data">
              <h4>Họ</h4>
              <Input
                // clearable
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                helperColor="error"
                helperText={lastNameToched && helperLastName.text}
                onFocus={() => setLastNameToched(true)}
                type="text"
                bordered
                readOnly={!activeEdit}
                className={activeEdit ? "user-info-input" : "user-info-input-readonly"}
                fullWidth
                color="primary"
                size="md"
                placeholder="Họ"
              />
            </div>
            <div className="data">
              <h4>Tên</h4>
              <Input
                // clearable
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                helperColor="error"
                helperText={firstNameToched && helperFirstName.text}
                onFocus={() => setFirstNameToched(true)}
                type="text"
                bordered
                readOnly={!activeEdit}
                className={activeEdit ? "user-info-input" : "user-info-input-readonly"}
                fullWidth
                color="primary"
                size="md"
                placeholder="Tên"
              />
            </div>
          </div>
          <br />
          <div className="info_data">
            <div className="data">
              <h4>Email</h4>
              <Input
                // clearable
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperColor="error"
                helperText={emailToched && helperEmail.text}
                onFocus={() => setEmailToched(true)}
                type="email"
                bordered
                readOnly={!activeEdit}
                className={activeEdit ? "user-info-input" : "user-info-input-readonly"}
                fullWidth
                color="primary"
                size="md"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="social_media">
          <button onClick={onEditUserInfo} style={{ visibility: activeEdit ? "visible" : "hidden" }} className="btn-save-detail">
            Lưu thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
