import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ActiveLink = ({
  activeClassName = '',
  children,
  className,
  href,
  inactiveClassName = '',
  ...props
}) => {
  const router = useRouter()
  const isActive = router.pathname === href
  const classNames = cn(className, { [activeClassName]: isActive, [inactiveClassName]: !isActive })
console.log(process.env.BASE_PATH)
  return (
    <Link href={href} as={`${process.env.BASE_PATH}${href}`}>
      <a className={classNames}>
        {children}
      </a>
    </Link>
  )
}

export default ActiveLink
