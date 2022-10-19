import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'REQUEST A RIDE',
    description:
      'Have to reach office or going for shopping ? Just put your current location and destination and search a ride that suits you',
    icon: GlobeAltIcon,
  },
  {
    name: 'POST A RIDE',
    description:
      'Going somewhere but hate to travel alone - just post your ride details and publish it',
    icon: ScaleIcon,
  },
  {
    name: 'INSTANT NOTIFICATIONS',
    description:
      'Get instant notifications for your rides and be in contact with fellow riders all the time',
    icon: BoltIcon,
  },
  {
    name: 'CASHLESS PAYMENT',
    description:
      'Payment made easy by using your own Wallet - no more cash to carry',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export default function Content() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          HOW TERE WORKS
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Download and install the tere app. Enter your phone number and make your user account. when approved you may start driving..
          </p>
        </div>

        <div className="mt-10">
            
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
