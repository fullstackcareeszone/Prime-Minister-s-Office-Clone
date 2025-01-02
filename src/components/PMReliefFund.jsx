import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footerbbottom";

const PMReliefFund = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-5 fw-bold">
          Prime Minister’s Relief Fund For Ghaza and Lebanon (PMRFGL)
        </h2>

        <div className="card border-0 shadow-lg rounded-3">
          <div className="card-body">
            <h4 className="card-title text-primary mb-4">
              Procedure for Remittance to “Prime Minister’s Relief Fund For
              Ghaza and Lebanon (PMRFGL)”
            </h4>

            <h5 className="text-secondary mb-3">
              A. Donations by Non-Resident/Overseas Pakistani
            </h5>
            <ol className="mb-4">
              <li>
                An overseas Pakistani from any jurisdiction may remit donations
                to the subject fund either through wire transfer or by using the
                services of Money Service Bureaus (MSBs), Money Transfer
                Operators (MTOs), or Exchange Houses (EHs).
              </li>
              <li>
                The donor shall provide the following beneficiary details to
                their respective banker, MSB, MTO, or EH:
                <table className="table table-bordered mt-3">
                  <tbody>
                    <tr>
                      <th>Description</th>
                      <th>Details</th>
                    </tr>
                    <tr>
                      <td>Bank</td>
                      <td>National Bank of Pakistan</td>
                    </tr>
                    <tr>
                      <td>Branch</td>
                      <td>
                        NBP Main Branch, NBP Head Office Building, Talpur Road,
                        Karachi
                      </td>
                    </tr>
                    <tr>
                      <td>Title of Account</td>
                      <td>PMRFGL</td>
                    </tr>
                    <tr>
                      <td>IBAN</td>
                      <td>PK78NBPA0002004256629006</td>
                    </tr>
                    <tr>
                      <td>SWIFT CODE</td>
                      <td>NBPAPKKAMBR</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                The donor may provide their personal details to the banker
                and/or MSB, MTO, or EH for incorporation in field 72 (Sender to
                Receiver information) of the SWIFT message for the purpose of
                record.
              </li>
            </ol>

            <h5 className="text-secondary mb-3">
              B. Donations by Resident Pakistani
            </h5>
            <ol>
              <li>
                Resident Pakistanis may deposit their donations at the counters
                of any branch of a commercial or microfinance bank, or through
                cheques or digital means for credit to the account of the Fund
                as per the following details:
                <table className="table table-bordered mt-3">
                  <tbody>
                    <tr>
                      <th>Description</th>
                      <th>Details</th>
                    </tr>
                    <tr>
                      <td>Bank</td>
                      <td>State Bank of Pakistan</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>SBP Main Building, I. I. Chundrigar Road, Karachi</td>
                    </tr>
                    <tr>
                      <td>Title of Account</td>
                      <td>PM Relief Fund for Ghaza and Lebanon</td>
                    </tr>
                    <tr>
                      <td>IBAN</td>
                      <td>PK11SBPD0000001111114292</td>
                    </tr>
                    <tr>
                      <td>RAAST ID</td>
                      <td>01111114292</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PMReliefFund;
