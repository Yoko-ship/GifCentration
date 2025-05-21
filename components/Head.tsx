import React from 'react'
import Link from 'next/link'
import classes from "@/app/page.module.css"
function Head() {
  return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <Link href="/">Главное меню</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Head