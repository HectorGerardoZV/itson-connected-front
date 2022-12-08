import { Header, Footer, Propose, Step } from "../../../components/Index";
import IMG_MAIN from "/images/img-mainpage.png";

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
                            <span> estudiantes</span> de ITSON
                        </h2>
                    </div>
                    <div className={style.topSection__image}>
                        <img src={IMG_MAIN} alt="img-main" />
                    </div>
                </section>

                <section className={style.proposes}>
                    <h2 className={style.subTitle}>
                        <span className={style.importantText}>
                            ITSON-CONNECTED
                        </span>{" "}
                        Propositos
                    </h2>
                    <div className={style.proposes__cards}>
                        <Propose option={"option1"} />
                        <Propose option={"option2"} />
                        <Propose option={"option3"} />
                    </div>
                </section>

                <section className={style.steps}>
                    <h2 className={style.subTitle}>
                        <span className={style.importantText}>
                            ITSON-CONNECTED
                        </span>{" "}
                        ¿Como funciona?
                    </h2>
                    <div className={style.steps__cards}>
                        <Step step={"1"} />
                        <div className={style.steps__users}>
                            <Step step={"21"} />
                            <Step step={"22"} />
                        </div>
                        <Step step={"3"} />
                    </div>
                </section>

                <Footer />
            </section>
        </>
    );
};

export default MainPage;
