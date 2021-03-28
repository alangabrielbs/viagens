import Image from 'next/image'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'

type ImageProps = {
  id: string
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - Minhas Viagens`}
        description={
          place.description?.text ||
          'Um projeto simples para mostrar meus lugares favoritos do mundo'
        }
        canonical="https://viagens.alangabriel.dev"
        openGraph={{
          url: 'https://viagens.alangabriel.dev',
          title: `${place.name} - Minhas Viagens`,
          description:
            place.description?.text ||
            'Um projeto simples para mostrar meus lugares favoritos do mundo',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} arial-label="Voltar para o mapa" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image) => (
              <Image
                key={image.id}
                src={image.url}
                alt={place.name}
                width={image.width}
                height={image.height}
                quality={75}
                objectFit="cover"
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlacesTemplate
