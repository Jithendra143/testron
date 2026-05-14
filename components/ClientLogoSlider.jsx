'use client'

import Image from "next/image";

import SectionWrapper from "./SectionWrapper";

import {
	SubText,
	Title,
} from "./ui/text";

const clientLogos = [
	{
		id: 1,
		name: "Client 1",
		logo: "/images/clients/client1.png",
	},
	{
		id: 2,
		name: "Client 2",
		logo: "/images/clients/client2.png",
	},
	{
		id: 3,
		name: "Client 3",
		logo: "/images/clients/client3.png",
	},
	{
		id: 4,
		name: "Client 4",
		logo: "/images/clients/client4.png",
	},
	{
		id: 5,
		name: "Client 5",
		logo: "/images/clients/client5.png",
	},
	{
		id: 6,
		name: "Client 6",
		logo: "/images/clients/client6.png",
	},
];

export default function ClientLogoSlider() {
	return (
		<SectionWrapper
			className="relative bg-white overflow-hidden"
			contentClassName="max-w-full"
		>
			{/* Background Shapes */}
			<div className="absolute inset-0 pointer-events-none">
				
				<div className="absolute top-0 inset-s-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60" />

				<div className="absolute bottom-0 inset-e-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-60" />

			</div>

			<div className="relative z-10">
				
				{/* Heading */}
				<div className="text-center mb-12 px-6">
					
					<Title className="text-3xl md:text-5xl font-light text-darkColor">
						Trusted By Industry Leaders
					</Title>

					<SubText className="mt-4 text-lightColor text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
						Building long-term partnerships with manufacturers and
						industrial leaders across multiple sectors.
					</SubText>

				</div>

				{/* Gradient Fade Left */}
				<div className="absolute left-0 top-0 z-20 h-full w-16 md:w-32 bg-linear-to-r from-white to-transparent pointer-events-none" />

				{/* Gradient Fade Right */}
				<div className="absolute right-0 top-0 z-20 h-full w-16 md:w-32 bg-linear-to-l from-white to-transparent pointer-events-none" />

				{/* Slider */}
				<div className="relative w-full overflow-hidden">
					
					<div className="flex animate-marquee gap-6 md:gap-10 w-max py-4">
						
						{[...clientLogos, ...clientLogos].map((client, index) => (
							<div
								key={`${client.id}-${index}`}
								className="group w-40 md:w-52 h-24 md:h-32 bg-white rounded-3xl border border-gray-100 flex items-center justify-center shrink-0 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
							>
								<Image
									src={client.logo}
									alt={client.name}
									width={140}
									height={70}
									className="w-auto h-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
								/>
							</div>
						))}

					</div>

				</div>

			</div>
		</SectionWrapper>
	);
}