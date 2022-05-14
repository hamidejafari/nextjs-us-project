import * as React from "react";
import { Container, Grid, Breadcrumbs, Link, Typography, Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import fetchLayoutData from "../utiles/fetchLayoutData";
import Breadcrumb from "../utiles/RichSnippets/Breadcrumb";

// components
import SiteLayout from "../layouts/SiteLayout";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

function reviewPolicy({ menuCategories, setting ,hostname}) {
	const breadcrumbItems = [
		{
		  "@type": "ListItem",
		  position: 1,
		  name: "Home",
		  item: hostname,
		},
		{
		  "@type": "ListItem",
		  position: 2,
		  name: "Review policy",
		},
	  ];
	
	return (
		<SiteLayout titleSeo="Review policy" menuCategories={menuCategories} setting={setting}>
			<Breadcrumb items={breadcrumbItems} />

			<div className={"w-100 coupons pt-0 pb-5"}>
				<Box className={"headerMaincat"}>
					<Container>
						<Grid container spacing={1} className={"w-100 m-0"}>
							<Grid
								xl={8}
								lg={9}
								md={10}
								sm={11}
								xs={12}
								mx={"auto"}
								textAlign={"center"}
								className={"p-2"}
							>
								<Typography
									variant="h4"
									component="h1"
									className={"fw-bolder my-4"}
								>
									Terms of Service
								</Typography>
								<Typography
									variant="h6"
									component="div"
									fontSize={15}
									className={"my-4"}
								>
									the following terms and conditions determine your access to and use of Brandsreviews website
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</Box>
				<Container>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{
							xs: 1,
							sm: 2,
							md: 3,
						}}
						className={"w-100 m-0"}
					>
						<Grid xs={12} className={"px-2 pb-3 pt-4"}>
							<div role="presentation" onClick={handleClick}>
								<Breadcrumbs aria-label="breadcrumb">
									<Link
										fontSize={15}
										underline="hover"
										color="inherit"
										href="/"
										display={"flex"}
										alignItems={"center"}
									>
										<HomeOutlinedIcon
											className={"me-2 mb-1"}
											fontSize="small"
										/>
										Home
									</Link>
									<Typography color="text.primary" fontSize={15}>
										Review policy
									</Typography>
								</Breadcrumbs>
							</div>
						</Grid>
						<Grid xs={12} className={"p-2"}>
							<Typography className={"p-1"} fontSize={17}>
								If you access or use our website, then it means that you are agreeing to these terms. Do not access or use our website if you are unwilling to be bound by the following terms and conditions
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-2 textSecondary"}
											fontSize={30}
											fontWeight={"bolder"}
											borderLeft={3}
											width={"max-content"}
										>
											DEFINITIONS
										</Typography>
									</ListItemText>
								</ListItem>
								<br/>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Parties
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								“You” and “your” refer to you, as someone who is using the website. A “user” is, therefore, someone who accesses, browses, scrapes, and generally uses the website. On the other hand,“We,” “us,” and “our” refer to Brandsreviews.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Content
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								“Content” includes text, photos, images, audio, video, and all other forms of data. “Your Content” means the content that you submit or transmit in connection with the website, for instance ratings, reviews, compliments, messages, and information that you publicly display or the content that is displayed in your account profile. “User Content” refers to the content that other users might submit or transmit in connection with the website. “Brandsreviews Content”, on the other hand, means the content that we create and make available in connection with our website. “Third Party Content” means the content that is produced by parties other than Brandsreviews or its users; it is made available in connection with the website. “Site Content” refers to all of the content that is available in connection with the website, such as Your Content, User Content, Third Party Content, and also Brandsreviews Content.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-2 textSecondary"}
											fontSize={30}
											fontWeight={"bolder"}
											borderLeft={3}
											width={"max-content"}
										>
											Using our website
										</Typography>
									</ListItemText>
								</ListItem>
								<br/>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Eligibility
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								To access or use our website, you must be 18 years or older and have the authority to enter into these terms. You may not access our website if you are our competitor or if we have already banned you from having access to the website.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Permission to use our website
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								We allow you to use Brandsreviews website if you agree with these Terms. Your use of the website is at your own risk; you may be exposed to the content that is inaccurate or objectionable.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Availability of the website
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Brandsreviews website might be changed, interrupted, or discontinued at any time without notice or liability to Brandsreviews.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Communications from Brandsreviews and other Users
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								By creating an account, you agree to receive some communications from Brandsreviews and other users and third parties, such as marketing communications, in contact with the website.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• User Accounts
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								You are supposed to create an account and provide certain information about yourself if you wish to use some of the features offered on the website. You are the one who is responsible for keeping the confidentiality of your account password. Moreover, you are responsible for all the activities occurring in connection with your account. You must immediately inform us of any unauthorized use of your account. We also reserve the right to close your account for any or no reason.
							</Typography>
							<Typography className={"p-1"} color={"gray"}>
								Your account is only created for your personal, non-commercial use. When creating an account, we ask that you provide complete and accurate information about yourself to confirm your credibility as a contributor. You are not allowed to impersonate someone else (e.g., adopt the identity of a celebrity or someone else you know), create or use another user’s account, provide an email address other than your own, or create several accounts.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Changing terms of service
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								We may change our terms of service from time to time. You should know and also agree that the terms effective at the time of your access to or use of the website governs your access or use.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-2 textSecondary"}
											fontSize={30}
											fontWeight={"bolder"}
											borderLeft={3}
											width={"max-content"}
										>
											CONTENT
										</Typography>
									</ListItemText>
								</ListItem>
								<br/>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Responsibility for your content
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								You are the only person who is responsible for your content, and once your content is published, it may not be withdrawn. You are responsible for all risks related to your content, such as others’ reliance on its accuracy and reliability, or any disclosure in your content that reveals your identity. You cannot claim that your content is sponsored by Brandsreviews.
							</Typography>
							<Typography className={"p-1"} color={"gray"}>
								You may expose yourself to liability if your content includes false information, intentionally misleading information; violates any third-party right, including any copyright, moral right, trademark, privacy right, right of publicity, patent, trade secret or any other intellectual property or proprietary right; contains illegal hate speech or pornography; violates law.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Our Right to Use Your Content
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								We are allowed to use your content in different ways, such as displaying it publicly, incorporating it into advertisements and other works, promoting it, and distributing it. Therefore, you give us perpetual, non-exclusive, assignable, and transferable rights to use your content for any purpose. You also give the users of the website and any other media the right to access your content in relation to our website or any other media. Finally, you irrevocably waive against Brandsreviews and its users any claims of moral rights or attribution related to your Content.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Advertisement
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Brandsreviews has permission to publicly display advertisements and other information included in your content. You are not entitled to any compensation for such advertisements.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Ownership
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								You own your content and we own Brandsreviews content. We also own the copyrights, trademarks, service marks, trade names, and other intellectual rights related to Brandsreviews webite.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Other
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								User Content does not necessarily reflect the opinion of Brandsreviews. We reserve the right (but have no obligation) to remove User Content for any reason or no reason, and without notice to you. We have no obligation to provide you with copies of your Content, nor do we make warranties regarding your content.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Restrictions
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								We are not obliged enforce the terms on your behalf against another user. We reserve the right to investigate and take appropriate action at our sole discretion.You agree not to, and will not assist, encourage, or enable others to use our website to:
							</Typography>
							<List>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Violate our Review Guidelines, for instance, by writing a fake review.
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Threaten or harass others.
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Promote a business or other commercial event.
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Participate in keyword spamming or manipulating the website’s search results
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Violate law or regulation.
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Use any robot, spider, site search/retrieval application, or other automated device, to access our website.
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Take any action that imposes an unreasonable large load on Brandsreviews’ technology infrastructure or otherwise make excessive traffic demands of  our website.
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Use the website to transmit any computer viruses or other items of a destructive nature
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Copy or store any content on Brandsreviews website for anything other than for your own personal use;
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Register more than one user account;
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Brandsreviews advertising
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								If you create a business owner’s account on our website, then Brandsreviews advertising Agreement will apply. If there is any conflict between Brandsreviews advertising agreement and these terms, Brandsreviews advertising agreement will prevail.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-2 textSecondary"}
											fontSize={30}
											fontWeight={"bolder"}
											borderLeft={3}
											width={"max-content"}
										>
											Guidelines and policies
										</Typography>
									</ListItemText>
								</ListItem>
								<br/>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Privacy
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								You represent that you have completely understand our Privacy Policy. Note that we may disclose information about you to third parties if we believe that such a disclosure is reasonably necessary.General Policy.
							</Typography>
							<Typography className={"p-1"} color={"gray"}>
								It is Brandsreviews policy to (1) block access to or remove material that we believe to be copyrighted material that has been illegally copied and distributed and (ii) remove and discontinue service to repeat offenders.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Procedure for Reporting Copyright Infringements.
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								If you believe that material on Brandsreviews website or infringes a copyright, please send a notice of copyright infringement.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Third parties
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Our website may include links to other websites. We do not control or endorse them. Therefore, your use of third-party websites is at your own risk.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Limitations of liability
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								You are supposed to read this section because it restricts the liability of the brandsreviews entities to you. By agreeing to these terms, you are giving up some legal rights.
							</Typography>
							<List>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• The website is made available to you and Brandsreviews entities may not review or control user content. Your use of the website is at your own discretion. Brandsreviews make no promises about the accuracy or reliability of the website. Accordingly, the Brandsreviews is liable to you for any loss or damage that might arise.
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Brandsreviews entities expressly disclaim all warranties. It means that no oral or written information provided to you by a representative of one of the brandsreviews entities shall create a warranty.
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• Brandsreviews entities make no promises regarding any third party, such as the businesses. Accordingly, Brandsreviews is not liable to you for any loss or damage that might arise from actions or omissions.
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
											fontWeight={"bolder"}
										>
											• Termination
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<List>
								<ListItem className={"p-0"}>
									<ListItemText className={"p-0"}>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={17}
											fontWeight={"lighter"}
											color={"gray"}
										>
											• These Terms will remain in full force while you use Brandsreviews website or service. Brandsreviews can terminate these terms of Service for any reason, at any time.
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Divider />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-2 textSecondary"}
											fontSize={30}
											fontWeight={"bolder"}
											borderLeft={3}
											width={"max-content"}
										>
											Privacy
										</Typography>
									</ListItemText>
								</ListItem>
								<br />
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• Brandsreviews Principles
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Here at Brandsreviews, we strongly believe in trust. The more we trust each other, the more we will all benefit from our experiences. We hope this is reflected in our Privacy Policy below.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• The Information We Collect
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								For the purpose of this Privacy Policy, Personal Data refers to any information related to an identified person; an identifiable person is someone who can be identified by reference to an identifier such as a name, an identification number, location data, etc.
							</Typography>
							<Typography className={"p-1"} color={"gray"}>
								When you visit Brandsreviews, you give us two types of information: personal information you choose to reveal that we collect, and website use information that we collect as you interact with Brandsreviews website. When you enter Brandsreviews, we may collect your browser type and IP address. This information will be kept private, and it is not used to track individual activity and only be applied to deter spammers or improve Brandsreviews experience. Moreover, we might store information from your browser through cookies.
							</Typography>
							<Typography className={"p-1"} color={"gray"}>
								When you use Brandsreviews, you might make your personal profile, send messages, post in forms, and transmit information through different channels. We collect this information to offer you high-quality service and personalized features.
							</Typography>
							<Typography className={"p-1"} color={"gray"}>
								You share all content at your own risk. We allow you to set privacy options that limit access to your pages, but you need to know that no security measures for any website are 100% secure. We cannot control the actions of other users with whom you may share your pages and information. Therefore, we cannot and do not guarantee that your content on Brandsreviews website will not be viewed by unauthorized people. You acknowledge that, even after removal, copies of your content may remain viewable in cached and archived pages.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• Children Under Age 13
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Brandsreviews does not knowingly collect personal information from those under the age of 13; it also does not knowingly allow such people to register. If you are under 13, please do not attempt to register for Brandsreviews.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• Children Between Ages of 13 and 18
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								We recommend that children between ages of 13 and 18 ask their parents for permission before sending information about themselves over the Internet.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• Video Reviews
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Videos submitted on Brandsreviews might be published to YouTube using YouTube API Services. When creating and submitting a video, you are subject to the <Link href="https://www.youtube.com/t/terms" borderBottom={1}>YouTube Terms of Service</Link>.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• Use of Information Obtained by Brandsreviews
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								When you register with Brandsreviews, you make your own profile and privacy settings. Your profile information, and your first name, last initial and photo, are shown to people in Brandsreviews community. We can occasionally use your name and email address to send you notifications regarding new services offered by Brandsreviews.
							</Typography>
							<Typography className={"p-1"} color={"gray"}>
								Brandsreviews reserves the right to send you notices about your account.
							</Typography>
							<Typography className={"p-1"} color={"gray"}>
								Brandsreviews might use information in your profile for purposes such as knowing how many people in a particular network are interested in a certain business category, and personalizing advertisements and promotions.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• Links
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Brandsreviews may contain links to third party websites. We are not responsible for the privacy practices of other web sites.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• Third Party Advertising
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Advertisements that appear on Brandsreviews might be delivered to you by third party advertisers. They automatically receive your IP address when this happens. These third party advertisers may also download cookies to your computer, or use other technologies to measure the effectiveness of their ads.
							</Typography>
							<Typography className={"p-1"} color={"gray"}>
								Brandsreviews does not have access to the cookies that could be placed by the third party advertisers.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• Security
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Brandsreviews takes precautions to protect users information. Your account information is located on a secured server.
							</Typography>
							<br />
							<List>
								<ListItem className={"p-0"}>
									<ListItemText>
										<Typography
											component="div"
											className={"px-1"}
											fontSize={20}
										>
											• Terms of Service, Notices and Revisions
										</Typography>
									</ListItemText>
								</ListItem>
							</List>
							<Typography className={"p-1"} color={"gray"}>
								Your use of Brandsreviews, is subject our Privacy Policy and our Terms of Service. We have the right to change our Privacy Policy and our Terms of Service at any time. We would like to ask you to refer to our Privacy Policy and Terms of Service on an ongoing basis, so that you understand our current Privacy Policy.
							</Typography>
						</Grid>
					</Grid>

				</Container>
			</div>
		</SiteLayout>
	);
}


export async function getServerSideProps({ req,query }) {
	let menuCategories;
	let setting;
  
	const layoutData = await fetchLayoutData();
	menuCategories = layoutData?.categories;
	setting = layoutData?.setting;
  
	return {
	  props: {
		menuCategories,
		setting,
		hostname: "https://www." + req?.headers?.host
	  },
	};
  }

  
export default reviewPolicy;
