import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

import LinkWrapper from 'components/LinkWrapper'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} arial-label="Fechar pagina" />
      </LinkWrapper>

      <S.Heading>Minhas Viagens</S.Heading>

      <S.Body>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per
          gatis num morreus. Casamentiss faiz malandris se pirulitá. Interagi no
          mé, cursus quis, vehicula ac nisi. Nullam volutpat risus nec leo
          commodo, ut interdum diam laoreet. Sed non consequat odio.
        </p>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo
          é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris,
          inteiris. Suco de cevadiss deixa as pessoas mais interessantis. Aenean
          aliquam molestie leo, vitae iaculis nisl.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
