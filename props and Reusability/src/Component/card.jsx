import React from 'react'

function Card({userName,about,imagePath,btntext}) {
  return (
    <div class="relative hover:scale-105 transition-all hover:shadow-[1px_1px_10px_black] shadow-[0.5px_0.25px_5px_black] h-[250px] w-[200px] rounded-md overflow-hidden">
        <img
            src={imagePath}
            alt="AirMax Pro"
            class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
            <h1 class="text-lg font-semibold text-white">{userName}</h1>
            <p class="mt-2 w-[200px] h-auto text-xs text-gray-300">
            {about}
            </p>
            <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btntext} →
            </button>
        </div>
    </div>
  )
}

export default Card