import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faMagnifyingGlass,faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Styles from './Header.module.scss'

import logo from '../../../Assets/Svg/logoROCKET.svg'
import logoReponsive from '../../../Assets/Svg/logoROCKET_ngang.svg'

const cx = classNames.bind(Styles)

function Header (){
    const [sliebarShow, setSliebar] = useState(false)

    // xu ly ham color title 
    const handleAddClass =  (e) =>{
        const listClass = e.target.parentElement.parentElement.querySelectorAll('li a')
        for(let i =0; i<listClass.length; i++){
            e.target !== listClass[i] ? listClass[i].id = '' : listClass[i].id = 'link_active'
        }
    }

    return(
        <div className={cx('wrapper')}>
            <div className={cx('container','header')}>
                    <Link to="/" className={cx('link_img1')}><img src={logo} alt='not '  className={cx('image1')} /></Link>
                    <Link to="/" className={cx('link_img2')}><img src={logoReponsive} alt='not '  className={cx('image2')} /></Link>
                <div className={sliebarShow? cx('content','content_active') : cx('content')}>
                    <ul className={cx('content_title')}>
                        <li className={cx('content_title-item')}
                            onClick={(e)=>{
                                setSliebar(false)
                                handleAddClass(e)
                            }}
                        >
                            <Link to="/" className={cx('link')} id="link_active" >home</Link>
                        </li>
                        <li className={cx('content_title-item')} 
                            onClick={(e)=>{
                                setSliebar(false)
                                handleAddClass(e)
                            }}
                            >
                            <Link to="/" className={cx('link')}>news</Link>
                        </li>
                        <li className={cx('content_title-item')} 
                            onClick={(e)=>{
                                setSliebar(false)
                                handleAddClass(e)
                            }}>
                            <Link to="/" className={cx('link')}>rocket's life</Link>
                        </li>
                        <li className={cx('content_title-item')} 
                            onClick={(e)=>{
                                setSliebar(false)
                                handleAddClass(e)
                        }}>
                            <Link to="/" className={cx('link')}>play with us</Link>
                        </li>
                        <li className={cx('content_title-item')} 
                            onClick={(e)=>{
                                setSliebar(false)
                                handleAddClass(e)
                            }}>
                            <Link to={'/workus'} className={cx('link')}>work with us</Link>
                        </li>
                        <li className={cx('content_title-item')} 
                            onClick={(e)=>{
                                setSliebar(false)
                                handleAddClass(e)
                            }}>
                            <Link to="/" className={cx('link')}>publish with us</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon_search1')} />
                    <button className={cx('search_language')}>
                        <p className={cx('en','language')}>EN</p>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('icon_language')} />
                        <p className={cx('vn','language')}>VN</p>
                    </button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon_search')} />
                    <div className={cx('bar')} onClick={()=>{
                        sliebarShow? setSliebar(false): setSliebar(true)
                    }} >
                        <FontAwesomeIcon icon={faBars}  className={ !sliebarShow? cx('active') :  cx('none')  }/>
                        <FontAwesomeIcon icon={faX}  className={ sliebarShow? cx('active') : cx('none') } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header