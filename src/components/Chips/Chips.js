const Chip = ({ title }) => (
  <span className='chip'>
    {title}
    <a href='#' className='btn btn-clear' aria-label='Close' role='button'></a>
  </span>
)

const Chips = () => {
  const chips = ['Item 1', 'Item 2', 'Item 3']

  return (
    <div className='columns mt-2'>
      <div className='column col-4'>
        {
          chips.map((v, i) => (
            <Chip key={i} title={v} />
          ))
        }
      </div>
    </div>
  )
}

export default Chips