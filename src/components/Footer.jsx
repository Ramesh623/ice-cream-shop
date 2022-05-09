import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <h1 className='footer-logo'>Mr. Ice Cream</h1>
            <p className='footer-desc'>Moved waters rule gathering Make cattle 
                signs. Forth hath very morning, in so For. 
                Forth had shall whales male teh saw life For, every form given dry darkness after one.
                Moving great signs kind which wherein she'd very darkness saw saw, 
                for meat divide TEMPyou're may days shall.</p>
            <div className='social-container'>
                <div className='social-icon1'>
                    <Facebook/>    
                </div>

                <div className='social-icon2'>
                    <Instagram/>                    
                </div>

                <div className='social-icon3'>
                    <Twitter/>
                </div>

                <div className='social-icon4'>
                    <Pinterest/>
                </div>

            </div>

        </div>
        <div className='footer-center'>
            <h3 className='footer-title'>Useful Links</h3>
            <ul className='footer-list'>
                <li className='footer-listitem'>Home</li>
                <li className='footer-listitem'>Cart</li>
                <li className='footer-listitem'>Kids Special</li>
                <li className='footer-listitem'>Young Special</li>
                <li className='footer-listitem'>My Account</li>
                <li className='footer-listitem'>Terms</li>
            </ul>
        </div>

        <div className='footer-right'>
            <h3 className='footer-title'>Contact</h3>
            <div className='footer-contact-item'><Room style={{marginRight:"5px"}}/>NO:45, New Shopping Comple, Kurunegala</div>
            <div className='footer-contact-item'><Phone style={{marginRight:"5px"}}/>037 22 22 000</div>
            <div className='footer-contact-item'><MailOutline style={{marginRight:"5px"}}/>mricecream@gamil.com</div>
            <img className='payment-details' src="https://dogsonthestreets.org/wp-content/uploads/2021/07/payment-Capture.jpg" alt='Payment Details'/>
                        
        </div>

    </div>
    
  )
}

export default Footer;