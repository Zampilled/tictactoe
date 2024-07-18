"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import Header from "@/src/components/header";
import {getAuthenticatedAppForUser} from "@/src/lib/firebase/serverApp";
import {useUserSession} from "@/src/lib/useUserSession"
import {signInWithGoogle} from "@/src/lib/firebase/auth";


export default async function Home() {

  return (
      <main className={styles.main}>


          <div className={styles.description}>

              <p>
              Tic Tac Toe
              </p>


              <button>Login</button>

          </div>

    </main>
  );
}

