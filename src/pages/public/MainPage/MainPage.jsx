import { Header, Footer } from "../../../components";
import IMG_MAIN from "/images/img-mainpage.png";
import Propose from "../../../components/Propose/Propose";

import style from "./MainPage.module.css";
const MainPage = () => {
    return (
        <>
            <section className={style.container}>
                <Header />
                <section className={style.topSection}>
                    <div className={style.topSection__info}>
                        <h1 className={style.topSection__title}>
                            <span>ITSON</span>-CONNECTED
                        </h1>

                        <h2 className={style.topSection__slogan}>
                            Conéctate a la <span>bolsa de trabajo</span>
                            <br />
                            exclusiva para los
                            <span>estudiantes</span> de ITSON
                        </h2>
                    </div>
                    <div className={style.topSection__image}>
                        <img src={IMG_MAIN} alt="img-main" />
                    </div>
                </section>

                <section className={style.proposes}>
                    <h2 className={style.subTitle}>
                        <span className={style.importantText}>ITSON-CONNECTED</span> Propositos
                    </h2>
                    <div className={style.proposes__cards}>
                        <Propose option={"option1"}/>
                        <Propose option={"option2"}/>
                        <Propose option={"option3"}/>
                    </div>
                </section>

                <Footer />
            </section>
        </>
    );
};

export default MainPage;
