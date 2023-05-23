import { render } from '@testing-library/react'

import SliderBar from './SliderBar'

test('should render SliderBar component', () => {
  const view = render(<SliderBar />)

  expect(view).toMatchSnapshot()
})