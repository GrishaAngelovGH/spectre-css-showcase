const Card = () => (
  <div className='card'>
    <div className='card-header'>
      <div className='card-title h5'>Apple</div>
      <div className='card-subtitle text-gray'>Software and hardware</div>
    </div>
    <div className='card-body'>To make a contribution to the world by making tools for the mind that advance humankind.</div>
    <div className='card-footer'>
      <button className='btn btn-primary'>Buy</button>
    </div>
  </div>
)

const Popovers = () => {
  const popovers = ['', 'popover-right', 'popover-bottom', 'popover-left']

  return (
    <div className='columns' style={{ padding: 100 }}>
      {
        popovers.map((v, i) => (
          <div key={i} className='column col-3 col-sm-6 col-mx-auto'>
            <div className={`popover ${v}`}><a className='btn btn-primary' href='#popovers'>{v.length ? v : 'top popover'}</a>
              <div className='popover-container'>
                <Card />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Popovers