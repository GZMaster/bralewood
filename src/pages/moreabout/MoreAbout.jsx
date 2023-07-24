import React, { useState } from "react";
import "./MoreAbout.scss";
import One from "../../assets/bralewood assets/Mask groupmoreabout-welcome.png";
import { FiCheckCircle } from "react-icons/fi";
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
						An opportunity exists in Nigeria at the moment to take advantage of
						the stable foreign exchange market and the potential for increased
						micro lending spurred by the growth objectives of the current
						government and create a company that can impact the financial
						intermediation. Bralewood Investment Limited was designed to address
						this market need and fill the market gap for a technology-led
						financial intermediation company that can meet the needs and
						aspirations of both sell-side and buy-side customers in the foreign
						exchange market as well as other financial intermediation customers
						in an efficient and cost-effective manner. The convergence of these
						two opportunities has led to the unique directional philosophy for
						the company as described below:
					</p>
					<p>
						Vision: To be a leading provider of financial services in Africa
						This means that our big hair goal or desired end-state of the
						initial planning horizon shall be to be a leading provider of
						financial services in Africa and the key elements of this vision are
						as following:
					</p>
					<p>
						“a leading” – this means that we would be a pacesetter, we would be
						associated with unequalled growth, that would position us at the
						forefront of whatever space or industry in which we play. “financial
						services” – this means that our primary focus would be services in
						the financial space. Whatever interest we decide to enter into,
						different from financial services would be peripheral to our
						financial services business.
					</p>
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
							To achieve our vision of ‘To be a leading provider of financial
							services in Africa’, we have defined a set of acceptable
							behavioral attributes we expect to guide our people, (Directors,
							Management and staff). Our future success will therefore be built
							on the foundation of these core values:
						</p>
						<div className="I_Item_Wrapper">
							<div className="I_Item">
								<div className="I_ItemIcon">
									<FiCheckCircle />
								</div>
								<span>
									Our people shall demonstrate the highest standards of ethical
									principles and soundness of moral character which shall not be
									called to question at anytime  Passion
								</span>
							</div>
							<div className="I_Item">
								<div className="I_ItemIcon">
									<FiCheckCircle />
								</div>
								<span>
									We will exhibit unparalleled zeal in serving our clients and
									other stakeholders and we will be true to Bralewood’s vision
									to be a leading financial services
								</span>
							</div>
							<div className="I_Item">
								<div className="I_ItemIcon">
									<FiCheckCircle />
								</div>
								<span>
									Our people shall develop and exhibit the highest standard of
									skills and competencies in conducting business with customers
									and other stakeholders
								</span>
							</div>
							<div className="I_Item">
								<div className="I_ItemIcon">
									<FiCheckCircle />
								</div>
								<span>
									Reliability that builds trust and loyalty will be at the heart
									of our relationships with our clients. We will not be
									associated with the usual sub-standard service that
									characterizes some of the companies operating in the industry.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="A_Board">
				<div className="Board_Title">Our Board Of Directors</div>
				<BoardCard items={Data} />
			</div>
			<div className="A_Contact">
				<p className="A_Contact_Text">
					We are committed to our Clients’ Growth andImprovement, and introduce
					world-class proven Innovations, Ideas, Products and Services to suit
					their needs. With our team of experts in various fields, our aim is to
					create value for our clients and their organizations. We will ensure
					that our unique services are delivered as promised.
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
