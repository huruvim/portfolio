import React, {CSSProperties} from 'react';
import style from './SocialNetworks.module.scss'

type PropsType = {
    socialNetwork?: CSSProperties
}

export const SocialNetwork:React.FC<PropsType> = (props) => {
    return (
        <div className={style.socialContainer}>
            <div style={props.socialNetwork} className={style.social} />
        </div>
    )
}

