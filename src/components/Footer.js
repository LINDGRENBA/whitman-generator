import React from 'react';

function Footer() {
  const footerStyles = {
    padding: '2rem',
    textAlign: 'center',
    fontSize: '1.2rem',
    backgroundColor: '#FFF',
    opacity: '.75'
  }

  return (
    <footer style={footerStyles}>
    <p>&copy; Brittany Lindgren, 2020</p>
    <span id="photo-cred">Photo by <a href="https://unsplash.com/@iamtru?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Trust "Tru" Katsande</a> on <a href="https://unsplash.com/s/photos/poetry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  </footer>
  );
}

export default Footer;