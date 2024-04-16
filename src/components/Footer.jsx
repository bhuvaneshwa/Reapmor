import { Link } from "react-router-dom"

export default function Footer() {
  return (
	<div>
		<footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center">
					<img  src="/image.png" className="h-10"/>
				</div>
				
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
				<ul className="space-y-1">
					<li>
						<Link to="/">
						Digital Directory
						</Link>
					</li>
					
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-900">Solutions</h3>
				<ul className="space-y-1">
					<li>
						<Link to="/agribusiness">For Agribusiness</Link>
					</li>
					<li>
						<a>For Farmers (coming soon)</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-900">Company</h3>
				<ul className="space-y-1">
					<li>
						<Link to="/contactus">Contact Us</Link>
					</li>
					<li>
						<a>Our Story (coming soon)</a>
					</li>
					
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase dark:text-gray-900">Social media</div>
				<div className="flex justify-start mr-4 space-x-3">
  <a rel="noopener noreferrer" href="#" title="Linkedin" className="flex items-center p-1">
    <img src="/linkedin.svg"  className="w-5 h-5 fill-current"/>
  </a>
</div>

			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-600">© 2024  Reapmor All rights reserved.</div>
</footer>
	</div>
  )
}
