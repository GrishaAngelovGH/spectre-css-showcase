import { render } from '@testing-library/react'

import Modal from './Modal'

test('should render Modal component', () => {
  const view = render(<Modal />)

  expect(view).toMatchSnapshot()
})