import styles from "./components/Site.module.css";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {S} from './components/pages/_styles.ts';


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    ERROR: '/error404',
    PRICE: '/price',
    ProtectedPage: '/ProtectedPage'
}

export const App = ()=> {

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate(-1)
    }

  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>


               <S.NavWrapper><NavLink to={PATH.PAGE1} >Adidas</NavLink></S.NavWrapper>
               <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
               <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
               <S.NavWrapper><NavLink to={PATH.PRICE}>Price</NavLink></S.NavWrapper>
               <S.NavWrapper><NavLink to={PATH.ProtectedPage}>ProtectedPage</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
            <div className={styles.HorizontalNavigation}>
                <Link to={PATH.PAGE1} className={styles.LinkLikeButton} >Главная страница</Link>
            </div>

            <button onClick={navigateHandler} className={styles.ButtonLikeLink} >Назад</button>

            <Outlet />

            {/*<Routes>*/}
            {/*    <Route path="/" element={<Navigate to={'/adidas'}/>} />*/}

            {/*    <Route path={PATH.PAGE1} element={<PageOne/>} />*/}
            {/*    <Route path={PATH.PAGE2} element={<PageTwo/>} />*/}
            {/*    <Route path={PATH.PAGE3} element={<PageThree/>} />*/}
            {/*    <Route path={PATH.PRICE} element={<Prices/>} />*/}
            {/*    <Route path={`/:model/:id`} element={<Models/>} />*/}
            {/*    /!*<Route path={'/puma/:id'} element={<PumaModels/>} />*!/*/}
            {/*  /!*  <Route path={PATH.ERROR} element={<Error404/>} /> *!/*/}
            {/*    <Route path="/*" element={<Navigate to = {'/error404'}/>} />*/}
            {/*    /!*<Route path="/adidas/*" element={<Navigate to = {'/error404'}/>} />*!/*/}
            {/*</Routes>*/}
        </div>
      </div>
      <div className={styles.footer}>abibas 2025</div>
    </div>
  );
}


