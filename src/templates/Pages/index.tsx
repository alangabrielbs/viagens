import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

import LinkWrapper from 'components/LinkWrapper'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} arial-label="Fechar pagina" />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body dangerouslySetInnerHTML={{ __html: body }} />
    </S.Content>
  )
}

export default PageTemplate
