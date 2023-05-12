import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>smartlockkey.com</title>
          <meta property="og:title" content="smartlockkey.com" />
        </Head>
        <div className="home-container1">
          <h1 className="home-text">
            <span>Smart Lock Key</span>
            <br></br>
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-container1 {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

export default Home
