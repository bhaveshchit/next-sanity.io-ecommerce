import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'e4dypn2r',
    dataset: 'production',
    apiVersion: '2022-10-22',
    useCdn: true,
    token: 'skaf2PIgDygIaFTfNun1G4lmawOOMmQOcc6TMJmbsorjqIKB7GjselPCjdIgK6nMdszYVpVkaBMewFl0Y9n94KNgnudohSnPnBmP82jPF0vUeIbMllcCyPP20DOrqwD4vpL6DearM3Xoi71zIB1NTOwlJgMmzcHZ742cyKGUHSeahnw5tCmD'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);