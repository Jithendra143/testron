import Image from "next/image";
import Container from "./Container";
import { cn } from "@/lib/utils";

export default function PageBanner({
	title,
	subTitle,
	image,
	className,
}) {
	return (
		<section
			className={cn(
				"relative w-full h-75 overflow-hidden",
				className
			)}
		>
			{/* Background Image */}
			<Image
				src={image}
				alt={title}
				fill
				priority
				className="object-cover"
			/>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/50" />

			{/* Content */}
			<div className="relative z-10 h-full">
				<Container className="h-full">
					
					<div className="flex flex-col items-center justify-center text-center h-full gap-4 max-w-4xl mx-auto">
						
						<h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
							{title}
						</h1>

						{subTitle && (
							<p className="text-base md:text-xl text-white/85 leading-relaxed max-w-2xl">
								{subTitle}
							</p>
						)}

					</div>

				</Container>
			</div>
		</section>
	);
}