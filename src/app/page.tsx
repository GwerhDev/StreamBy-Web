"use client"

import Loading from "./loading";
import { LoggedRedirection } from "@/components/Utils/LoggedRedirection";

export default function Landing() {
  return (
    <main>
      <Loading />
      <LoggedRedirection to="/home" />
    </main>
  )
}