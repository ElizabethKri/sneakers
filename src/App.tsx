import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Route, Routes} from "react-router";
import {Navigate, NavLink} from "react-router-dom";
import {S} from './components/pages/_styles.ts'
import Models from "./components/pages/models/Models.tsx";

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    ERROR: '/error404'
}

export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>


               <S.NavWrapper><NavLink to={PATH.PAGE1} >Adidas</NavLink></S.NavWrapper>
               <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
               <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
            <Routes>
                <Route path="/" element={<Navigate to={'/adidas'}/>} />

                <Route path={PATH.PAGE1} element={<PageOne/>} />
                <Route path={PATH.PAGE2} element={<PageTwo/>} />
                <Route path={PATH.PAGE3} element={<PageThree/>} />
                <Route path={`/:model/:id`} element={<Models/>} />
                {/*<Route path={'/puma/:id'} element={<PumaModels/>} />*/}
              {/*  <Route path={PATH.ERROR} element={<Error404/>} /> */}
                <Route path="/*" element={<Navigate to = {'/error404'}/>} />
                {/*<Route path="/adidas/*" element={<Navigate to = {'/error404'}/>} />*/}
            </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


