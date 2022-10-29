import './App.css';

function App() {
  
  
  return (
    <div className="App">
      
      <div className="main">
          <div className="profile">
          <div className="icon"><img className='dot-icon' src="https://res.cloudinary.com/hamskid/image/upload/v1666976296/Icon_3_smnggl.png" alt="object not found" /><img className='share-icon' src="https://res.cloudinary.com/hamskid/image/upload/v1666976295/Icon_2_qlkvkj.png" alt="object not found"/></div>
            <img id="profile__img" src="https://res.cloudinary.com/hamskid/image/upload/v1666976131/profile__img_bepcus.png" alt="object not found"/>
            <p className="mont">Annotte Black</p>
            <p id="slack" style={{display:"none"}}>LawalH</p>
          </div>
          <div className="link">
            <p><button className="button mont" id="twitter" onClick={()=>window.location.href="https://twitter.com/LawalH_27"}>Twitter Link</button></p>
            <p><button className="button mont"   id="btn__zuri" onClick={()=>window.location.href="https://training.zuri.team/"}>Zuri Team</button></p>
            <p><button className="button mont"   id="book__python" onClick={()=>window.location.href="https://books.zuri.team"}>Zuri Books</button></p>
            <p><button className="button mont"   id="book__python" onClick={()=>window.location.href="https://books.zuri.team"}>Python Books</button></p>
            <p><button className="button mont"   id="pitch" onClick={()=>window.location.href="https://background.zuri.team"}>Background Check for coders</button></p>
            <p><button className="button mont"   id="book__design" onClick={()=>window.location.href="https://books.zuri.team/design-rules"}>Design Books</button></p>
          </div>
          <div className="social">
              <p className="slack-p"><img className="slack-social" src="https://cdn-icons-png.flaticon.com/512/2762/2762451.png" alt="object not found" /></p>
              <p><img  src="https://res.cloudinary.com/hamskid/image/upload/v1666976084/Icon_1_slgujk.png" alt="object not found" /></p>
          </div>
          <div className="footer">
            <h4 className="zuri"><span>Zuri</span><span className="empty-div"><img className="red-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIv8V9NkKb8y5UE3I3M3q4JNlp4pUKyat3p3eOacsUEGH_Vg97yaYxU0nk4tSK4yASQ8&usqp=CAU" alt="object not found"/></span><span>Internship</span></h4>
            <p className="hng">HNG Internship 9 Frontend Task</p>
            <p><img src="https://res.cloudinary.com/hamskid/image/upload/v1666976148/I4G_uuqtec.png" alt="object not found" /></p>
          </div>
      </div>
    </div>
  );
}

export default App;
