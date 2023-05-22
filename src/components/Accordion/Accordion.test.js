import { render } from '@testing-library/react'

import Accordion from './Accordion'

test('should render Accordion component', () => {
  const view = render(<Accordion />)

  expect(view).toMatchSnapshot()
})