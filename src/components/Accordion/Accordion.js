const Accordion = () => (
  <div className='columns mx-2'>
    <div className='column col-6 col-md-12'>
      <h3>Accordion</h3>

      <div className='accordion'>
        <input id='accordion-1' type='radio' name='accordion-radio' hidden checked readOnly className='d-none' />
        <label className='accordion-header c-hand' htmlFor='accordion-2'><i className='icon icon-arrow-right mr-1'></i>Elements</label>
        <div className='accordion-body'>
          <ul className='menu menu-nav'>
            <li className='menu-item'><a href='#accordions'>Element 1</a></li>
            <li className='menu-item'><a href='#accordions'>Element 2</a></li>
          </ul>
        </div>
      </div>

      <div className='accordion'>
        <input id='accordion-2' type='radio' name='accordion-radio' hidden='' className='d-none' />
        <label className='accordion-header c-hand' htmlFor='accordion-2'><i className='icon icon-arrow-right mr-1'></i>Layouts</label>
        <div className='accordion-body'>
          <ul className='menu menu-nav'>
            <li className='menu-item'><a href='#accordions'>Layout 1</a></li>
            <li className='menu-item'><a href='#accordions'>Layout 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Accordion