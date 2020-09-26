import React from "react";
import "./Wallet.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { userData, transactions } from "./data.js";
import { useState } from "react";
import { useEffect } from "react";

const Wallet = (props) => {
  const [details, getDetails] = useState({});

  const getUserData = () => {
    const profile = userData[0];
    getDetails(profile);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="Wallet">
      <div className="WalletHero">
        <div className="HeroTexts">
          <h1 className="HeroHeading">Wallet</h1>
          <p className="SmallText">{`Hello, ${details.firstName} Welcome Back`}</p>
        </div>
        <div className="HeroBtn">
          <Button Title="Fund Wallet" />
        </div>
      </div>
      <div className="WalletBody">
        <div className="WalletCard WalletAccount">
          <div className="CardItems">
            <h5 className="CardHeading">Repify Balance</h5>
            <h3 className="WalletBalance">{`# ${details.balance}`} </h3>
            <p className="WalletLink">
              <Link className="BlueColor CardLink" to="/found">
                Fund Account
              </Link>
            </p>
          </div>
        </div>
        <div className="WalletCard WalletTrans">
          <div className="CardItems">
            <h5 className="CardHeading">Last Transactions</h5>
            {transactions.map((transaction) => (
              <div className="LastTransact">
                <div className="CardHeading Bold"> {transaction.type} </div>
                {transaction.type === "Sent" ? (
                  <p className="Transact">
                    <span className="Money RedColor">{transaction.amount}</span>{" "}
                    from {transaction.vendor}
                  </p>
                ) : (
                  <p className="Transact">
                    <span className="Money BlueColor">
                      {transaction.amount}
                    </span>{" "}
                    to {transaction.vendor}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="ProfileCard">
          <div className="CardItems">
            <h3 className="UserName">
              {details.firstName} {details.SecondName}
            </h3>
            <h1 className="RepifyId">{details.userId}</h1>
            <p className="AccountType">{details.accountType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
