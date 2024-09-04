import React, { useState } from "react";

// 네비게이션 메뉴 항목들을 정의한 배열입니다. 각 항목은 제목(title)과 링크(url)를 포함하고 있습니다.
const headerNav = [
    {
        title: "intro", // 메뉴 항목의 제목입니다.
        url: "#intro", // 메뉴 항목이 이동할 링크입니다.
    },
    {
        title: "skill",
        url: "#skill",
    },
    {
        title: "site",
        url: "#site",
    },
    {
        title: "portfolio",
        url: "#port",
    },
    {
        title: "contact",
        url: "#contact",
    },
];

// Header 컴포넌트는 웹 페이지의 헤더 부분을 정의합니다.
const Header = () => {
    // show라는 상태 변수를 생성하고 useState 훅으로 초기값을 false로 설정합니다.
    // 이 변수는 모바일 메뉴의 표시 여부를 관리합니다.
    const [show, setShow] = useState(false);

    // toggleMenu 함수는 모바일 메뉴를 표시하거나 숨기기 위해 show 상태를 토글합니다.
    const toggleMenu = () => {
        // setShow 함수는 이전 상태(preShow)를 반전시켜 새로운 상태로 설정합니다.
        setShow((preShow) => !preShow);
    };

    return (
        // 헤더 요소를 정의합니다. id="header"는 헤더를 식별하기 위한 고유 ID입니다.
        <header id="header" role="banner">
            <div className="header__inner"> {/* 헤더 내부의 컨텐츠를 포함하는 div입니다. */}
                
                {/* 로고를 표시하는 div입니다. */}
                <div className="header__logo">
                    {/* 로고에 대한 링크를 설정합니다. 클릭 시 홈페이지로 이동합니다. */}
                    <a href="/">portfolio<em>vite</em></a>
                </div>

                {/* 네비게이션 메뉴를 정의하는 nav 요소입니다. 
                    show 상태에 따라 'show' 클래스를 추가하여 메뉴 표시 여부를 제어합니다. */}
                <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {/* headerNav 배열의 각 항목을 map 메서드를 사용해 li 요소로 변환하여 렌더링합니다. */}
                        {headerNav.map((nav, key) => (
                            // 각 li 요소는 고유한 key를 가지며, 이 key는 배열의 인덱스입니다.
                            <li key={key}>
                                {/* 메뉴 항목에 대한 링크를 설정합니다. */}
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 모바일 메뉴를 위한 버튼을 정의하는 div입니다. 
                    onClick 이벤트 핸들러로 toggleMenu 함수를 연결하여 클릭 시 메뉴 표시 여부를 토글합니다. */}
                <div className="header__nav__mobile" 
                     id="headerToggle" 
                     aria-controls="primary-menu" 
                     aria-expanded="false" 
                     role="button" 
                     tabindex="0" 
                     onClick={toggleMenu}>
                    {/* 버튼 내부의 span 요소는 메뉴 버튼의 시각적 요소(막대기 모양)를 표현합니다. */}
                    <span></span>
                </div>    
            </div>
        </header>
    );
};

export default Header;
