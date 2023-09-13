import { Container } from './button-styles'
import { ButtonProps } from './button-types'

export const Button = ({ disabled, title }: ButtonProps) => {
  return (
    <Container {...{ disabled }} >
      {title}
    </Container>
  )
}


