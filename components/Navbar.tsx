import Container from './Container'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Container>
      <nav className="text-white flex items-center py-4 gap-x-5 font-medium">
        <Link href="/">
          <a className="mr-auto font-black text-base md:text-lg flex items-center">
            <svg
              className="fill-current mr-2"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 30H4C3.46973 29.9995 2.96133 29.7886 2.58637 29.4136C2.21141 29.0387 2.00053 28.5303 2 28V24C2.00053 23.4697 2.21141 22.9613 2.58637 22.5864C2.96133 22.2114 3.46973 22.0005 4 22H12C12.5303 22.0005 13.0387 22.2114 13.4136 22.5864C13.7886 22.9613 13.9995 23.4697 14 24V28C13.9995 28.5303 13.7886 29.0387 13.4136 29.4136C13.0387 29.7886 12.5303 29.9995 12 30V30ZM4 24V28H12V24H4Z" />
              <path d="M28 20H12C11.4697 19.9995 10.9613 19.7886 10.5864 19.4136C10.2114 19.0387 10.0005 18.5303 10 18V14C10.0005 13.4697 10.2114 12.9613 10.5864 12.5864C10.9613 12.2114 11.4697 12.0005 12 12H28C28.5303 12.0005 29.0387 12.2114 29.4136 12.5864C29.7886 12.9613 29.9995 13.4697 30 14V18C29.9995 18.5303 29.7886 19.0387 29.4136 19.4136C29.0387 19.7886 28.5303 19.9995 28 20ZM12 14V18H28V14H12Z" />
              <path d="M16 10H4C3.46973 9.99947 2.96133 9.78859 2.58637 9.41363C2.21141 9.03867 2.00053 8.53027 2 8V4C2.00053 3.46973 2.21141 2.96133 2.58637 2.58637C2.96133 2.21141 3.46973 2.00053 4 2H16C16.5303 2.00053 17.0387 2.21141 17.4136 2.58637C17.7886 2.96133 17.9995 3.46973 18 4V8C17.9995 8.53027 17.7886 9.03867 17.4136 9.41363C17.0387 9.78859 16.5303 9.99947 16 10V10ZM4 4V8H16V4H4Z" />
            </svg>
            ARES | Way
          </a>
        </Link>

        <Link href="/">
          <a className="hidden sm:block">Nil</a>
        </Link>
        <Link href="/">
          <a className="p-2 rounded duration-200 bg-gradient-to-l from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500">
            4now
          </a>
        </Link>
      </nav>
    </Container>
  )
}

export default Navbar
