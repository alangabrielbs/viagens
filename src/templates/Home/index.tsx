import { useEffect } from 'react'
import { NextSeo } from 'next-seo'

import firebase from 'firebase'
import 'firebase/messaging'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import dynamic from 'next/dynamic'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import Firebase from 'services/firebase-init'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  const getMessage = async () => {
    try {
      const token = await Firebase.getInstance().init()

      if (token) {
        console.log('[TOKEN]:', token)

        console.log('{message functions}')
        const messaging = firebase.messaging()
        messaging.onMessage((message) => console.log('foreground', message))
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      console.log('[serviceWorker]')
      navigator.serviceWorker.addEventListener('message', (event) =>
        console.log('event for the service worker', event)
      )
    }
    getMessage()
  }, [])

  return (
    <>
      <NextSeo
        title="Minhas Viagens"
        description="Um projeto simples para mostrar meus lugares favoritos do mundo"
        canonical="https://viagens.alangabriel.dev"
        openGraph={{
          url: 'https://viagens.alangabriel.dev',
          title: 'Minhas Viagens',
          description:
            'Um projeto simples para mostrar meus lugares favoritos do mundo',
          images: [
            {
              url:
                'https://thumbnail-poc.vercel.app/api/thumbnail.png?title=Minhas%20Viagens!&width=1280&height=720',
              width: 1280,
              height: 720,
              alt: 'Minhas Viagens'
            }
          ],
          site_name: 'Minhas Viagens'
        }}
      />
      <LinkWrapper href="/sobre">
        <InfoOutline size={32} aria-label="Sobre" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
