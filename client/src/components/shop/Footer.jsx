import React from 'react'
import {
  Box,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { TiTick } from 'react-icons/ti'
import { AiFillFacebook, AiOutlineMail, AiFillYoutube } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'

const Footer = () => {
  return (
    <VStack w="full" spacing={6}>
      <VStack w="full" spacing="20px" p="10px" px="35px">
        <Text fontSize={21} w="full" fontWeight={700}>
          Authentic Online Supplement Store in India for Whey Protein, Health,
          Nutrition & Bodybuilding
        </Text>
        <Text color="gray.600" fontSize={12.8} w="full">
          TrackMyCalories is India’s #1 trusted and fastest growing nutrition
          and online supplement store with a wide range of products for health,
          wellness, fitness & bodybuilding, making them easy to purchase &
          accessible all over India.
        </Text>
      </VStack>
      <VStack w="full" p="10px" px="35px">
        <Text fontSize={16} w="full" fontWeight={700}>
          Our Speciality
        </Text>
        <List spacing={3}>
          <ListItem fontSize={12.8}>
            <ListIcon as={TiTick} color="green.500" />
            You get all products delivered directly from us, without any
            middlemen or 3rd party sellers. Additionally, we are certified by
            all the brands or their official Indian supplement importers for
            authentic supplements. This ensures that you always get an authentic
            supplement as the entire supply chain is controlled by us.
          </ListItem>
          <ListItem fontSize={12.8}>
            <ListIcon as={TiTick} color="green.500" />
            Customer satisfaction and happiness is our number 1 priority, we
            deliver this by ensuring a great user experience, fast delivery, and
            high-quality products.
          </ListItem>
          <ListItem fontSize={12.8}>
            <ListIcon as={TiTick} color="green.500" />
            TrackMyCalories is not only a multi-brand store with many top
            International and Indian brands but since April 2019, we have
            launched our own supplement range with a huge level of success and
            customer appreciation.
          </ListItem>
          <ListItem fontSize={12.8}>
            <ListIcon as={TiTick} color="green.500" />
            Committed to providing you genuine products at price points that are
            fair and affordable by all. We often run a lot of freebie offers and
            give away products including samples, gym gloves, shakers, gym bags,
            t-shirts and more to keep customers satisfied.
          </ListItem>
          <ListItem fontSize={12.8}>
            <ListIcon as={TiTick} color="green.500" />A company run by young and
            enthusiastic people whose mission is to help India become a fitter
            and stronger nation and are committed to bringing quality products
            to support this cause.
          </ListItem>
        </List>
      </VStack>

      <VStack w="full" p="10px" px="35px">
        <Text fontSize={16} w="full" fontWeight={700}>
          Products we offer
        </Text>
        <Text fontSize={12.8}>
          We offer products for Bodybuilding, Weight Loss, Wellness and
          Accessories. Our best seller products and categories include Whey
          Proteins, Mass Gainers, Vitamins, BCAAs, Creatine, Pre Workouts. We
          list and fulfil all popular and top supplement brands in India. Our
          best seller brands include Nutrabay, Optimum Nutrition, MuscleBlaze,
          Dymatize, GNC, Universal Nutrition, GAT Sport, MuscleTech, MusclePharm
          and many more.
        </Text>
      </VStack>
      <VStack w="full" p="10px" px="35px">
        <Text fontSize={16} w="full" fontWeight={700}>
          Authenticity Guarantee
        </Text>
        <Text fontSize={12.8}>
          Nutrabay is the only online supplement store in India that can truly
          guarantee authenticity. When purchasing from our website, you never
          have to worry about getting a harmful substance and be 100% confident
          on what you get.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        w="full"
        bg="#e3e2e2"
        py="40px"
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justify={{ base: 'center', lg: 'space-evenly' }}
        spacing={{ base: '10px', lg: 'none' }}
      >
        <VStack w="190px">
          <Text
            fontSize={16}
            fontWeight={700}
            color="gray.800"
            letterSpacing={1.5}
            w="full"
          >
            TrackMyCalories
          </Text>
          <Box mb="50px" w="100px" alignSelf="flex-start" h="2px" bg="black" />
          <VStack w="full">
            <Text w="full">Contack Us</Text>
            <Text w="full">Authenticity</Text>
            <Text w="full">Our Story</Text>
            <Text w="full">Certifications</Text>
            <Text w="full">Importers List</Text>
          </VStack>
        </VStack>
        <VStack w="190px">
          <Text
            fontSize={16}
            fontWeight={700}
            color="gray.800"
            letterSpacing={1.5}
            w="full"
          >
            POLICY
          </Text>
          <Box mb="50px" w="100px" alignSelf="flex-start" h="2px" bg="black" />
          <VStack w="full">
            <Text w="full">Terms of Use</Text>
            <Text w="full">Privacy</Text>
            <Text w="full">Security</Text>
          </VStack>
        </VStack>
        <VStack w="190px">
          <Text
            fontSize={16}
            fontWeight={700}
            color="gray.800"
            letterSpacing={1.5}
            w="full"
          >
            CONNECTED
          </Text>
          <Box mb="50px" w="100px" alignSelf="flex-start" h="2px" bg="black" />
          <HStack fontSize={27} w="full">
            <AiFillFacebook style={{ color: 'blue' }} />
            <AiOutlineMail />
            <AiFillYoutube style={{ color: 'red' }} />
            <IoLogoTwitter style={{ color: 'teal' }} />
          </HStack>
        </VStack>
      </Stack>
      <VStack w="full" py="20px" mt="0">
        <HStack fontSize={20}>
          <FaCcMastercard />
          <FaCcVisa />
        </HStack>
        <Text fontWeight={500} w="full" textAlign="center">
          Copyright 2022 © TrackMyCalories.com or its affiliates. All Rights
          reserved.
        </Text>
      </VStack>
    </VStack>
  )
}

export default Footer
