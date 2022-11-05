import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
export const Home=()=> {
  return (
      <div className="main">
          <div className="profile">
          <div className="icon"><img className='dot-icon' src="https://res.cloudinary.com/hamskid/image/upload/v1666976296/Icon_3_smnggl.png" alt="object not found" /><img className='share-icon' src="https://res.cloudinary.com/hamskid/image/upload/v1666976295/Icon_2_qlkvkj.png" alt="object not found"/></div>
            <div className="profile-box">
              <img id="profile__img" src="https://res.cloudinary.com/hamskid/image/upload/v1666976131/profile__img_bepcus.png" alt="object not found"/>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-camera camera" viewBox="0 0 16 16">
                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>
            </div>
            <p className="mont">LawalH</p>
            <p className="twitter"><a href="https://twitter.com/LawalH_27"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a> @LawalH_27
            </p>
            <p id="slack" style={{display:"none"}}>LawalH</p>
          </div>
          <div className="link">
            <p className="button mont"><a href="https://twitter.com/LawalH_27" id="twitter">Lawal Hamzat</a></p>
            <p className="button mont"><a href="https://training.zuri.team/"   id="btn__zuri">Zuri Team</a></p>
            <p className="button mont"><a href="https://books.zuri.team"   id="book__python">Zuri Books</a></p>
            <p className="button mont"><a href="https://books.zuri.team"   id="book__python">Python Books</a></p>
            <p className="button mont"><a href="https://background.zuri.team"   id="pitch">Background Check for coders</a></p>
            <p className="button mont"><a href="https://books.zuri.team/design-rules"   id="book__design">Design Books</a></p>
            <p className="button mont"><Link to="/contact" id="contact">Contact Me</Link></p>
          </div>
          <div className="social">
              <p className="slack-p"><img className="slack-social" src="https://cdn-icons-png.flaticon.com/512/2762/2762451.png" alt="object not found" onClick={()=>window.location.href=""}/></p>
              <p><img  src="https://res.cloudinary.com/hamskid/image/upload/v1666976084/Icon_1_slgujk.png" alt="object not found" onClick={()=>window.location.href=""}/></p>
          </div>
          <Footer/>
      </div>
  );
}
