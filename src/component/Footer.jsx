import { CircleCheck } from 'lucide-react';
import Facebook from '../assets/facebookIcon.svg';
import Twitter from '../assets/twitterIcon.svg';
import Instagram from '../assets/instaIcon.svg';
import Github from '../assets/githubIcon.svg';

const Footer = () => {
  return (
    <>
		<div className="text-center flex justify-center pb-32">
			<button className="border border-white rounded-xl px-3 py-3">Read more</button>
		</div>

		<div className='md:flex justify-between gap-72 pb-12'>
			
			<div className='flex flex-col items-start mb-14 md:mb-0'>
				<p className='pb-2 text-white'>Got a project in mind?</p>
				<h1 className='text-4xl pb-5 text-white'>Reserve a call</h1>
				<ul className='flex flex-col justify-start items-start gap-4'>
					<li className='flex gap-3 items-center justify-center'>
						<CircleCheck className='w-6 h-6 bg-red-600 rounded-full outline-none border-none text-black'/>
						<p>An in depth session to understand your needs</p>
					</li>
					<li className='flex gap-3 items-center justify-center'>
						<CircleCheck className='w-6 h-6 bg-red-600 rounded-full outline-none border-none text-black'/>
						<p>Leran which plan is right for your team</p>
					</li>
					<li className='flex gap-3 items-center justify-center'>
						<CircleCheck className='w-6 h-6 bg-red-600 rounded-full outline-none border-none text-black'/>
						<p>Get onboarding help</p>
					</li>
					<li className='text-xl mt-4'>
						<p>Technical support or some query?</p>
						<p>Contact support</p>
					</li>
				</ul>
			</div>
			
			<div className='flex-1'>
				<p className='text-lg font-semibold px-5 py-3'>Tell us about yourself</p>
				<form action="" className='px-5 py-3'>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>Full Name</label>
						<input type="text" placeholder='TAHA HAIDER' className='mt-2 w-full px-2 py-3 rounded-lg text-sm bg-red-950 outline-none'/>
					</div>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>Work Email</label>
						<input type="text" placeholder='Syed.Shah@RedTilT.Team' className='mt-2 w-full px-2 py-3 rounded-lg text-sm bg-red-950 outline-none'/>
					</div>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>Company Size</label>
						<input type="text" placeholder='1-20' className='mt-2 w-full px-2 py-3 rounded-lg text-sm bg-red-950 outline-none'/>
					</div>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>How Can We Help?</label>
						<textarea type="text" placeholder='I Am Interested In Redtilt For My Team. I Would Like To Learn More About It....' className='mt-2 w-full px-2 py-3 rounded-lg text-sm bg-red-950 outline-none'></textarea>
					</div>
					<div className='mb-3 flex justify-between items-center'>
						<p className='w-48'>You Can Also Email Us At Apac@Redtilt.Team</p>
						<button className='px-4 py-3 rounded-md bg-red-700 text-sm'>Send message</button>
					</div>
				</form>
			</div>
		</div>

		<div className='sm:flex space-y-6 justify-between gap-12 items-center px-6 py-6 bg-red-950 rounded-md mb-5'>
			<div className='flex flex-col'>
				<p className='mb-1 font-semibold'>Newsletter</p>
				<p>Be the first one to know about insights, technologies and innovations.</p>
			</div>
			<button className='px-6 py-3 bg-red-700 text-sm rounded-md'>Subscribe</button>
		</div>

		<div className='sm:flex justify-around items-start gap-8 mt-16'>
			
			<div className='flex flex-col mb-10'>
				<p className='mb-4 font-semibold'>Company</p>
				<ul>
					<li className='pb-3 text-sm'>About</li>
					<li className='pb-3 text-sm'>Service</li>
					<li className='pb-3 text-sm'>Works</li>
					<li className='pb-3 text-sm'>Career</li>
				</ul>
			</div>
			
			<div className='flex flex-col mb-10'>
				<p className='mb-4 font-semibold'>Help</p>
				<ul>
					<li className='pb-3 text-sm'>Customer support</li>
					<li className='pb-3 text-sm'>Terms & Conditions</li>
					<li className='pb-3 text-sm'>Privacy Policy</li>
				</ul>
			</div>
			
			<div className='flex flex-col'>
				<p className='mb-4 font-semibold'>Resources</p>
				<ul>
					<li className='pb-3 text-sm'>Free eBooks</li>
					<li className='pb-3 text-sm'>Development Tutorial</li>
					<li className='pb-3 text-sm'>How to-Blog</li>
					<li className='pb-3 text-sm'>Career</li>
				</ul>
			</div>
		</div>

		<div className='flex justify-between items-center px-7 py-5'>
			<p className='text-xs'>&copy; Copyright 2024, All Rights Reserved</p>
			<div className='flex gap-4'>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Twitter} alt="Twitter" className='w-6 h-6 md:w-8 md:h-8' /></a>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Facebook} alt="Facebook" className='w-6 h-6 md:w-8 md:h-8' /></a>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Instagram} alt="Instagram" className='w-6 h-6 md:w-8 md:h-8' /></a>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Github} alt="Github" className='w-6 h-6 md:w-8 md:h-8' /></a>
			</div>
		</div>
    </>
  )
}

export default Footer