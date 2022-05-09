import { Send } from '@mui/icons-material';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='news-container'>
        <h1 className='news-title'>Newsletter</h1>
        <div className='news-desc'>Get timely updates from your favorite products</div>
        <div className='input-container'>
            <input className='news-input' placeholder='Your email' type="text" />
            <button className='news-button'>
                <Send/>
            </button>
        </div>

    </div>
  )
}

export default Newsletter