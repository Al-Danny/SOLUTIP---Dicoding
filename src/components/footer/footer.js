import React from "react";
import "../../style/footer.css";
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer () {

  return (
      <footer>
        <div className="down">
          <a href="#"><p className="cpy">&copy;SOLUTIP, 2022. ALL RIGHTS RESERVED</p></a>
          <div className="follow">
            <p className="flw">Follow kami di  <a href="#"><BsTwitter /></a><a href="#"><BsFacebook /></a><a href="#"><BsInstagram /></a><a href="#"><BsYoutube /></a></p>
          </div>
        </div>
      </footer>
  )
}

export default Footer;