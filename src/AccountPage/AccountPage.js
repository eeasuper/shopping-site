import React from 'react';
import './AccountPage.css'
import {Link} from 'react-router-dom';

const AccountPage =(props)=>{



  return(
    <section className="account-page">
      <div className="page-width">
        <div className="account-header">
          <h1>
            My Account
          </h1>
          <Link to="/" onClick={()=>props.logout()}>
            Log out
          </Link>
        </div>
        <div className="account-details">
          <h2>Order History</h2>
          <p>You haven't placed any orders yet.</p>
        </div>
      </div>
    </section>
  )
}

export default AccountPage