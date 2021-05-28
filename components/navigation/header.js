import Link from 'next/link';

const Header = () => {
    return(
        <>
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow border-light">
                    <h5 className="my-0 mr-md-auto font-weight-normal">Hokusai</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link href="/">
                            <a className="p-2 text-light">Home</a>
                        </Link>
                        <Link href="/bio">
                            <a className="p-2 text-light">Bio</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;