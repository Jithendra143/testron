import ClientLogoSlider from "@/components/ClientLogoSlider";
import ContactForm from "@/components/ContactForm";
import HomeBanner from "@/components/HomeBanner";
import SectionWrapper from "@/components/SectionWrapper";

import { SubText, SubTitle, Title } from "@/components/ui/text";
import { useTranslations } from "next-intl";

const advantages = [
	{
		title: "Manufacturing",
		subTitle: "Driven Expertise",
		description:
			"Deep industry knowledge backed by strong engineering foundations and years of practical experience.",
	},
	{
		title: "Custom Solution",
		subTitle: "No Catalog Products",
		description:
			"Precision-built machinery designed for durability, productivity, and operational efficiency.",
	},
	{
		title: "Built for Continuous",
		subTitle: "Industrial Performance",
		description:
			"Dedicated technical assistance and after-sales support to keep your operations running smoothly.",
	},
	{
		title: "Reliability",
		subTitle: "You Can Measure",
		description:
			"Tailor-made polymer processing solutions designed around your business requirements.",
	},
];

export default function Home() {
	const t = useTranslations('home')
	return (
		<>
			<HomeBanner />

			{/* About Section */}
			<SectionWrapper className="bg-blue-100">
				<div className="min-h-[50vh] flex flex-col items-center justify-center text-center gap-6 max-w-4xl mx-auto">
					<Title className="text-3xl md:text-5xl font-light text-darkColor leading-tight">
						{t('home_about_title')}
					</Title>

					<SubText className="text-base md:text-xl text-lightColor leading-relaxed">
						{t('home_about_description')}
					</SubText>
				</div>
			</SectionWrapper>

			{/* Advantage Section */}
			<SectionWrapper className="bg-linear-to-r from-blue-700 to-blue-900">
				<div className="min-h-[50vh] flex flex-col items-center justify-center text-center gap-6">
					<Title className="text-3xl md:text-5xl font-light text-white leading-tight">
						{t('home_advantage_title')}
					</Title>

					<SubTitle className="text-lg md:text-2xl text-white/95 font-medium leading-relaxed">
						{t('home_advantahe_subtitle')}
					</SubTitle>

					<div className="space-y-5 max-w-4xl">
						<SubText className="text-base md:text-xl text-white/90 leading-relaxed">
							{t('home_advantage_text1')}
						</SubText>

						<SubText className="text-base md:text-xl text-white/90 leading-relaxed">
							{t('home_advantage_text2')}
						</SubText>
					</div>

					{/* Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full mt-10">
						{advantages.map((item, index) => (
							<div
								key={index}
								className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-8 md:p-10 text-start transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl"
							>
								{/* Glow */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-white/10 via-transparent to-blue-300/10" />

								{/* Content */}
								<div className="relative z-10 flex flex-col gap-5">
									{/* Number */}
									<div className="text-white/30 text-5xl font-bold">
										0{index + 1}
									</div>

									{/* Title */}
									<div className="space-y-2">
										<h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
											{item.title}
										</h3>

										<h4 className="text-xl md:text-2xl text-blue-100 font-light leading-tight">
											{item.subTitle}
										</h4>
									</div>

									{/* Description */}
									<p className="text-white/80 leading-relaxed text-base md:text-lg">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</SectionWrapper>

			{/* Client Slider */}
			<ClientLogoSlider />

			<SectionWrapper className="bg-blue-100">
				<div className="mx-auto flex min-h-[50vh] max-w-5xl flex-col items-center justify-center gap-6 text-center">
					<div className="space-y-4">
						<Title className="text-3xl font-light leading-tight text-darkColor md:text-5xl">
							Let&apos;s Talk!!!
						</Title>

						<p className="mx-auto max-w-2xl text-base leading-relaxed text-lightColor md:text-lg">
							Let&apos;s build a solution that works for your process. Reach out
							and our team will get back with a clear, practical approach.
						</p>
					</div>

					<div className="mt-6 w-full rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-10">
						<ContactForm />
					</div>
				</div>
			</SectionWrapper>
		</>
	);
}
