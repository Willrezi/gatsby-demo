import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Contact me by mail @ wilfried.lloza@gmail.com</p>
      <form name="contact" method="POST" netlify>
        <input type="email" name="email" placeholder="Votre email" />
        <button type="submit">OK</button>
      </form>
    </Layout>
  )
}

export default ContactPage
