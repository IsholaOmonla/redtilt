import { Cpu } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import { Globe } from 'lucide-react';
import { CloudUpload } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import Javascript from '../assets/javascript-155-svgrepo-com.svg';
import flutter from '../assets/flutter.svg';
import prisma from '../assets/prisma-svgrepo-com.svg';
import postgres from '../assets/postgres.svg';
import remix from '../assets/remix-light.svg';
import mongo from '../assets/mongodb.svg';
import image from '../assets/man-laptop.jpg';
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from 'aos';
Aos.init();


const Offer = () => {
  return (
    <>
      <div className="text-center flex justify-center items-center flex-col" id="service">
				<h1 className="mb-2">What we offer</h1>
				<p className="capitalize rounded-full py-2 px-6 border-2 border-red-900 max-w-md">our experts will help you in following fields </p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center place-items-center px-4 py-16 gap-8 '>
				{/* Development */}
				<div className='bg-red-800 flex flex-col w-72  pt-3 rounded-md h-[400px]' data-aos="fade-up" data-aos-duration="5000">
					<div className='flex py-5 pl-5 justify-start items-center'>
						<Cpu className='pl-3 pr-2 w-14 h-14'/>
						<p className='text-xl pr-3'>Development</p>
					</div>
					<div className='pl-12'>
						<ul className='flex flex-col justify-end pl-3 pt-3 pb-20 bg-[darkred] rounded-ss-md rounded-ee-md text-sm '>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>UIUX</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>DevOps</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Web design</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Frontend Dev</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Backend Dev</p>
							</li>
						</ul>
					</div>
				</div>

				{/* MSP */}
				<div className='bg-red-800 flex flex-col w-72  pt-3 rounded-md h-[400px]' data-aos="fade-up" data-aos-duration="5000">
					<div className='flex py-5 pl-5 justify-start items-center'>
						<Globe className='pl-3 pr-2 w-14 h-14'/>
						<p className='text-xl pr-3'>MSP</p>
					</div>
					<div className='pl-12'>
						<ul className='flex flex-col justify-end pl-3 pt-3 pb-[6.45rem] bg-[darkred] rounded-ss-md rounded-ee-md text-sm  h-full'>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Infrastructure manager</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Managed Monitoring</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Business Continuity</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Managed Cyber</p>
							</li>
						</ul>
					</div>
				</div>

				{/* Cloud */}
				<div className='bg-red-800 flex flex-col w-72  pt-3 rounded-md h-[400px]' data-aos="fade-up" data-aos-duration="5000">
					<div className='flex py-5 pl-5 justify-start items-center'>
						<CloudUpload className='pl-3 pr-2 w-14 h-14'/>
						<p className='text-xl pr-3'>Cloud</p>
					</div>
					<div className='pl-12'>
						<ul className='flex flex-col justify-end pl-3 pt-3 bg-[darkred] rounded-ss-md rounded-ee-md text-sm '>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>AWS</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>AZURE</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Multi-Cloud</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>SRE Strategy</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Server less</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Hybrid Strategy</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Containerisation</p>
							</li>
						</ul>
					</div>
				</div>

				{/* Cyber */}
				<div className='bg-red-800 flex flex-col w-72  pt-3 rounded-md h-[400px]' data-aos="fade-up" data-aos-duration="5000">
					<div className='flex py-5 pl-5 justify-start items-center'>
						<ShieldCheck className='pl-3 pr-2 w-14 h-14'/>
						<p className='text-xl pr-3'>Cyber</p>
					</div>
					<div className='pl-12'>
						<ul className='flex flex-col justify-end pl-3 pt-3 pb-[7.5rem] bg-[darkred] rounded-ss-md rounded-ee-md text-sm '>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Cyber Audit</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Cyber governance</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Security as a service</p>
							</li>
							<li className='flex items-center pb-2'>
								<CircleCheck className='pr-2 w-8 h-8'/>
								<p>Penetration Testing</p>
							</li>
						</ul>
					</div>
				</div>

			</div>

			<div className='max-w-7xl px-6 pb-24 mt-20'>
				<h1 className='text-center text-3xl'>Our Superpowers</h1>
				<div className='pt-12 px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center justify-center gap-6 place-items-center'>
					<img src={Javascript} alt="javascript" className='w-14 h-14' />
					<img src={flutter} alt="javascript" className='w-14 h-14' />
					<img src={prisma} alt="javascript" className='w-14 h-14' />
					<img src={postgres} alt="javascript" className='w-14 h-14' />
					<img src={remix} alt="javascript" className='w-14 h-14' />
					<img src={mongo} alt="javascript" className='w-14 h-14' />
				</div>
			</div>

			<div className='text-center mb-5' id='blog'>
				<p className='pb-3'>Read Our Blog</p>
				<div className='text-3xl font-bold'>
					<h1>Read Daily news about</h1>
					<h1>startup companies</h1>
				</div>
			</div>

			<div className='mx-5 md:flex gap-7 px-5 py-5  border border-red-90'>
				<div className='px-3'>
					<img src={image} alt="" className='hidden md:flex' />
				</div>

				<div className='grid grids-cols-1 content-between'>
					<div>
						<p className='text-3xl pb-4 font-normal'>Not Another Framework</p>
						<p className='pb-2'>We brought all the remix goodies over to React Router and made improvements in the process.</p>
						<p className='pb-5 border-b border-1 border-gray-700'>Now it's time to bring those improved APIs back over to Remix where they started!</p>
					</div>
					<div className='flex flex-col'>
						<div className='flex gap-3 mb-3'>
							<CircleCheck className='w-5 h-5'/>
							<p>Collaboration Tools</p>
						</div>
						<div className='flex gap-3'>
							<CircleCheck className='w-5 h-5'/>
							<p>Collaboration Tools</p>
						</div>
					</div>
				</div>
			</div>

    </>
  )
}

export default Offer