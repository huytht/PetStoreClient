import React,{useEffect,useState} from 'react'
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom'
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import {useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../components/redux/Actions/UserActions';
import { Dropdown, Avatar, Grid} from "@nextui-org/react";
const Search = () => {
    // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })


const [visible, setVisible] = React.useState(false);
const handler = () => setVisible(true);
const closeHandler = () => {
  setVisible(false);
  console.log("closed");
};
const [visible2, setVisible2] = React.useState(false);
const handler2 = () => setVisible2(true);
const closeHandler2 = () => {
  setVisible2(false);
  console.log("closed");
};


const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const userLogin =useSelector((state) => state.userLogin);
const {user} = userLogin;

useEffect(()=>{
  if(user){
    setVisible(false)
  }
},[user])
const loginHandler = (e) => {;
  e.preventDefault();
  dispatch(login(username,password))
};
const logoutHander = () =>{
  dispatch(logout())
}
  return (
    <>
    
    <section className='search'>
      <div className='container c_flex'>
        <div className='logo width '>
          <img src={logo} alt='' />
        </div>

        <div className='search-box f_flex'>
          <i className='fa fa-search'></i>
          <input type='text' placeholder='Search...' />
          <span>All Name</span>
        </div>
        <div className='icon f_flex width'>
          {user  ?
            ( <Grid.Container justify="flex-end" gap={2}>
            <Grid>
              <Dropdown placement="bottom-left">
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    size="lg"
                    as="button"
                    color="secondary"
                    src={user.avatarImg === undefined ? user.data.data.avatarImg: user.avatarImg }
                  />
                </Dropdown.Trigger>
                <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                  <Dropdown.Item key="profile" css={{ height: "$18" }}>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      Đăng nhập bởi
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      {user.username === undefined ? user.data.data.username: user.username}
                    </Text>
                  </Dropdown.Item>  
                  <Dropdown.Item key="settings" withDivider>
                    <Link to = '/profile'>
                      Thông tin cá nhân
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item key="logout" color="error" withDivider>
                    <Link to ='#' onClick={logoutHander}>Đăng xuất</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid.Container>)
          :(
             <div className='login-logout'>
             <div className='btnlogin'>
               <Button auto light color="error" bordered onClick={handler}>
                  Đăng nhập
               </Button>
             </div>
             <div className='btnregisted'>
               <Button auto light color="error" bordered onClick={handler2}>
                 Đăng kí
               </Button>  
             </div>    
           </div>
          )}
         
          <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header>
            <Text b id="modal-title" size={18}>
              OkaKoro Store_
            <Text b size={18}>
            Xin chào quý khách 
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Password"  
            value={password}
            onChange ={(e) => setPassword(e.target.value)}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button  auto onClick={loginHandler}>
            Sign in
          </Button>
        </Modal.Footer>

          </Modal>
          <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible2}
            onClose={closeHandler2}

          >
            <Modal.Header>
            <Text b id="modal-title" size={18}>
              OkaKoro Store_
            <Text b size={18}>
            Xin chào quý khách 
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
           
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler2}>
            Close
          </Button>
          <Button auto onClick={closeHandler2}>
           Đăng kí
          </Button>
        </Modal.Footer>
          </Modal>
          <div className='cart'>
            <Link to='/cart'>
              <i className='fa fa-shopping-bag icon-circle'></i>
              <span>0</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Search