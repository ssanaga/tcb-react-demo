'use client';

import React from 'react';

import './fu.css';


export default function ForgotUsernamePage() {
  return (
    <>
      <div className="container">
        <div className="left-side">

        </div>
        <div className="right-side">
          {/* Other content for right side */}
          <div className="form-section">
            <img src="https://media.licdn.com/dms/image/D560BAQEeER4O4b9WPw/company-logo_200_200/0/1689084667394?e=1699488000&v=beta&t=-pRTgCCu0qNdjYlRaoTn9mn5RtRjS1SXiOUjhQiB5Fc" alt="" />
            <h1>Forgot Username</h1>
            <form action="/send-email" method="post">
              <label htmlFor="email">Enter your email address:</label>
              <input className="form-input" type="email" id="email" name="email" />
              <p></p>
              <input className="form-buttons" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


