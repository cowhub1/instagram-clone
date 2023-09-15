import React from 'react';
import './join.css';
import './common.css';


function Join() {
    return (
        <div className="join">
            <div className="container">
                <header className="logo">
                    <img className="logo_text" src="img/logo_text.png" alt="로고" />
                </header>
                    <div>
                        <span className="lets">친구들의 사진과 동영상을 보려면</span>
                        <span className="lets"> 가입하세요.</span>
                    </div>
                <div className="or_line">
                    <div className="line"></div>
                    <div className="text">회원가입</div>
                    <div className="line"></div>
                </div>
                <form name="join" action="" method="post">
                    <input className="addEmail" type="text" name="email" placeholder="아이디 또는 이메일 주소" />
                    <input className="name" type="text" name="fullname" placeholder="성명" />
                    <input className="id" type="text" name="username" placeholder="사용자 이름" />
                    <input className="pw" type="password" name="password" placeholder="비밀번호" />
                    <button className="btn_join" type="submit">가입</button>
                </form>
            </div>
            <div className="account_login">
                <span className="question">
                    <p>계정이 있으신가요?{' '}
                        <a className="a" href="/login">
                            <span className="underline">로그인</span>
                        </a>
                    </p>
                </span>
            </div>
        </div>
    ); 
}

export default Join;