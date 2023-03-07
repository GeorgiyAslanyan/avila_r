import sanityClient from "@sanity/client";
import imageUrlBulder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_ID;


export const client = sanityClient({
    projectId: 'bfujptk4',
    dataset: 'production',
    apiVersion: '2023-02-22',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBulder(client)

export const urlFor = (source) => builder.image(source)