import React from 'react'

const UserChangePassword = () => {
  return (
    <div className="wrapper container mtop ">
    <div className="left">
        <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100"/>
        <h4>Alex William</h4>
    </div>
    <div className="right">
        <div className="info">
            <h3>Change Password</h3>
            <div className="info_data">
                 <div className="data">
                    <h4>Mật khẩu cũ</h4>
                    <input type="password" id="fname" name="fname" required/>
                 </div> 
                 <div className="data">
                   <h4>Mật khẩu mới</h4>
                   <input type="password" id="lname" name="lname" required/>
              </div>
            </div>
        </div>     
        <div className="social_media">
            <button className='btn-save-detail'>Đổi mật khẩu</button>
      </div>
    </div>
</div>
  )
}

export default UserChangePassword