
const features = [
  {
    name: 'REQUEST A RIDE',
    description:
      'Have to reach office or going for shopping ? Just put your current location and destination and search a ride that suits you',
    number: 1,
  },
  {
    name: 'POST A RIDE',
    description:
      'Going somewhere but hate to travel alone - just post your ride details and publish it',
    number: 2,
  },
  {
    name: 'INSTANT NOTIFICATIONS',
    description:
      'Get instant notifications for your rides and be in contact with fellow riders all the time',
    number: 3,
  },
  {
    name: 'CASHLESS PAYMENT',
    description:
      'Payment made easy by using your own Wallet - no more cash to carry',
    number: 4,
  },
]

export default function Content() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            
          HOW <span className="text-green-600 "> TERE </span> WORKS
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
                  
                  <span className=" flex h-14 w-14 items-center justify-center rounded-md text-green">

                  <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
<path d="M59.8302 19.8391L59.6756 19.4624L59.3885 19.7511L53.6696 25.5002L53.5606 25.6098L53.5998 25.7594C54.0779 27.5821 54.3172 29.4652 54.3172 31.4096C54.3172 44.0293 44.0596 54.2869 31.4399 54.2869C18.7897 54.2869 8.5323 44.0291 8.5323 31.4096C8.5323 29.4344 8.77171 27.521 9.24966 25.6988L9.28889 25.5493L9.17983 25.4396L3.46101 19.6906L3.17292 19.4009L3.01899 19.7793C1.55408 23.3806 0.729692 27.2881 0.729692 31.4096C0.729692 48.322 14.4972 62.0895 31.4096 62.0895C48.322 62.0895 62.0895 48.322 62.0895 31.4096C62.0895 27.3198 61.2959 23.4119 59.8302 19.8391ZM50.4294 18.7004L50.6125 18.9735L50.845 18.741L56.0495 13.5365L56.2143 13.3717L56.0755 13.1845C50.4897 5.64515 41.5148 0.729692 31.4096 0.729692C21.3351 0.729692 12.36 5.61454 6.77395 13.1542L6.63522 13.3415L6.80001 13.5063L12.0044 18.7107L12.237 18.9432L12.4201 18.6701C15.8893 13.4962 21.4218 9.81817 27.8204 8.80138C28.9861 8.62207 30.1825 8.5323 31.4096 8.5323C32.6368 8.5323 33.8332 8.62208 34.999 8.8014C41.4272 9.81813 46.9598 13.5259 50.4294 18.7004Z" fill="#75BF7A" stroke="#75BF7A" stroke-width="0.540615"/>

</svg>


{feature.number} 
         
                  </span>
                  
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
