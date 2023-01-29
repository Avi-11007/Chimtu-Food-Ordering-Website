import sanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"
export const client = sanityClient({
    projectId:"4vc3ampr",
    dataset:"production",
    apiVersion:"2023-01-25",
    useCdn:true,
    token:
        "skR7nSrcfTuRgle7npV7QqZbAVNH475HFdlY6Y3eBDpQmhXKOKTByTOJP6i3GcP3IMR74M8Ft865ys1Ho5ZUhNGYKJnLSAUHgQuJCci1rbALoFBUasikDoSE4RCIOcdCSnJsU8ez9LrY3nI5x6RfW9navXuqbsoULc7CPQ3uSRtxtwSx2oi0",
    ignoreBrowserTokenWarning: true
})

const builder=ImageUrlBuilder(client);
export const urlFor =(source)=> builder.image(source)
