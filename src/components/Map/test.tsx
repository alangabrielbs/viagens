import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Balneario Veredas',
      slug: 'balneario-veredas',
      location: {
        latitude: -15.517041,
        longitude: -45.392175
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Trilha do Pelegrino',
      slug: 'trilha-do-pelegrino-em-serra-das-araras-mg',
      location: {
        latitude: -15.486469,
        longitude: -45.3705
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Balneario Veredas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Trilha do Pelegrino/i)).toBeInTheDocument()
  })
})
