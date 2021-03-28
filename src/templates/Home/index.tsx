import { NextSeo } from 'next-seo'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import dynamic from 'next/dynamic'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
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
