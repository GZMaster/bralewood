import React from "react";
import "./Interlude.scss";
import Pic from "../../assets/bralewood assets/financialDecisionsImage.png";
import { FiCheckCircle } from "react-icons/fi";

const Interlude = () => {
	return (
		<section to="interlude" className="I_Container">
			<div className="I_Wrapper">
				<div className="I_Left">
					<img src={Pic} alt="" />
				</div>
				<div className="I_Right">
					<h3 className="I_Title">
						Why we are the best for your
						<span className="I_Orange"> financial</span> decisions.
					</h3>
					<div className="I_Item_Wrapper">
						<div className="I_Item">
							<div className="I_ItemIcon">
								<FiCheckCircle />
							</div>
							<span>
								We are a company rooted in integrity; you can trust us.
							</span>
						</div>
						<div className="I_Item">
							<div className="I_ItemIcon">
								<FiCheckCircle />
							</div>
							<span>
								We pride ourselves on making transactions as swiftly as
								possible.
							</span>
						</div>
						<div className="I_Item">
							<div className="I_ItemIcon">
								<FiCheckCircle />
							</div>
							<span>
								Our services are rendered at the highest degree of excellence.
							</span>
						</div>
						<div className="I_Item">
							<div className="I_ItemIcon">
								<FiCheckCircle />
							</div>
							<span>
								We offer competitive pricing to ensure you have the overall best
								experience with us.
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Interlude;
