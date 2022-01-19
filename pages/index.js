import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";

export default function Home() {
  return (
    <section>
      <form action="/api/images" method="POST" encType="multipart/form-data">
        <input type="file" name="file"/>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
