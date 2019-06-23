import ActiveLink from '../ActiveLink'

const Header = () => (
  <header className='py2 px1 center'>
    <img
      alt='NextJS'
      src={`${process.env.BASE_PATH}/static/next.png`}
      style={{ maxHeight: '10rem' }}
    />
    <ol className='list-reset flex justify-center'>
      <li className='px1'>
        <ActiveLink
          activeClassName='border-bottom'
          href='/'>
          Home
        </ActiveLink>
      </li>
      <li className='px1'>
        <ActiveLink
          activeClassName='border-bottom'
          href='/about'>
          About
        </ActiveLink>
      </li>
      <li className='px1'>
        <ActiveLink
          activeClassName='border-bottom'
          href='/faqs'>
          FAQs
        </ActiveLink>
      </li>
    </ol>
  </header>
)

export default Header
