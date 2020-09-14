import Link from 'next/link'
import { withRouter } from 'next/router'
import axios from 'axios'


const pageA = ({ router, list }) => {
    return (
        <>
            <div>welcome to page {router.query.name}</div>
            <div>{list}</div>
            <Link href='/'><a>back to homepage</a></Link>
        </>
    )
}

pageA.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').
            then(
                (res) => {
                    console.log('outcome:', res)
                    resolve(res.data.data)
                }
            )
    })

    return await promise
}

export default withRouter(pageA)