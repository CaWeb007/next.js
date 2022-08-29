import {useRouter} from "next/router";
import styles from "../../styles/user.module.sass"
import MainContainer from "../../components/MainContainer";

export default function User({user}){
    const {query} = useRouter()
    return(
        <MainContainer  title={user.name}>
            <div className={styles.userContainer}>
                <h1>Пользователь с id {query.id}</h1>
                <p>Имя пользователя - {user.name}</p>
            </div>
        </MainContainer>
    )
}
export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}