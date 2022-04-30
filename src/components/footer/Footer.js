import React, { useState } from 'react'
import './FooterStyles.css'
import '../../assets/templateStyles.css'
import { Button, Tooltip } from 'antd'
import { CopyFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons/lib/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'


export default function Footer() {

    const [isCopied, setIsCopied] = useState(false);

    const copyFunction = () => {
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }


    return (
        <section className='footer-section'>
            <footer className='template-width'>
                <div>
                    <Tooltip placement='top' title={isCopied === true ? 'Copied to clipboard!' : 'Copy to clipboard'} >
                        <CopyToClipboard text='applewackjack@gmail.com' onCopy={copyFunction}>
                            <Button icon={<CopyFilled />} type='link'>applewackjack@gmail.com</Button>
                        </CopyToClipboard>
                    </Tooltip>
                </div>
                <div>
                    <Button type='link' target='_blank' href='https://github.com/Agunovvski' icon={<GithubFilled />} />
                    <Button type='link' target='_blank' href='' icon={<LinkedinFilled />} />
                </div>
            </footer>
            <div className='template-width credits'>
                <h5>Website written by me using React.JS and Sanity.io</h5>
            </div>
        </section>
    )
}
