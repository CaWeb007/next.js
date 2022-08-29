import A from "./A";
import Head from "next/head";

const MainContainer = ({children, title}) => {
    return (
        <>
            <Head>
                <meta keywords="next.js"></meta>
                <title>{"Next.js - " + title}</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                                .navbar {
                                    margin: 10px;
                                }
                            `}
            </style>
        </>
    )
}
export default MainContainer