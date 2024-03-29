import React, { useState } from "react";
import "./MoreAbout.scss";
import One from "../../assets/bralewood assets/Mask groupmoreabout-welcome.png";
// import { FiCheckCircle } from "react-icons/fi";
import Pic from "../../assets/bralewood assets/Mask groupmoreabout-values1.png";
import Pic2 from "../../assets/bralewood assets/Mask groupmoreabout-values2.png";
import BoardData from "../../Data/BoardData";
import BoardCard from "../../components/Board Card/BoardCard";
import { NavLink } from "react-router-dom";
import BankLogo from "../../assets/bralewood assets/Central Bank Logo.png";
const MoreAbout = () => {
	const [Data] = useState(BoardData);
	return (
		<section>
			<div className="About_Hero">
				<h4>
					To promise world-class financial services, through sustainable
					business practices
				</h4>
			</div>
			<div className="A_Intro">
				<div className="About_Text_Wrap">
					<div className="A_Text_Title">WELCOME TO</div>
					<h3 className="A_Text_Header">
						<span className="A_Orange">BRALE</span>
						<span className="A_Blue">WOOD</span>
						<br />
						INVESTMENTS LTD
					</h3>
					<p>
						Bralewood Investments Limited is a technology-led financial
						intermediation company that can meet the needs and aspirations of
						both sell-side and buy-side customers in the foreign exchange market
						as well as other financial intermediation customers in an efficient
						and cost-effective manner. The convergence of these two
						opportunities has led to the unique directional philosophy for the
						company as described below in Our Mission, Our Vision, and Core
						Values.
					</p>
					<h3>Our Mission</h3>
					<p>
						To provide world-class financial services, through sustainable
						business practices.
					</p>
					<h3>Our Vision</h3>
					<p>To be a leading provider of financial services in Africa</p>
				</div>
				<div className="About_Image_Wrap">
					<img src={One} className="A_Image" alt={One} />
				</div>
			</div>
			<div className="A_Interlude">
				<div className="I_Wrapper">
					<div className="A_I_Left">
						<img src={Pic} alt="" />
						<img src={Pic2} alt="" />
					</div>
					<div className="I_Right">
						<h3 className="I_Title">
							Our
							<span className="I_Orange"> Core </span> Values
						</h3>
						<p>
							Integrity, Passion, Professionalism, Reliability, Speed
							(I.P.P.R.S)
						</p>
						{/* <div className="I_Item_Wrapper">
							<div className="I_Item">
								<div className="I_ItemIcon">
									<FiCheckCircle />
								</div>
								<span>Integrity</span>
							</div>
							<div className="I_Item">
								<div className="I_ItemIcon">
									<FiCheckCircle />
								</div>
								<span>Passion</span>
							</div>
							<div className="I_Item">
								<div className="I_ItemIcon">
									<FiCheckCircle />
								</div>
								<span>Professionalism</span>
							</div>
							<div className="I_Item">
								<div className="I_ItemIcon">
									<FiCheckCircle />
								</div>
								<span>Reliability</span>
							</div>
							<div className="I_Item">
								<div className="I_ItemIcon">
									<FiCheckCircle />
								</div>
								<span>Speed (I.P.P.R.S)</span>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<div className="A_Board">
				<div className="Board_Title">Our Board Of Directors</div>
				<BoardCard items={Data} />
			</div>
			<div className="A_Contact">
				<p className="A_Contact_Text">
					We are committed to our Clients’ Growth and improvement by introducing
					world-class proven Innovations, Ideas, Products, and Services tailored
					to suit their needs. With our team of experts in various fields, our
					aim is to create value for our clients and their organizations. We
					will ensure that our unique services are delivered as promised.
				</p>
				<NavLink className="A_Btn" to={"/"}>
					Contact Us
				</NavLink>
				<div className="LicenseWrapper">
					<span>Licensed By :</span>
					<img src={BankLogo} alt="" />
				</div>
			</div>
		</section>
	);
};

export default MoreAbout;
