import { Users } from 'lucide-react';
import { CornerRightUp } from 'lucide-react';
import { Phone } from 'lucide-react';
/* import { iconItems } from '../constants';
 */
import Github from '../assets/github-142-svgrepo-com.svg';
import  Cloud from '../assets/google-cloud-svgrepo-com.svg';
import Linode from '../assets/linode-svgrepo-com.svg';
import Flare from '../assets/cloudflare-icon.png';
import DigitalOcean from '../assets/digitalocean-icon.png';
import Azure from '../assets/azure-svgrepo-com.svg';
import Typing from './Typing'




const HeroSection = () => {
	const text1 = Typing(' From Concept to Code')
	const text2 = Typing(" We Make IT Happen")

  return (
    <>
			<div className='flex flex-col items-center mt-6 lg:mt-20'>
				<h1 className="text-3xl sm:text-4xl lg:text-6xl text-center tracking-wide">
					{text1}
				</h1>
				<h1 className="text-3xl mt-2 bg-gradient-to-b from-red-500 to-red-800 text-transparent bg-clip-text sm:text-4xl lg:text-6xl text-center tracking-wide">
					{text2}
				</h1>
			</div>

			<div className="flex justify-between items-center px-3 mt-4 lg:mx-8">
				<div className="hidden lg:flex rounded-full border-2 bg-red-900 border-[#722F37] px-3 py-3">
					<Users className='w-10 h-10 lg:w-12 sm:h-12 '/>
				</div>
				<div className='sm:text-sm lg:text-lg text-center capitalize flex flex-col justify-center items-center w-full '>
					<p className='md:text-xl'>We help brands and B2B enterprises build amazing</p>
					<p>website that convert thier visitors to paying customers.</p>
				</div>
				<div className="hidden lg:flex rounded-full border-2 bg-red-900 border-[#722F37] px-2 py-2">
					<CornerRightUp className='w-12 h-12 lg:w-14 sm:h-14'/>
				</div>
			</div>

			<div className='flex px-2 py-3 justify-center mt-4 mb-28 text-center'>
				<div className='flex px-5 py-4 rounded-full gap-2 bg-gradient-to-r from-red-900 to-red-700 animate-pulse'>
					<Phone/>
					<a href="#">Lets have a call</a>	
				</div>
			</div>

			<div className='uppercase flex justify-center mb-24'>Trusted by our partners</div>

		
			<div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 justify-center items-center mb-24'>
				
				<div className='flex flex-col justify-center items-center'>
					<img src={DigitalOcean} alt="Digital Ocean" className='w-12 h-12' />
					<p>Digital Ocean</p>
				</div>

				<div className='flex justify-center items-center'>
					<img src={Azure} alt="Digital Ocean" className='w-12 h-12' />
					<p>Azure</p>
				</div>

				<div className='flex justify-center items-center'>
					<img src={Github} alt="Github" className='w-12 h-12' />
				</div>

				<div className='flex justify-center items-center'>
					<img src={Cloud} alt="Cloud" className='w-12 h-12 pr-2' />
					<p>Google Cloud</p>
				</div>

				<div className='flex justify-center items-center'>
					<img src={Linode} alt="Linode" className='w-12 h-12' />
					<p>Linode</p>
				</div>

				<div className='flex flex-col justify-center items-end'>
					<img src={Flare} alt="Linode" className='w-12 h-10' />
					<p>Cloud Flare</p>
				</div>

			</div>
		</>
		
		
  )
}

export default HeroSection