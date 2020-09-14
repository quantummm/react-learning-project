import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {

  // function gotoA(){
  //   Router.push('/pageA')
  // }

  //routeChangeStart
  //routeChangeComplete
  //beforeHistoryChange
  //routeChangeError
  //hashChangeStart
  //hashChangeComplete


  Router.events.on('routeChangeStart', (...args) => {
    console.log("1.routeChangeStart-> objects: ",...args)
  })

  Router.events.on('routeChangeComplete', (...args) => {
    console.log("2.routeChangeComplete-> objects: ",...args)
  })

  Router.events.on('beforeHistoryChange', (...args) => {
    console.log("3.beforeHistoryChange-> objects: ",...args)
  })

  Router.events.on('routeChangeError', (...args) => {
    console.log("4.routeChangeError-> objects: ",...args)
  })

  Router.events.on('hashChangeStart', (...args) => {
    console.log("5.hashChangeStart-> objects: ",...args)
  })

  Router.events.on('hashChangeComplete', (...args) => {
    console.log("6.hashChangeComplete-> objects: ",...args)
  })


  function gotoPage() {
    Router.push({
      pathname: '/pageA',
      query: {
        name: "a"
      }
    })
  }

  return (
    <div>
      <div>Welcome to homepage</div>
      {/* <div><Link href='/pageA?name=a'><a>go to page A</a></Link></div> */}
      <div><Link href={{ pathname: '/pageA', query: { name: "a" } }}><a>go to page A</a></Link></div>
      <div><Link href='/pageA?name=b'><a>go to page B</a></Link></div>
      <div>
        {/* <button onClick={gotoA}>Go to page A</button> */}
        <button onClick={gotoPage}>Go to page A</button>
      </div>
      <div>
        <Link href="#pageA"><a>Choose Page A</a></Link>
      </div>
    </div>
  )
}

export default Home