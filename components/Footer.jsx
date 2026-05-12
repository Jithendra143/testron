import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { SubText, SubTitle, Title } from "./ui/text";

export default function Footer() {
	return (
		<footer className="w-full bg-linear-to-r from-blue-800 to-blue-950 text-white pt-14 md:pt-20">
			<Container>
				
				{/* Top Section */}
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10">
					
					<Logo />

					<Title className="text-2xl md:text-4xl text-center lg:text-end text-white font-light max-w-2xl leading-relaxed">
						“Rooted in Values, Centered on You”
					</Title>

				</div>

				{/* Separator */}
				<div className="w-full h-px bg-white/15" />

				{/* Middle Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
					
					{/* Address */}
					<div className="space-y-4">
						
						<SubTitle className="text-white text-xl">
							We Are At
						</SubTitle>

						<SubText className="text-white/80 leading-relaxed">
							Amber Gem Tower One, CWS-2V-228017, 26th floor,
							Sheikh Khalifa Street, Rashideya 3, Ajman,
							United Arab Emirates.
						</SubText>

					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						
						<SubTitle className="text-white text-xl">
							Quick Links
						</SubTitle>

						<div className="flex flex-col gap-3">
							
							<Link
								href="/about"
								className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300"
							>
								About Us
							</Link>

							<Link
								href="/machines"
								className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300"
							>
								Machines
							</Link>

							<Link
								href="/spares-service/spares"
								className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300"
							>
								Spares
							</Link>

							<Link
								href="/spares-service/services"
								className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300"
							>
								Services
							</Link>

							<Link
								href="/contact"
								className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300"
							>
								Contact Us
							</Link>

						</div>

					</div>

					{/* Contact */}
					<div className="space-y-5">
						
						<div className="space-y-2">
							
							<SubTitle className="text-white text-xl">
								Email
							</SubTitle>

							<SubText className="text-white/80">
								enquiry@testronengineering.com
							</SubText>

						</div>

						<div className="space-y-2">
							
							<SubTitle className="text-white text-xl">
								Phone
							</SubTitle>

							<div className="space-y-1">
								
								<SubText className="text-white/80">
									+91 9538 409 062
								</SubText>

								<SubText className="text-white/80">
									+971-52 148 6040
								</SubText>

								<SubText className="text-white/80">
									 +1-506 471 2650
								</SubText>

							</div>

						</div>

					</div>

				</div>

				{/* Separator */}
				<div className="w-full h-px bg-white/15" />

				{/* Bottom Section */}
				<div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
					
					<SubText className="text-white/70 text-sm text-center md:text-start">
						© Copyright 2026 | All Rights Reserved
					</SubText>

					<SubText className="text-white/70 text-sm text-center md:text-end">
						Powered By Webdatalabs
					</SubText>

				</div>

			</Container>
		</footer>
	);
}