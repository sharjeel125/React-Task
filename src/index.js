import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Name(props) {
  return (
    <>

      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary" >
          <div className="container-fluid">
            <a className="navbar-brand" href="/" id='nav'>facebook</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div class="card" id="cover" >
        <img src="https://source.unsplash.com/user/erondu/600x300" className="card-img-top" alt="..." id="cover2" />
        <img src="https://source.unsplash.com/user/erondu/1600x900" className="card-img-top" alt="..." id="cover3" />

      </div>

      <br />
      <div className="card" id="card">
        <br />
        <div id="target" >
          <img id="profile" src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.6435-9/133793770_3049086585408577_563939427986172908_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=bLoX6NW8hLYAX_chI5K&_nc_ht=scontent.fkhi2-3.fna&oh=181a1fe1b316122717c8417954604126&oe=615462ED" className="img-fluid" alt=""></img>

          <br /> {props.name} <br /> {props.date}
        </div>
        <br /> <br /> <br /> <br />
        <div class="card-body">
          <p class="card-text">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit”.</p>
        </div>
        <img id="post" src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.6435-9/133793770_3049086585408577_563939427986172908_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=bLoX6NW8hLYAX_chI5K&_nc_ht=scontent.fkhi2-3.fna&oh=181a1fe1b316122717c8417954604126&oe=615462ED" className="img-fluid" alt=""></img>

      </div>

    </>
  );
}

ReactDOM.render(<Name name="Muhammad Sharjeel" date="12/2/2019" />, document.getElementById('root'));
