const Bar = () => (
  <div className='bar'>
    <div className='bar-item tooltip' data-tooltip='25%' role='progressbar' style={{ width: '25%' }}>25%</div>
    <div className='bar-item tooltip' data-tooltip='15%' role='progressbar' style={{ width: '15%', background: '#817fe3' }}>15%</div>
    <div className='bar-item tooltip' data-tooltip='10%' role='progressbar' style={{ width: '10%', background: '#aaa9eb' }}>10%</div>
    <div className='bar-item tooltip' data-tooltip='15%' role='progressbar' style={{ width: '15%' }}>15%</div>
  </div>
)

export default Bar