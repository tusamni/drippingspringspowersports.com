import service from "@astrojs/netlify/image-service.js";

export const siteConfig = {
	name: "Dripping Springs Outdoor Powersports",
	nameShort: "DS Outdoor Powersports",
	phone: {
		base: "+15126090471",
		formatted: "(512) 609-0471",
	},
	email: {
		base: "chris@drippingspringspowersports.com",
	},
	url: "https://drippingspringspowersports.com",
	description: "Your premier destination for outdoor powersports in Dripping Springs, TX.",
};

export const faqs = [
	{
		title: "Service & Repair",
		items: [
			{
				question: "What types of powersports equipment do you service/repair?",
				answer: "We service and repair virtually all off-road equipment, including ATVs (Quads), UTVs (Side-by-Sides), Dirt Bikes, and Scooters. If it has an engine and is used for outdoor fun, chances are we can fix it!",
			},
			{
				question: "What major brands do you service?",
				answer: "Our certified technicians have extensive experience with all major powersports manufacturers, including Polaris, Can-Am, Yamaha, Kawasaki, Honda, Suzuki, and more. We use manufacturer-specific diagnostic tools to ensure accurate service for every brand.",
			},
			{
				question: "Can I bring in my own parts for a repair or upgrade?",
				answer: "While we prefer to use high-quality, guaranteed parts sourced through our trusted suppliers, we will install customer-provided parts. Please note that we cannot offer a labor or part warranty on parts that were not supplied by Dripping Springs Outdoor Powersports.",
			},
			{
				question: "Do you perform warranty work?",
				answer: "We are an authorized repair facility for several major brands and can perform warranty-covered repairs. Please contact us with your VIN and equipment details before scheduling service so we can confirm your warranty eligibility.",
			},
			{
				question: "Do you offer performance upgrades or customizations?",
				answer: "Absolutely! We specialize in custom builds and performance upgrades, including lift kits, exhaust systems, ECU tuning, shock servicing, and specialized lighting installations. Let us know your vision, and we’ll make your machine perform its best.",
			},
			{
				question: "What does a typical routine service/maintenance include?",
				answer: "Our routine service typically includes an oil and filter change, inspection of spark plugs and belts, checking and topping off all fluids, lubrication of all necessary pivot points, and a comprehensive multi-point inspection of tires, brakes, suspension, and steering.",
			},
		]
	},
	{
		title: "Scheduling & Logistics",
		items: [
			{
				question: "How do I schedule an appointment?",
				answer: "The easiest way to schedule is by calling our Service Department at [Your Phone Number] or by filling out our online service request form. Walk-ins are accepted, but appointments are highly recommended to minimize your wait time.",
			},
			{
				question: "What is your typical turnaround time for service or repair?",
				answer: "Simple routine maintenance (like oil changes) is often completed within 1-2 business days. Major repairs depend on the complexity and part availability. We will provide you with an estimated completion time when we diagnose your vehicle and keep you updated throughout the process.",
			},
			{
				question: "Do you offer drop-off and pick-up outside of business hours?",
				answer: "Yes, for your convenience, we have an after-hours key drop box located near our main service bay door. Please clearly label your keys and include contact information and a brief note describing the needed service.",
			},
			{
				question: "Do you offer a shuttle service or loaner vehicles?",
				answer: "While we do not offer a shuttle service, we can recommend local towing and transport services. We currently do not offer loaner powersports vehicles, but we strive to complete your repair as quickly as possible.",
			},
		]
	},
	{
		title: "Pricing & Payment",
		items: [
			{
				question: "What is your labor rate?",
				answer: "Our standard shop labor rate is $[Your Hourly Rate] per hour. This rate is clearly stated on all estimates, and we only charge for the time spent actively working on your equipment.",
			},
			{
				question: "Do you provide estimates before starting any work?",
				answer: "Yes. After diagnosing your vehicle, we will contact you with a detailed estimate outlining the total cost for parts and labor. No work will begin until you have formally approved the estimate.",
			},
			{
				question: "Do you offer a warranty on your repairs/labor?",
				answer: "We stand behind our work. We offer a 90-day warranty on all labor and adhere to the manufacturer's warranty on all new parts we supply and install.",
			},
			{
				question: "What forms of payment do you accept?",
				answer: "We accept major credit cards (Visa, MasterCard, American Express, Discover), debit cards, and cash. We also offer [mention any financing options or payment plans, if applicable].",
			},
		]
	}
]

export const reviews = [
	{
		name: "John D.",
		repair: "ATV Engine Overhaul",
		location: "Austin, TX",
		title: "Exceptional Service and Expertise",
		content: "Dripping Springs Outdoor Powersports did an amazing job overhauling my ATV's engine. Their technicians were knowledgeable, friendly, and kept me informed throughout the process. My ATV runs better than ever!",
		rating: 5,
	},
	{
		name: "John D.",
		repair: "ATV Engine Overhaul",
		location: "Austin, TX",
		title: "Exceptional Service and Expertise",
		content: "Can't say enough good things. I had a rear tire blow out on 45, had the bike towed home and started looking into options.  Kept coming back to Flying Wrenches, so I gave him a call for a quick estimate.  He was quick to suggest that I purchase my tires online as there are huge tire markups in Austin, which I was able to confirm through my own research.  Got the tires in and gave him a call, he was up front saying that he would prefer to make his way to Pflugerville on Saturday as he already had an appointment in the area that day and it's easier.",
		rating: 5,
	},
	{
		name: "John D.",
		repair: "ATV Engine Overhaul",
		location: "Austin, TX",
		title: "Exceptional Service and Expertise",
		content: "Chris Porter (owner of Flying Wrenches Mobile Power) just finished working on the carburetors on my 1983 Kawasaki GPZ 750. He did an outstanding job! He is very professional and went out of his way, (literally) to help me, as I live in Driftwood and he came from Austin. If I could give Chris 10 stars, I would.",
		rating: 5,
	},
	{
		name: "John D.",
		repair: "ATV Engine Overhaul",
		location: "Austin, TX",
		title: "Exceptional Service and Expertise",
		content: "Chris was easy to get a hold of and got me a scheduled within a reasonable time frame. I needed a carb clean and some electrical troubleshooting. He was in and out in an hour. Chris does fantastic work.",
		rating: 5,
	},
	{
		name: "John D.",
		repair: "ATV Engine Overhaul",
		location: "Austin, TX",
		title: "Exceptional Service and Expertise",
		content: "Chris was great - personable, skilled and quick.  The final bill was very reasonable and the work well done",
		rating: 5,
	},
	{
		name: "John D.",
		repair: "ATV Engine Overhaul",
		location: "Austin, TX",
		title: "Exceptional Service and Expertise",
		content: "Chris was awesome. He's always on schedule and is always very reasonably priced and helpful. He went way beyond the call of duty in assisting me with my temperamental chopper. If my bike ever needs work, he will be hearing from me.",
		rating: 5,
	},
	{
		name: "John D.",
		repair: "ATV Engine Overhaul",
		location: "Austin, TX",
		title: "Exceptional Service and Expertise",
		content: "On Christmas, we discovered that a scooter that we had bought for our daughter back in October (worked perfectly then) would crank and idle, but it would die the moment that the throttle was applied. I searched around and called several scooter repair shops (including the local SYM-authorized dealer). Obviously, all were closed. I left messages with several, but none called back or responded. None, that is, EXCEPT Chris.",
		rating: 5,
	},
	{
		name: "John D.",
		repair: "ATV Engine Overhaul",
		location: "Austin, TX",
		title: "Exceptional Service and Expertise",
		content: "This is by far the best motorcycle mechanic I've dealt with in austin ( or anywhere). He has worked on my bike twice both times the service and price were amazing. However circumstances like this set him apart. My motorcycle is my primary vehicle backed up by a 10 speed bike.Last night on my way home something hit my foot but it was late so I parked it and went inside and went to sleep.In the morning i found that my front brake assembly had become disengaged from my disc.Both nuts were gone and I had to get on my 10 speed and ride to work.Before I left I called Flying wrenches.He said he would come over to my house and check it out but that it might be hard to find the hardware on a Saturday.By the time I got to work, 45 minutes later he had gone to my house diagnosed my bike and fixed it with extra parts he keeps on hand. ",
		rating: 5,
	},
	{
		name: "John D.",
		repair: "ATV Engine Overhaul",
		location: "Austin, TX",
		title: "Exceptional Service and Expertise",
		content: "Once again my bike sat too long and needed a carb clean, new battery, and a few other minor things. I really didn't want to have to tow my bike in to a shop, so I decided to try Flying Wrenches. Chris came out a few days later and got my bike up running in a couple of hours. It fires right up and sounds great.",
		rating: 5,
	}
]