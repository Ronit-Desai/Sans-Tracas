import React from "react";

class ComponentPR extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-10">
          <h1>Platform Requirements</h1>
          <p>
            Please find below a look-up table detailing the requirements your
            personal/work computer, smartphone, or tablet will need to satisfy
            to use ‘Sans Tracas.’
          </p>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row">Android:</th>
                <td>
                  Requires Android 6.0 Marshmallow or later + Google Chrome web
                  browser.
                </td>
              </tr>
              <tr>
                <th scope="row">Mac:</th>
                <td>
                  Requires OS X Yosemite or later + Google Chrome web browser.
                  <br />
                  But some MacBooks may still not work. For that, you will have
                  to go to "About this Mac" / "System Report" / "Bluetooth" and
                  verify that Bluetooth Low Energy is supported.
                  <br />
                  And if it is not supported, you will have to use a special
                  Bluetooth Low Energy (BLE) dongle,{" "}
                  <a href="https://www.silabs.com/wireless/bluetooth/bluegiga-low-energy-legacy-modules/device.bled112">
                    BLED112
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">Linux:</th>
                <td>
                  Requires Kernel 3.19+ and BlueZ 5.41+ installed + Google
                  Chrome web browser.
                  <br />
                  <a href="https://acassis.wordpress.com/2016/06/28/how-to-get-chrome-web-bluetooth-working-on-linux/">
                    Read How to get Chrome Web Bluetooth working on Linux for
                    further details.
                  </a>{" "}
                  <br />
                  Note that Bluetooth daemon needs to run with experimental
                  interfaces if BlueZ version is lower than 5.43: <br />
                  <span className="bg-dark text-white p-1 mt-5">
                    sudo /usr/sbin/bluetoothd -E
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Windows:</th>
                <td>
                  Requires Windows 10 version 1706 (Creators Update) or later +
                  Google Chrome web browser.
                </td>
              </tr>
              <tr>
                <th scope="row">iPhone/iPad:</th>
                <td>
                  Requires iOS 11.0 or later and{" "}
                  <a href="https://apps.apple.com/us/app/bluefy-web-ble-browser/id1492822055">
                    Bluefy
                  </a>{" "}
                  browser (free in app store).
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Note: To use all the features of ‘Sans Tracas,’ you will need to
            access the platform using the Google Chrome browser on your devices,
            except for iOS devices, where you will need to use Bluefy – Web BLE
            Browser by PNN SOFT instead of Google Chrome. The platform will not
            work with any other major browsers such as Safari, Mozilla Firefox,
            or Microsoft Edge (It only works with browsers supporting
            Web-Bluetooth).
          </p>
        </div>
      </>
    );
  }
}

export default ComponentPR;
