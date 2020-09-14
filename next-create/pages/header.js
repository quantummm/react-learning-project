//import Head from 'next/head'
import MyHeader from './api/myheader'
import {Button} from 'antd'


function Header() {
    return (
        <>
            {/* <Head>
                <title>Homepage</title>
                <meta charSet='utf-8'></meta>
            </Head> */}
            <MyHeader />
            <div>Welcom to </div>
            <div><Button>The button</Button></div>
        </>
    )
}

export default Header