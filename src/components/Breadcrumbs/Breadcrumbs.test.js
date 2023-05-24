import { render } from '@testing-library/react'

import Breadcrumbs from './Breadcrumbs'

test('should render Breadcrumbs component', () => {
  const view = render(<Breadcrumbs />)

  expect(view).toMatchSnapshot()
})