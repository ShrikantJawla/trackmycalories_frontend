import { Box, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

let images = [
  'https://raw.githubusercontent.com/ShrikantJawla/trackmycalories/main/client/ImagesForCrousel/GNC-Desktop-Homepage-Banner-3800x800-AMP-1.webp',
  'https://raw.githubusercontent.com/ShrikantJawla/trackmycalories/main/client/ImagesForCrousel/Muscletech-homepage-banner-desktop-A.webp',
  'https://raw.githubusercontent.com/ShrikantJawla/trackmycalories/main/client/ImagesForCrousel/Nutrabay-All-HomePage-Desktop-Banner-1600x337.webp',
  'https://raw.githubusercontent.com/ShrikantJawla/trackmycalories/main/client/ImagesForCrousel/OptimumNutrition-DesktopBanner-WPI-1600x337.webp',
  'https://raw.githubusercontent.com/ShrikantJawla/trackmycalories/main/client/ImagesForCrousel/Plant-Protein-Vegan-3800x800px-1-1600x337.webp',
  'https://raw.githubusercontent.com/ShrikantJawla/trackmycalories/main/client/ImagesForCrousel/Swisse-DesktopBanner-Upto40off-1600x337.webp',
]
let id
const ImagesCrousel = () => {
  const [image, setImage] = useState(0)
  if (image == images.length) {
    setImage(0)
  }

  useEffect(() => {
    id = setInterval(() => {
      setImage((prev) => (prev = prev + 1))
    }, 4000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <Box w="full" position="relative">
      <Image w="full" src={images[image]} />
      <Box position="absolute" left="2%" top="40%">
        <AiOutlineLeft
          fontSize={40}
          color="red"
          cursor="pointer"
          onClick={() => setImage((prev) => (prev = prev - 1))}
        />
      </Box>
      <Box position="absolute" right="2%" top="40%">
        <AiOutlineRight
          fontSize={40}
          color="red"
          cursor="pointer"
          onClick={() => setImage((prev) => (prev = prev + 1))}
        />
      </Box>
    </Box>
  )
}

export default ImagesCrousel
