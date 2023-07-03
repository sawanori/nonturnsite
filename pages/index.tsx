import type { NextPage } from "next"
import Head from 'next/head'
import Image from 'next/image'
import Masthead from "../components/masthead"
import Aboutus from '../components/aboutus';
import { Concept } from "../components/concept";
import { Works } from "../components/works";
import { TrustedBy } from "../components/trustedby";
import { ContactUs } from "../components/contactUs";
import { Footer } from "../components/footer";
import Message from "../components/message";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { Splash } from "../components/splash";
import { Testimonials } from "../components/testimonials";


const Home: NextPage = () => {
  return (
    <div className=" font-sans">
      {/* <Splash /> */}
      <Layout title="test">
        <Masthead />
        <Concept />
        <Message />
        <Works />
        <TrustedBy />
        <Testimonials/>
        <ContactUs />
      </Layout>
    </div>
  )
}

export default Home
