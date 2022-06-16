import React from 'react'
import './style.css'
const UserDetail = () => {
  return (
      <div className="wrapper container mtop ">
    <div className="left">
        <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100"/>
        <h4>Alex William</h4>
    </div>
    <div className="right">
        <div className="info">
            <h3>Information</h3>
            <div className="info_data">
                 <div className="data">
                    <h4>Tên</h4>
                    <input type="text" id="fname" name="fname" required/>
                 </div> 
                 <div className="data">
                   <h4>Họ</h4>
                   <input type="text" id="lname" name="lname" required/>
              </div>
            </div>
            <div className="info_data">
                 <div className="data">
                    <h4>Email</h4>
                    <input type="email" id="email" name="email" required/>
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