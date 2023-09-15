import React, { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import SearchModal from './SearchModal';



const Sidebar = ({ width = 280, isOpen, onSearch  }) => {
  const [xPosition, setX] = useState(isOpen ? 0 : width);
  const side = useRef();

  // 추가: 검색 모달 상태
  const [isSearchOpen, setSearchOpen] = useState(false);

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
    } else {
      setX(width);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (!sideChildren && xPosition === 0) {
      setX(width);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [xPosition]);



  return (
    <div className={styles.container}>
      <div ref={side} className={styles.sidebar} style={{ width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)` }}>
      <button onClick={toggleMenu} className={styles.button}>
          {xPosition === 0 ? (
            <span className={styles.x}>🤍</span>
          ) : (
            <span className={styles.x}>🖤</span>
          )}
        </button>
        <div className={styles.content}>
          {/* //사이드바 컴포넌트 내부 값이 구현되는 위치 */}
          <nav className={styles.nav} >
            <div className={styles.nav - 1}>
              <div className={styles.head_logo}>
                <a href="/main"><img className={styles.logo_text} src="img/logo_text.png" alt="로고" /></a>
              </div>
            </div>
            <div className={styles.nav - 2}>
              <a href="/main">
                <div className={styles.menubar}>
                  {/* <img className={styles.home} src="img/home.png" alt="홈" /> */}
                  <i class="fa-solid fa-house fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>홈</span>
                </div>
              </a>             
                <div className={styles.menubar} onClick={onSearch}>
                  <i class="fa-solid fa-magnifying-glass fa-2xl" style={{color: `#000000`}}></i>
                  <span className={styles.word}>검색</span>
                </div>
                {isSearchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}            
           
                <div className={styles.menubar}>
                  {/* <img className={styles.home} src="img/explore.png" alt="탐색 탭" /> */}
                  <i class="fa-regular fa-compass fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>탐색 탭</span>
                </div>
             
             
                <div className={styles.menubar}>
                  {/* <img className={styles.home} src="img/lis2.png" alt="릴스" /> */}
                  <i class="fa-regular fa-circle-play fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>릴스</span>
                </div>
              
              
                <div className={styles.menubar}>
                  {/* <img className={styles.home} src="img/dm.png" alt="메시지" /> */}
                  <i class="fa-regular fa-paper-plane fa-2xl" style={{ color: `#000000` }} ></i>
                  <span className={styles.word}>메시지</span>
                </div>
             
              
                <div className={styles.menubar}>
                  {/* <img className={styles.home} src="img/heart.png" alt="알림" /> */}
                  <i class="fa-regular fa-heart fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>알림</span>
                </div>
             
         
                <div className={styles.menubar}>
                  {/* <img className={styles.home} src="img/plus.png" alt="만들기" /> */}
                  <i class="fa-regular fa-square-plus fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>만들기</span>
                </div>
              
             
                <div className={styles.menubar}>
                  <img className={styles.my_account} src="img/my_photo.jpg" alt="프로필" />
                  <a href="/profile" className={styles.word}>프로필</a>
                </div>
              
            </div>
          </nav >
        </div>

      </div>
    </div>
  );
};


export default Sidebar;