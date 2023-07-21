import {FC} from "react"

type Props = {
    link: string
    linkName: string
}

export const Dropdown: FC<Props> = () => {

    return (
        <ul className="subnav">
            <li className="subnav__li">
                <a href="#">
                    <p className="subnav__a"></p>
                </a>
            </li>
        </ul>
    )
}
