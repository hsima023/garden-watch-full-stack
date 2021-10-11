import React from "react";
import s from "./ErrorPage.module.scss";

import errorImage from "../../assets/errorImage.svg"
import FooterIcon from "../../components/Icons/FooterIcon.js";

class ErrorPage extends React.Component {
  render() {
    return (
      <div className={s.pageContainer}>
        <div className={s.errorContainer}>
          <h1 className={s.errorCode}>404</h1>
          <p className={s.errorInfo}>
            Oops. Looks like the page you're looking for no longer exists
          </p>
          <p className={s.errorHelp}>
            WORK IN PROGRESS
          </p>
          <p className={s.errorHelp}>
            WE APOLOGIZE FOR ANY INCONVENIENCE CAUSED
          </p>
        </div>
        <div className={s.imageContainer}>
          <img className={s.errorImage} src={errorImage} alt="Error page" width="80" />
        </div>
        <div className={s.footer}>
          <span className={s.footerLabel}>2021 &copy; GardenWatch. Hand-crafted & Made with</span>
          <FooterIcon />
        </div>
      </div>
    );
  }
}

export default ErrorPage;
