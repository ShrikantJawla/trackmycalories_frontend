import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'
import React from 'react'

const CustomBreadcrumb = () => {
  return (
    <Breadcrumb
      w="full"
      fontSize={18}
      spacing="8px"
      separator={<BiChevronRight color="gray.500" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink fontWeight={600} href="#">
          About
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default CustomBreadcrumb
