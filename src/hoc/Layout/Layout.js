import React, { PureComponent } from "react";
import Footer from "../../components/Layout/Footer/Footer";
import SocialBar from "../../components/Layout/SocialBar/SocialBar";
import LoginButton from "../../components/UI/LoginButton/LoginButton";
import Navigation from "../../components/Layout/Navigation/Navigation";

class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <SocialBar />
        <Navigation />
        {this.props.children}
        <Footer />
        <div className="fixed right-0 bottom-0">
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Layout;
