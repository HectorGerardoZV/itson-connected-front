import { Header, Footer } from "../../../components";
import IMG_MAIN from "/images/img-mainpage.png";

import style from "./MainPage.module.css";
const MainPage = () => {
    return (
        <>
            <section className={style.container}>
                <Header />
                <div className={style.topSection}>
                    <div className={style.topSection__info}>
                        <h1 className={style.topSection__title}>
                            <span>ITSON</span>-CONNECTED
                        </h1>

                        <h2 className={style.topSection__slogan}>
                            Conéctate a la <span>bolsa de trabajo</span><br />
                            exclusiva para los
                            <span>estudiantes</span> de ITSON
                        </h2>
                    </div>
                    <div className={style.topSection__image}>
                        <img src={IMG_MAIN} alt="img-main" />
                    </div>
                </div>

                <Footer />
            </section>
        </>
    );
};

export default MainPage;
