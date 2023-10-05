import { Footer, Hero, Service } from '@/components'
import Image from 'next/image'

import { Router } from 'next/router'

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
    </main>
  )
}
