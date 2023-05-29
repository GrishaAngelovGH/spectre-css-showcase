import { render } from '@testing-library/react'

import Tooltips from './Tooltips'

test('should render Tooltips component', () => {
  const view = render(<Tooltips />)

  expect(view).toMatchSnapshot()
})