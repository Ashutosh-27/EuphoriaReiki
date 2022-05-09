import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer_inner">
                <div className='part1'>
                    <div className="img_container">
                        <img src='./user.png' alt='user' />
                    </div>

                    <div className='content'>
                        So I encourage you all to take benefits of my Reiki services and transform yourself to positivity , healthy and blissful life .
                    </div>
                </div>
                <div className="part2">
                    <h4>For consultation please prebook and reach <br /> out to me on.</h4>
                    <ul>
                        <li><i className="bi bi-whatsapp"></i> +91 xxxxx xxxxx </li>
                        <li> <i className="bi bi-instagram"></i> pitaleDipali</li>
                        <li><i className="bi bi-envelope"></i> pitaledipali@gamil.com</li>
                        <li><i className="bi bi-twitter"></i> Dipali Pitale</li>
                    </ul>
                </div>
            </div>
            <div className="copy_right">
                <h5>All copyrights reserved - Dipali Pitale</h5>
            </div>
        </footer>
    )
}

export default Footer