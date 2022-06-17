import React, { useEffect, useState } from 'react'

import { useDispatch,useSelector } from 'react-redux'
import './style.css'

const UserDetail = () => {

  const dispatch =useDispatch()
  const userDetails =useSelector((state) => state.userDetails);
  const {userInfo} = userDetails;
  const [fname,setfName]=useState("")
  const [lname,setlName]=useState("")
  const [email,setEmail]=useState("")
  useEffect(() => {
    if(userInfo){
      setfName(userInfo.firstName);
      setlName(userInfo.lastName);
      setEmail(userInfo.email)
    } 
  },[dispatch,userInfo])

  return (
      <div className="wrapper container mtop ">
    <div className="left">
        <img src={userInfo.avatarImg} alt="user" width="100"/>
        <h4>{userInfo.username}</h4>
        <h4>Đăng nhập phút</h4>
    </div>
    <div className="right">
        <div className="info">
            <h3>Information</h3>
            <div className="info_data">
                 <div className="data">
                    <h4>Tên</h4>
                    <input type="text"  value={fname} />
                 </div> 
                 <div className="data">
                   <h4>Họ</h4>
                   <input type="text"  value={lname} />
              </div>
            </div>
            <div className="info_data">
                 <div className="data">
                    <h4>Email</h4>
                    <input id='email' type="email" value={email} />
                 </div>  
            </div>
        </div>     
        <div className="social_media">
            <button className='btn-save-detail'>Lưu thông tin</button>
      </div>
    </div>
</div>
  )
}

export default UserDetail
