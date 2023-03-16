import Link from "next/link"
import style from "../styles/Header.module.css"
const Header = () => {
    return (
        <div>
            <ul className={style.main} >
                <li>
                    <Link href="/">Logo</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>

    )
}

export default Header