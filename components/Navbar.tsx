import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
    return ( 
        <nav>
            <div className="logo">
                {/* <Image src="/palm.jpg" alt ="logo" width={128} height={70}/> */}
                <h1>Logo ..</h1>
                <div className="links">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/students'>Students</Link>
                </div>
                
            </div>
            
        </nav>
     );
}

export default Navbar;