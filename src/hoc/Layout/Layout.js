import React, { PureComponent } from "react";
import Footer from "../../components/Layout/Footer/Footer";
import SocialBar from "../../components/Layout/SocialBar/SocialBar";

class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <SocialBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
