import React from 'react'

export default function FeaturedContent() {
    return (
        <article class="group grid rounded-xl max-w-2xl grid-cols-1 md:grid-cols-8 overflow-hidden border border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <div class="flex flex-col justify-center p-6 col-span-8">
                <small class="mb-4 font-medium">Artificial Intelligence</small>
                <h3 class="text-balance text-xl font-bold text-black lg:text-2xl dark:text-white" aria-describedby="articleDescription">AI-Powered VR Goggles Redefine Reality: Augmented Vision for Al</h3>
                <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                    Experience the next level of augmented reality with smart
                    goggles integrating cutting-edge AI for seamless interaction
                    with the world around you.
                </p>
                <a href="#" class="w-fit font-medium text-blue-700 underline-offset-2 hover:underline focus:underline focus:outline-none dark:text-blue-600">
                    Read full story
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2.5" aria-hidden="true" class="inline size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>
        </article>
    )
}
