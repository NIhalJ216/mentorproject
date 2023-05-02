import React from 'react';
import zoho from '../../Assets/zoho.png';

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{ borderBottom: '1px solid #e9e9e9' }}>
      <div className="container-fluid" style={{ justifyContent: 'flex-start' }}>
        <img src={zoho} alt="zohoLogo" style={{ height: '3rem' }} />
        <a className="navbar-brand" href="#">
          People
        </a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default TopNav;
