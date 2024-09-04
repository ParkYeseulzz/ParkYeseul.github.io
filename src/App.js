import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import lenis from "./utils/lenis";
import link from "./utils/link";


const App = () => {
    useEffect(() => {
        lenis();
        link();
    }, []);
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;

//<BrowserRouter> : BrowserRouter는 라우팅을 적용하기 위한 컴포넌트입니다. 
//애플리케이션의 최상위 컴포넌트인 App 컴포넌트를 감싸서 라우팅 설정을 적용할 수 있도록 합니다.
//<Routes> : Routes는 라우트들을 정의하는 컨테이너입니다. 
//각각의 <Route> 컴포넌트들을 <Routes> 컴포넌트 내부에 정의하여 경로와 컴포넌트를 매핑합니다.
//<Route path="/" element={<HomeView />} /> : 이 부분은 "/" 경로에 해당하는 <HomeView> 컴포넌트를 렌더링하도록 설정. 
//path 속성에는 경로를 지정하고, element 속성에는 해당 경로에 렌더링할 컴포넌트를 JSX 문법으로 전달합니다.