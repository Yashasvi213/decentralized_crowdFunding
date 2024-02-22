import React from 'react'

function AboutFaucet() {
  return (
    <>
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
      Understanding Faucets <br/> A Gateway to Cryptocurrency
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
          Faucets serve as entry points into the world of cryptocurrency, offering small amounts of digital assets to users for free.
          </p>

          <p>
          Faucets play a crucial role in introducing newcomers to the crypto ecosystem, allowing them to accumulate small amounts of various cryptocurrencies without the need for initial investment. While the rewards may seem modest, faucets provide an educational experience and a glimpse into the potential of digital currencies.
          </p>
        </article>

        <span
  className="mt-8 mx-auto inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="-ms-1 me-1.5 h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>

  <p className="whitespace-nowrap text-sm m-0 p-2">Connect wallet to continue...</p>
</span>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default AboutFaucet