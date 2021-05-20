import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import style from './loading.module.css'
import loadingSVG from '../../../assets/images/loading.svg'

const Loading = ({ subtitle }) => {
    return (
        <div className={style.wrapper}>
            <img className={style.loading_svg} src={loadingSVG} />
            {subtitle?<p>{subtitle}</p>:<p>Loading</p>}
        </div>
    )
}

export default Loading;